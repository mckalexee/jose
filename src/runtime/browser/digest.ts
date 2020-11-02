import crypto from './webcrypto.js'

export default async (
  digest: 'sha256' | 'sha384' | 'sha512',
  data: Uint8Array,
): Promise<Uint8Array> => {
  const subtleDigest = `SHA-${digest.substr(-3)}`
  return new Uint8Array(await crypto.subtle.digest(subtleDigest, data))
}
