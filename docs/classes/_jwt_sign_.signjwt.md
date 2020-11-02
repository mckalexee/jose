# Class: SignJWT

The SignJWT class is a utility for creating Compact JWS formatted JWT strings.

**`example`** 
```
// ESM import
import SignJWT from 'jose/jwt/sign'
```

**`example`** 
```
// CJS import
const { default: SignJWT } = require('jose/jwt/sign')
```

**`example`** 
```
// usage
import parseJwk from 'jose/jwk/parse'

const privateKey = await parseJwk({
  alg: 'ES256',
  crv: 'P-256',
  kty: 'EC',
  d: 'VhsfgSRKcvHCGpLyygMbO_YpXc7bVKwi12KQTE4yOR4',
  x: 'ySK38C1jBdLwDsNWKzzBHqKYEE5Cgv-qjWvorUXk9fw',
  y: '_LeQBw07cf5t57Iavn4j-BqJsAD1dpoz8gokd3sBsOo'
})

const jwt = await new SignJWT({ 'urn:example:claim': true })
  .setProtectedHeader({ alg: 'ES256' })
  .setIssuedAt()
  .setIssuer('urn:example:issuer')
  .setAudience('urn:example:audience')
  .setExpirationTime('2h')
  .sign(privateKey)

console.log(jwt)
```

## Hierarchy

* **SignJWT**

## Index

### Constructors

* [constructor](_jwt_sign_.signjwt.md#constructor)

### Methods

* [setAudience](_jwt_sign_.signjwt.md#setaudience)
* [setExpirationTime](_jwt_sign_.signjwt.md#setexpirationtime)
* [setIssuedAt](_jwt_sign_.signjwt.md#setissuedat)
* [setIssuer](_jwt_sign_.signjwt.md#setissuer)
* [setJti](_jwt_sign_.signjwt.md#setjti)
* [setNotBefore](_jwt_sign_.signjwt.md#setnotbefore)
* [setProtectedHeader](_jwt_sign_.signjwt.md#setprotectedheader)
* [setSubject](_jwt_sign_.signjwt.md#setsubject)
* [sign](_jwt_sign_.signjwt.md#sign)

## Constructors

### constructor

\+ **new SignJWT**(`payload`: [JWTPayload](../interfaces/_types_d_.jwtpayload.md)): [SignJWT](_jwt_sign_.signjwt.md)

*Defined in [jwt/sign.ts:54](https://github.com/panva/jose/blob/v3.x/src/jwt/sign.ts#L54)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`payload` | [JWTPayload](../interfaces/_types_d_.jwtpayload.md) | The JWT Claims Set object to sign.  |

**Returns:** [SignJWT](_jwt_sign_.signjwt.md)

## Methods

### setAudience

▸ **setAudience**(`audience`: string \| string[]): this

*Defined in [jwt/sign.ts:101](https://github.com/panva/jose/blob/v3.x/src/jwt/sign.ts#L101)*

Set "aud" (Audience) Claim.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`audience` | string \| string[] | "aud" (Audience) Claim value to set on the JWT Claims Set.  |

**Returns:** this

___

### setExpirationTime

▸ **setExpirationTime**(`input`: number \| string): this

*Defined in [jwt/sign.ts:139](https://github.com/panva/jose/blob/v3.x/src/jwt/sign.ts#L139)*

Set "exp" (Expiration Time) Claim.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | number \| string | "exp" (Expiration Time) Claim value to set on the JWT Claims Set. When number is passed that is used as a value, when string is passed it is resolved to a time span and added to the current timestamp.  |

**Returns:** this

___

### setIssuedAt

▸ **setIssuedAt**(`input?`: number): this

*Defined in [jwt/sign.ts:154](https://github.com/panva/jose/blob/v3.x/src/jwt/sign.ts#L154)*

Set "iat" (Issued At) Claim.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input?` | number | "iat" (Issued At) Claim value to set on the JWT Claims Set. Default is current timestamp.  |

**Returns:** this

___

### setIssuer

▸ **setIssuer**(`issuer`: string): this

*Defined in [jwt/sign.ts:81](https://github.com/panva/jose/blob/v3.x/src/jwt/sign.ts#L81)*

Set "iss" (Issuer) Claim.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`issuer` | string | "Issuer" Claim value to set on the JWT Claims Set.  |

**Returns:** this

___

### setJti

▸ **setJti**(`jwtId`: string): this

*Defined in [jwt/sign.ts:111](https://github.com/panva/jose/blob/v3.x/src/jwt/sign.ts#L111)*

Set "jti" (JWT ID) Claim.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`jwtId` | string | "jti" (JWT ID) Claim value to set on the JWT Claims Set.  |

**Returns:** this

___

### setNotBefore

▸ **setNotBefore**(`input`: number \| string): this

*Defined in [jwt/sign.ts:123](https://github.com/panva/jose/blob/v3.x/src/jwt/sign.ts#L123)*

Set "nbf" (Not Before) Claim.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`input` | number \| string | "nbf" (Not Before) Claim value to set on the JWT Claims Set. When number is passed that is used as a value, when string is passed it is resolved to a time span and added to the current timestamp.  |

**Returns:** this

___

### setProtectedHeader

▸ **setProtectedHeader**(`protectedHeader`: [JWSHeaderParameters](../interfaces/_types_d_.jwsheaderparameters.md)): this

*Defined in [jwt/sign.ts:71](https://github.com/panva/jose/blob/v3.x/src/jwt/sign.ts#L71)*

Sets the JWS Protected Header on the SignJWT object.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`protectedHeader` | [JWSHeaderParameters](../interfaces/_types_d_.jwsheaderparameters.md) | JWS Protected Header.  |

**Returns:** this

___

### setSubject

▸ **setSubject**(`subject`: string): this

*Defined in [jwt/sign.ts:91](https://github.com/panva/jose/blob/v3.x/src/jwt/sign.ts#L91)*

Set "sub" (Subject) Claim.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`subject` | string | "sub" (Subject) Claim value to set on the JWT Claims Set.  |

**Returns:** this

___

### sign

▸ **sign**(`key`: [KeyLike](../types/_types_d_.keylike.md)): Promise\<string>

*Defined in [jwt/sign.ts:168](https://github.com/panva/jose/blob/v3.x/src/jwt/sign.ts#L168)*

Signs and returns the JWT.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`key` | [KeyLike](../types/_types_d_.keylike.md) | Private Key or Secret to sign the JWT with.  |

**Returns:** Promise\<string>
