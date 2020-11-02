import { promisify } from 'util'
import { pipeline } from 'stream'
import type { Readable } from 'stream'
import { inflateRaw as inflateRawCb, deflateRaw as deflateRawCb, createDeflateRaw } from 'zlib'

import type { InflateFunction, DeflateFunction } from '../../types.d'

const inflateRaw = promisify(inflateRawCb)
const deflateRaw = promisify(deflateRawCb)

export const inflate: InflateFunction = async (input: Uint8Array) => {
  return inflateRaw(input)
}

export const deflate: DeflateFunction = async (input: Uint8Array | Readable) => {
  if (input instanceof Uint8Array) {
    return deflateRaw(input)
  }

  return pipeline(input, createDeflateRaw())
}
