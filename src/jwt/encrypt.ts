/* eslint-disable no-underscore-dangle */

import CompactEncrypt from '../jwe/compact/encrypt.js'
import isObject from '../lib/is_object.js'
import {
  EncryptOptions,
  JWEHeaderParameters,
  JWEKeyManagementHeaderParameters,
  JWTPayload,
  KeyLike,
} from '../types.d'
import { encoder } from '../lib/buffer_utils.js'
import epoch from '../lib/epoch.js'
import secs from '../lib/secs.js'

/**
 * The EncryptJWT class is a utility for creating Compact JWE formatted JWT strings.
 *
 * @example
 * ```
 * // ESM import
 * import EncryptJWT from 'jose/jwt/encrypt'
 * ```
 *
 * @example
 * ```
 * // CJS import
 * const { default: EncryptJWT } = require('jose/jwt/encrypt')
 * ```
 *
 * @example
 * ```
 * // usage
 * const secretKey = Uint8Array.from([
 *   206, 203, 53, 165, 235, 214, 153, 188,
 *   248, 225,  1, 132, 105, 204,  75,  42,
 *   186, 185, 24, 223, 136,  66, 116,  59,
 *   183, 155, 52,  52, 101, 167, 201,  85
 * ])
 * const jwt = await new EncryptJWT({ 'urn:example:claim': true })
 *   .setProtectedHeader({ alg: 'dir', enc: 'A256GCM' })
 *   .setIssuedAt()
 *   .setIssuer('urn:example:issuer')
 *   .setAudience('urn:example:audience')
 *   .setExpirationTime('2h')
 *   .encrypt(secretKey)
 *
 * console.log(jwt)
 * ```
 */
export default class EncryptJWT {
  private _payload: JWTPayload

  private _cek!: Uint8Array

  private _iv!: Uint8Array

  private _keyManagementParameters!: JWEKeyManagementHeaderParameters

  private _protectedHeader!: JWEHeaderParameters

  private _replicateIssuerAsHeader!: boolean

  private _replicateSubjectAsHeader!: boolean

  private _replicateAudienceAsHeader!: boolean

  /**
   * @param payload The JWT Claims Set object to encrypt.
   */
  constructor(payload: JWTPayload) {
    if (!isObject(payload)) {
      throw new TypeError('JWT Claims Set MUST be an object')
    }
    this._payload = payload
  }

  /**
   * Sets the JWE Protected Header on the EncryptJWT object.
   *
   * @param protectedHeader JWE Protected Header.
   * Must contain an "alg" (JWE Algorithm) and "enc" (JWE
   * Encryption Algorithm) properties.
   */
  setProtectedHeader(protectedHeader: JWEHeaderParameters) {
    if (this._protectedHeader) {
      throw new TypeError('setProtectedHeader can only be called once')
    }
    this._protectedHeader = protectedHeader
    return this
  }

  /**
   * Sets the JWE Key Management parameters to be used when encrypting.
   * Use of this is method is really only needed for ECDH-ES based algorithms
   * when utilizing the Agreement PartyUInfo or Agreement PartyVInfo parameters.
   * Other parameters will always be randomly generated when needed and missing.
   *
   * @param parameters JWE Key Management parameters.
   */
  setKeyManagementParameters(parameters: JWEKeyManagementHeaderParameters) {
    if (this._keyManagementParameters) {
      throw new TypeError('setKeyManagementParameters can only be called once')
    }
    this._keyManagementParameters = parameters
    return this
  }

  /**
   * Sets a content encryption key to use, by default a random suitable one
   * is generated for the JWE enc" (Encryption Algorithm) Header Parameter.
   * You do not need to invoke this method, it is only really intended for
   * test and vector validation purposes.
   *
   * @param cek JWE Content Encryption Key.
   */
  setContentEncryptionKey(cek: Uint8Array) {
    if (this._cek) {
      throw new TypeError('setContentEncryptionKey can only be called once')
    }
    this._cek = cek
    return this
  }

  /**
   * Sets the JWE Initialization Vector to use for content encryption, by default
   * a random suitable one is generated for the JWE enc" (Encryption Algorithm)
   * Header Parameter. You do not need to invoke this method, it is only really
   * intended for test and vector validation purposes.
   *
   * @param iv JWE Initialization Vector.
   */
  setInitializationVector(iv: Uint8Array) {
    if (this._iv) {
      throw new TypeError('setInitializationVector can only be called once')
    }
    this._iv = iv
    return this
  }

  /**
   * Set "iss" (Issuer) Claim.
   *
   * @param issuer "Issuer" Claim value to set on the JWT Claims Set.
   * @param replicateAsHeader When true replicates the Claim as a
   * JWE Protected Header Parameter as per [RFC7519#section-5.3](https://tools.ietf.org/html/rfc7519#section-5.3).
   */
  setIssuer(issuer: string, replicateAsHeader = false) {
    this._payload = { ...this._payload, iss: issuer }
    if (replicateAsHeader) {
      this._replicateIssuerAsHeader = true
    }
    return this
  }

  /**
   * Set "sub" (Subject) Claim.
   *
   * @param subject "sub" (Subject) Claim value to set on the JWT Claims Set.
   * @param replicateAsHeader When true replicates the Claim as a
   * JWE Protected Header Parameter as per [RFC7519#section-5.3](https://tools.ietf.org/html/rfc7519#section-5.3).
   */
  setSubject(subject: string, replicateAsHeader = false) {
    this._payload = { ...this._payload, sub: subject }
    if (replicateAsHeader) {
      this._replicateSubjectAsHeader = true
    }
    return this
  }

  /**
   * Set "aud" (Audience) Claim.
   *
   * @param audience "aud" (Audience) Claim value to set on the JWT Claims Set.
   * @param replicateAsHeader When true replicates the Claim as a
   * JWE Protected Header Parameter as per [RFC7519#section-5.3](https://tools.ietf.org/html/rfc7519#section-5.3).
   */
  setAudience(audience: string | string[], replicateAsHeader = false) {
    this._payload = { ...this._payload, aud: audience }
    if (replicateAsHeader) {
      this._replicateAudienceAsHeader = true
    }
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
   * Encrypts and returns the JWT.
   *
   * @param key Private Key or Secret to encrypt the JWT with.
   * @param options JWE Encryption options.
   */
  async encrypt(key: KeyLike, options?: EncryptOptions): Promise<string> {
    const enc = new CompactEncrypt(encoder.encode(JSON.stringify(this._payload)))
    if (this._replicateIssuerAsHeader) {
      this._protectedHeader = { ...this._protectedHeader, iss: this._payload.iss }
    }
    if (this._replicateSubjectAsHeader) {
      this._protectedHeader = { ...this._protectedHeader, sub: this._payload.sub }
    }
    if (this._replicateAudienceAsHeader) {
      this._protectedHeader = { ...this._protectedHeader, aud: this._payload.aud }
    }
    enc.setProtectedHeader(this._protectedHeader)
    if (this._iv) {
      enc.setInitializationVector(this._iv)
    }
    if (this._cek) {
      enc.setContentEncryptionKey(this._cek)
    }
    if (this._keyManagementParameters) {
      enc.setKeyManagementParameters(this._keyManagementParameters)
    }
    return enc.encrypt(key, options)
  }
}

export type { JWEHeaderParameters, JWTPayload, KeyLike }
