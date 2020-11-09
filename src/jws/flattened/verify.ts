import { JOSEAlgNotAllowed, JWSInvalid, JWSVerificationFailed } from '../../lib/errors.js'
import { concat, encoder, decoder } from '../../lib/buffer_utils.js'
import isDisjoint from '../../lib/is_disjoint.js'
import isObject from '../../lib/is_object.js'
import checkKeyType from '../../lib/check_key_type.js'

import { decode as base64url } from '../../runtime/base64url.js'
import verify from '../../runtime/verify.js'
import validateCrit from '../../lib/validate_crit.js'
import validateAlgorithms from '../../lib/validate_algorithms.js'

import type {
  FlattenedVerifyResult,
  KeyLike,
  FlattenedJWSInput,
  JWSHeaderParameters,
  VerifyOptions,
  GetKeyFunction,
} from '../../types.d'

const checkExtensions = validateCrit.bind(undefined, JWSInvalid, new Map([['b64', true]]))
const checkAlgOption = validateAlgorithms.bind(undefined, 'algorithms')

/**
 * Interface for Flattened JWS Verification dynamic key resolution.
 * No token components have been verified at the time of this function call.
 */
export interface FlattenedVerifyGetKey
  extends GetKeyFunction<JWSHeaderParameters | undefined, FlattenedJWSInput> {}

/**
 * Verifies the signature and format of and afterwards decodes the Flattened JWS.
 *
 * @param jws Flattened JWS.
 * @param key Key, or a function resolving a key, to verify the JWS with.
 * @param options JWS Verify options.
 *
 * @example
 * ```
 * // ESM import
 * import flattenedVerify from 'jose/jws/flattened/verify'
 * ```
 *
 * @example
 * ```
 * // CJS import
 * const { default: flattenedVerify } = require('jose/jws/flattened/verify')
 * ```
 *
 * @example
 * ```
 * // usage
 * import parseJwk from 'jose/jwk/parse'
 *
 * const decoder = new TextDecoder()
 * const jws = {
 *   signature: 'FVVOXwj6kD3DqdfD9yYqfT2W9jv-Nop4kOehp_DeDGNB5dQNSPRvntBY6xH3uxlCxE8na9d_kyhYOcanpDJ0EA',
 *   payload: 'SXTigJlzIGEgZGFuZ2Vyb3VzIGJ1c2luZXNzLCBGcm9kbywgZ29pbmcgb3V0IHlvdXIgZG9vci4',
 *   protected: 'eyJhbGciOiJFUzI1NiJ9'
 * }
 * const publicKey = await parseJwk({
 *   alg: 'ES256',
 *   crv: 'P-256',
 *   kty: 'EC',
 *   x: 'ySK38C1jBdLwDsNWKzzBHqKYEE5Cgv-qjWvorUXk9fw',
 *   y: '_LeQBw07cf5t57Iavn4j-BqJsAD1dpoz8gokd3sBsOo'
 * })
 *
 * const { payload, protectedHeader } = await flattenedVerify(jws, publicKey)
 *
 * console.log(protectedHeader)
 * console.log(decoder.decode(payload))
 * ```
 */
export default async function flattenedVerify(
  jws: FlattenedJWSInput,
  key: KeyLike | FlattenedVerifyGetKey,
  options?: VerifyOptions,
): Promise<FlattenedVerifyResult> {
  if (!isObject(jws)) {
    throw new JWSInvalid('Flattened JWS must be an object')
  }

  if (!('protected' in jws) && !('header' in jws)) {
    throw new JWSInvalid('Flattened JWS must have either of the "protected" or "header" members')
  }

  if ('protected' in jws && typeof jws.protected !== 'string') {
    throw new JWSInvalid('JWS Protected Header must be a string')
  }

  if (!('payload' in jws)) {
    throw new JWSInvalid('JWS Payload must be present')
  }

  if (!('signature' in jws) || typeof jws.signature !== 'string') {
    throw new JWSInvalid('JWS Signature must be a string')
  }

  if ('header' in jws && !isObject(jws.header)) {
    throw new JWSInvalid('JWS Unprotected Header must be an object')
  }

  let parsedProt: JWSHeaderParameters = {}
  if (jws.protected) {
    const protectedHeader = base64url(jws.protected)
    parsedProt = JSON.parse(decoder.decode(protectedHeader))
  }
  if (!isDisjoint(parsedProt, jws.header)) {
    throw new JWSInvalid(
      'JWS Protected and JWS Unprotected Header Parameter names must be disjoint',
    )
  }

  const joseHeader: JWSHeaderParameters = {
    ...parsedProt,
    ...jws.header,
  }

  const extensions = checkExtensions(parsedProt, joseHeader)

  let b64: boolean = true
  if (extensions.has('b64')) {
    b64 = parsedProt.b64!
    if (typeof b64 !== 'boolean') {
      throw new JWSInvalid(
        'The "b64" (base64url-encode payload) Header Parameter must be a boolean',
      )
    }
  }

  const { alg } = joseHeader

  if (!alg) {
    throw new JWSInvalid('missing JWS signature algorithm in JWS Header')
  }

  const algorithms = options && checkAlgOption(options.algorithms)

  if (algorithms && !algorithms.has(alg)) {
    throw new JOSEAlgNotAllowed('"alg" (Algorithm) Header Parameter not allowed')
  }

  if (b64) {
    if (typeof jws.payload !== 'string') {
      throw new JWSInvalid('JWS Payload must be a string')
    }
  } else if (typeof jws.payload !== 'string' && !(jws.payload instanceof Uint8Array)) {
    throw new JWSInvalid('JWS Payload must be a string or an Uint8Array instance')
  }

  if (typeof key === 'function') {
    // eslint-disable-next-line no-param-reassign
    key = await key(parsedProt, jws)
  }

  checkKeyType(alg, key)

  const data = concat(
    encoder.encode(jws.protected || ''),
    encoder.encode('.'),
    typeof jws.payload === 'string' ? encoder.encode(jws.payload) : jws.payload,
  )
  const signature = base64url(jws.signature)
  const verified = await verify(alg, key, signature, data)

  if (!verified) {
    throw new JWSVerificationFailed()
  }

  let payload: Uint8Array
  if (b64) {
    payload = base64url(jws.payload)
  } else if (typeof jws.payload === 'string') {
    payload = encoder.encode(jws.payload)
  } else {
    payload = jws.payload
  }

  const result: FlattenedVerifyResult = { payload }

  if ('protected' in jws) {
    result.protectedHeader = parsedProt
  }

  if ('header' in jws) {
    result.unprotectedHeader = jws.header
  }

  return result
}

export type { KeyLike, FlattenedJWSInput, GetKeyFunction, JWSHeaderParameters, VerifyOptions }
