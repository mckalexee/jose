/* eslint-disable max-classes-per-file */

const cJOSEAlgNotAllowed = 'ERR_JOSE_ALG_NOT_WHITELISTED'
const cJOSENotSupported = 'ERR_JOSE_NOT_SUPPORTED'
const cJWEDecryptionFailed = 'ERR_JWE_DECRYPTION_FAILED'
const cJWEInvalid = 'ERR_JWE_INVALID'
const cJWKInvalid = 'ERR_JWK_INVALID'
const cJWSInvalid = 'ERR_JWS_INVALID'
const cJWKSInvalid = 'ERR_JWKS_INVALID'
const cJWTInvalid = 'ERR_JWT_INVALID'
const cJWSVerificationFailed = 'ERR_JWS_VERIFICATION_FAILED'
const cJWTClaimValidationFailed = 'ERR_JWT_CLAIM_VALIDATION_FAILED'
const cJWTExpired = 'ERR_JWT_EXPIRED'
const cJWKSNoMatchingKey = 'ERR_JWKS_NO_MATCHING_KEY'
const cJWKSMultipleMatchingKeys = 'ERR_JWKS_MULTIPLE_MATCHING_KEYS'

const mJWEDecryptionFailed = 'decryption operation failed'
const mJWEInvalid = 'JWE invalid'
const mJWKSNoMatchingKey = 'no applicable key found in the JSON Web Key Set'
const mJWKSMultipleMatchingKeys = 'multiple matching keys found in the JSON Web Key Set'
const mJWSInvalid = 'JWS invalid'
const mJWTInvalid = 'JWT invalid'
const mJWSVerificationFailed = 'signature verification failed'

/**
 * A generic Error subclass that all other specific
 * JOSE Error subclasses inherit from.
 */
export const JOSEError = class extends Error {
  /**
   * A unique error code for the particular error subclass.
   */
  code!: string

  constructor(message?: string) {
    super(message)
    this.name = this.constructor.name
    Error.captureStackTrace(this, this.constructor)
  }
}

/**
 * An error subclass thrown when a JWT Claim Set member validation fails.
 */
export const JWTClaimValidationFailed = class extends JOSEError {
  /**
   * The Claim for which the validation failed.
   */
  claim: string

  /**
   * Reason code for the validation failure.
   */
  reason: string

  constructor(message: any, claim = 'unspecified', reason = 'unspecified') {
    super(message)
    this.code = cJWTClaimValidationFailed
    this.claim = claim
    this.reason = reason
  }
}

const makeError = (parent: typeof JOSEError, name: string, code: string, defaultMessage?: string) =>
  class extends parent {
    constructor(msg?: string, ...rest: any[]) {
      if (msg === undefined) {
        // eslint-disable-next-line no-param-reassign
        msg = defaultMessage
      }
      // @ts-ignore
      super(msg, ...rest)
      this.code = code
      this.name = name
    }
  }

/**
 * An error subclass thrown when a JOSE Algorithm is not allowed per developer preference.
 */
export const JOSEAlgNotAllowed = makeError(JOSEError, 'JOSEAlgNotAllowed', cJOSEAlgNotAllowed)
/**
 * An error subclass thrown when a particular feature or algorithm is not supported by this
 * implementation or JOSE in general.
 */
export const JOSENotSupported = makeError(JOSEError, 'JOSENotSupported', cJOSENotSupported)
/**
 * An error subclass thrown when a JWE ciphertext decryption fails.
 */
export const JWEDecryptionFailed = makeError(
  JOSEError,
  'JWEDecryptionFailed',
  cJWEDecryptionFailed,
  mJWEDecryptionFailed,
)
/**
 * An error subclass thrown when a JWE is invalid.
 */
export const JWEInvalid = makeError(JOSEError, 'JWEInvalid', cJWEInvalid, mJWEInvalid)
/**
 * An error subclass thrown when a JWK is invalid.
 */
export const JWKInvalid = makeError(JOSEError, 'JWKInvalid', cJWKInvalid)
/**
 * An error subclass thrown when a JWS is invalid.
 */
export const JWSInvalid = makeError(JOSEError, 'JWSInvalid', cJWSInvalid, mJWSInvalid)
/**
 * An error subclass thrown when a JWT is invalid.
 */
export const JWTInvalid = makeError(JOSEError, 'JWTInvalid', cJWTInvalid, mJWTInvalid)
/**
 * An error subclass thrown when a JWKS is invalid.
 */
export const JWKSInvalid = makeError(JOSEError, 'JWKSInvalid', cJWKSInvalid)
/**
 * An error subclass thrown when no keys match from a JWKS.
 */
export const JWKSNoMatchingKey = makeError(
  JOSEError,
  'JWKSNoMatchingKey',
  cJWKSNoMatchingKey,
  mJWKSNoMatchingKey,
)
/**
 * An error subclass thrown when multiple keys match from a JWKS.
 */
export const JWKSMultipleMatchingKeys = makeError(
  JOSEError,
  'JWKSMultipleMatchingKeys',
  cJWKSMultipleMatchingKeys,
  mJWKSMultipleMatchingKeys,
)
/**
 * An error subclass thrown when JWS signature verification fails.
 */
export const JWSVerificationFailed = makeError(
  JOSEError,
  'JWSVerificationFailed',
  cJWSVerificationFailed,
  mJWSVerificationFailed,
)
/**
 * An error subclass thrown when a JWT is expired.
 */
export const JWTExpired = makeError(JWTClaimValidationFailed, 'JWTExpired', cJWTExpired)
