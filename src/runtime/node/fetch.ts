import { get as http } from 'http'
import type { ClientRequest } from 'http'
import { get as https, RequestOptions } from 'https'

import { JOSEError } from '../../lib/errors.js'
import { concat, decoder } from '../../lib/buffer_utils.js'

const protocols: { [protocol: string]: (...args: Parameters<typeof https>) => ClientRequest } = {
  'https:': https,
  'http:': http,
}

export default async (url: URL, timeout: number, options?: RequestOptions) => {
  if (!(url.protocol in protocols)) {
    throw new TypeError('Unsupported URL protocol.')
  }
  return new Promise((resolve, reject) => {
    protocols[url.protocol](
      url,
      {
        ...options,
        timeout,
      },
      async (response) => {
        if (response.statusCode !== 200) {
          reject(new JOSEError('Expected 200 OK from the JSON Web Key Set HTTP response.'))
        } else {
          const parts = []
          // eslint-disable-next-line no-restricted-syntax
          for await (const part of response) {
            parts.push(part)
          }

          try {
            resolve(JSON.parse(decoder.decode(concat(...parts))))
          } catch (err) {
            reject(new JOSEError('Failed to parse the JSON Web Key Set HTTP response as JSON.'))
          }
        }
      },
    ).on('error', reject)
  }) as Promise<any>
}
