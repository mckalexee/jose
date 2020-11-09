import { createSecretKey, generateKeyPair as generateKeyPairCb } from 'crypto'
import { promisify } from 'util'

import random from './random.js'
import { JOSENotSupported } from '../../lib/errors.js'

const generate = promisify(generateKeyPairCb)

export async function generateSecret(alg: string) {
  let length: number
  switch (alg) {
    case 'HS256':
    case 'HS384':
    case 'HS512':
    case 'A128CBC-HS256':
    case 'A192CBC-HS384':
    case 'A256CBC-HS512':
      length = parseInt(alg.substr(-3), 10)
      break
    case 'A128KW':
    case 'A192KW':
    case 'A256KW':
    case 'A128GCMKW':
    case 'A192GCMKW':
    case 'A256GCMKW':
    case 'A128GCM':
    case 'A192GCM':
    case 'A256GCM':
      length = parseInt(alg.substring(1, 4), 10)
      break
    default:
      throw new JOSENotSupported('unsupported or invalid JWK "alg" (Algorithm) Parameter value')
  }

  return createSecretKey(random(new Uint8Array(length >> 3)))
}

interface Options {
  crv?: string
}

export async function generateKeyPair(alg: string, options?: Options) {
  switch (alg) {
    case 'RS256':
    case 'RS384':
    case 'RS512':
    case 'PS256':
    case 'PS384':
    case 'PS512':
    case 'RSA-OAEP':
    case 'RSA-OAEP-256':
    case 'RSA-OAEP-384':
    case 'RSA-OAEP-512':
    case 'RSA1_5':
      return generate('rsa', { modulusLength: 2048, publicExponent: 0x10001 })
    case 'ES256':
      return generate('ec', { namedCurve: 'P-256' })
    case 'ES256K':
      return generate('ec', { namedCurve: 'secp256k1' })
    case 'ES384':
      return generate('ec', { namedCurve: 'P-384' })
    case 'ES512':
      return generate('ec', { namedCurve: 'P-521' })
    case 'EdDSA': {
      switch (options?.crv) {
        case undefined:
        case 'Ed25519':
          return generate('ed25519')
        case 'Ed448':
          return generate('ed448')
        default:
          throw new JOSENotSupported(
            'invalid or unsupported crv option provided, supported values are Ed25519 and Ed448',
          )
      }
    }
    case 'ECDH-ES':
    case 'ECDH-ES+A128KW':
    case 'ECDH-ES+A192KW':
    case 'ECDH-ES+A256KW':
      switch (options?.crv) {
        case undefined:
        case 'P-256':
        case 'P-384':
        case 'P-521':
          return generate('ec', { namedCurve: options?.crv || 'P-256' })
        case 'X25519':
          return generate('x25519')
        case 'X448':
          return generate('x448')
        default:
          throw new JOSENotSupported(
            'invalid or unsupported crv option provided, supported values are P-256, P-384, P-521, X25519, and X448',
          )
      }
    default:
      throw new JOSENotSupported('unsupported or invalid JWK "alg" (Algorithm) Parameter value')
  }
}
