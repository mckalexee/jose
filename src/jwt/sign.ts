/* eslint-disable no-underscore-dangle */

import CompactSign from '../jws/compact/sign.js'
import { JWTInvalid } from '../lib/errors.js'
import isObject from '../lib/is_object.js'
import { JWSHeaderParameters, JWTPayload, KeyLike } from '../types.d'
import { encoder } from '../lib/buffer_utils.js'
import epoch from '../lib/epoch.js'
import secs from '../lib/secs.js'

/**
 * The SignJWT class is a utility for creating Compact JWS formatted JWT strings.
 *
 * @example
 * ```
 * // ESM import
 * import SignJWT from 'jose/jwt/sign'
 * ```
 *
 * @example
 * ```
 * // CJS import
 * const { default: SignJWT } = require('jose/jwt/sign')
 * ```
 *
 * @example
 * ```
 * // usage
 * import parseJwk from 'jose/jwk/parse'
 *
 * const privateKey = await parseJwk({
 *   alg: 'ES256',
 *   crv: 'P-256',
 *   kty: 'EC',
 *   d: 'VhsfgSRKcvHCGpLyygMbO_YpXc7bVKwi12KQTE4yOR4',
 *   x: 'ySK38C1jBdLwDsNWKzzBHqKYEE5Cgv-qjWvorUXk9fw',
 *   y: '_LeQBw07cf5t57Iavn4j-BqJsAD1dpoz8gokd3sBsOo'
 * })
 *
 * const jwt = await new SignJWT({ 'urn:example:claim': true })
 *   .setProtectedHeader({ alg: 'ES256' })
 *   .setIssuedAt()
 *   .setIssuer('urn:example:issuer')
 *   .setAudience('urn:example:audience')
 *   .setExpirationTime('2h')
 *   .sign(privateKey)
 *
 * console.log(jwt)
 * ```
 */
export default class SignJWT {
  private _payload: JWTPayload

  private _protectedHeader!: JWSHeaderParameters

  /**
   * @param payload The JWT Claims Set object to sign.
   */
  constructor(payload: JWTPayload) {
    if (!isObject(payload)) {
      throw new TypeError('JWT Claims Set MUST be an object')
    }
    this._payload = payload
  }

  /**
   * Sets the JWS Protected Header on the SignJWT object.
   *
   * @param protectedHeader JWS Protected Header.
   */
  setProtectedHeader(protectedHeader: JWSHeaderParameters) {
    this._protectedHeader = protectedHeader
    return this
  }

  /**
   * Set "iss" (Issuer) Claim.
   *
   * @param issuer "Issuer" Claim value to set on the JWT Claims Set.
   */
  setIssuer(issuer: string) {
    this._payload = { ...this._payload, iss: issuer }
    return this
  }

  /**
   * Set "sub" (Subject) Claim.
   *
   * @param subject "sub" (Subject) Claim value to set on the JWT Claims Set.
   */
  setSubject(subject: string) {
    this._payload = { ...this._payload, sub: subject }
    return this
  }

  /**
   * Set "aud" (Audience) Claim.
   *
   * @param audience "aud" (Audience) Claim value to set on the JWT Claims Set.
   */
  setAudience(audience: string | string[]) {
    this._payload = { ...this._payload, aud: audience }
    return this
  }

  /**
   * Set "jti" (JWT ID) Claim.
   *
   * @param jwtId "jti" (JWT ID) Claim value to set on the JWT Claims Set.
   */
  setJti(jwtId: string) {
    this._payload = { ...this._payload, jti: jwtId }
    return this
  }

  /**
   * Set "nbf" (Not Before) Claim.
   *
   * @param input "nbf" (Not Before) Claim value to set on the JWT Claims Set.
   * When number is passed that is used as a value, when string is passed
   * it is resolved to a time span and added to the current timestamp.
   */
  setNotBefore(input: number | string) {
    if (typeof input === 'number') {
      this._payload = { ...this._payload, nbf: input }
    } else {
      this._payload = { ...this._payload, nbf: epoch(new Date()) + secs(input) }
    }
    return this
  }

  /**
   * Set "exp" (Expiration Time) Claim.
   *
   * @param input "exp" (Expiration Time) Claim value to set on the JWT Claims Set.
   * When number is passed that is used as a value, when string is passed
   * it is resolved to a time span and added to the current timestamp.
   */
  setExpirationTime(input: number | string) {
    if (typeof input === 'number') {
      this._payload = { ...this._payload, exp: input }
    } else {
      this._payload = { ...this._payload, exp: epoch(new Date()) + secs(input) }
    }
    return this
  }

  /**
   * Set "iat" (Issued At) Claim.
   *
   * @param input "iat" (Issued At) Claim value to set on the JWT Claims Set.
   * Default is current timestamp.
   */
  setIssuedAt(input?: number) {
    if (typeof input === 'undefined') {
      this._payload = { ...this._payload, iat: epoch(new Date()) }
    } else {
      this._payload = { ...this._payload, iat: input }
    }
    return this
  }

  /**
   * Signs and returns the JWT.
   *
   * @param key Private Key or Secret to sign the JWT with.
   */
  async sign(key: KeyLike): Promise<string> {
    const sig = new CompactSign(encoder.encode(JSON.stringify(this._payload)))
    sig.setProtectedHeader(this._protectedHeader)
    if (this._protectedHeader.crit?.includes('b64') && this._protectedHeader.b64 === false) {
      throw new JWTInvalid('JWTs MUST NOT use unencoded payload')
    }
    return sig.sign(key)
  }
}

export type { JWSHeaderParameters, JWTPayload, KeyLike }
