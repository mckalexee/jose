import { JOSEError } from '../../lib/errors.js'

export default async (url: URL, timeout: number) => {
  const controller = new AbortController()
  setTimeout(() => controller.abort(), timeout)

  const response = await fetch(url.href, {
    signal: controller.signal,
    redirect: 'manual',
    referrerPolicy: 'no-referrer',
    credentials: 'omit',
    mode: 'cors',
    method: 'GET',
  })

  if (response.status !== 200) {
    throw new JOSEError('Expected 200 OK from the JSON Web Key Set HTTP response.')
  }

  try {
    return await response.json()
  } catch (err) {
    throw new JOSEError('Failed to parse the JSON Web Key Set HTTP response as JSON.')
  }
}
