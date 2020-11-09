# Interface: FlattenedJWE

Flattened JWE definition.

## Hierarchy

* **FlattenedJWE**

## Index

### Properties

* [aad](_types_d_.flattenedjwe.md#aad)
* [ciphertext](_types_d_.flattenedjwe.md#ciphertext)
* [encrypted\_key](_types_d_.flattenedjwe.md#encrypted_key)
* [header](_types_d_.flattenedjwe.md#header)
* [iv](_types_d_.flattenedjwe.md#iv)
* [protected](_types_d_.flattenedjwe.md#protected)
* [tag](_types_d_.flattenedjwe.md#tag)
* [unprotected](_types_d_.flattenedjwe.md#unprotected)

## Properties

### aad

• `Optional` **aad**: string

*Defined in [types.d.ts:230](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L230)*

The "aad" member MUST be present and contain the value
BASE64URL(JWE AAD)) when the JWE AAD value is non-empty;
otherwise, it MUST be absent.  A JWE AAD value can be included to
supply a base64url-encoded value to be integrity protected but not
encrypted.

___

### ciphertext

•  **ciphertext**: string

*Defined in [types.d.ts:236](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L236)*

The "ciphertext" member MUST be present and contain the value
BASE64URL(JWE Ciphertext).

___

### encrypted\_key

• `Optional` **encrypted\_key**: string

*Defined in [types.d.ts:243](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L243)*

The "encrypted_key" member MUST be present and contain the value
BASE64URL(JWE Encrypted Key) when the JWE Encrypted Key value is
non-empty; otherwise, it MUST be absent.

___

### header

• `Optional` **header**: [JWEHeaderParameters](_types_d_.jweheaderparameters.md)

*Defined in [types.d.ts:253](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L253)*

The "header" member MUST be present and contain the value JWE Per-
Recipient Unprotected Header when the JWE Per-Recipient
Unprotected Header value is non-empty; otherwise, it MUST be
absent.  This value is represented as an unencoded JSON object,
rather than as a string.  These Header Parameter values are not
integrity protected.

___

### iv

•  **iv**: string

*Defined in [types.d.ts:260](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L260)*

The "iv" member MUST be present and contain the value
BASE64URL(JWE Initialization Vector) when the JWE Initialization
Vector value is non-empty; otherwise, it MUST be absent.

___

### protected

• `Optional` **protected**: string

*Defined in [types.d.ts:268](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L268)*

The "protected" member MUST be present and contain the value
BASE64URL(UTF8(JWE Protected Header)) when the JWE Protected
Header value is non-empty; otherwise, it MUST be absent.  These
Header Parameter values are integrity protected.

___

### tag

•  **tag**: string

*Defined in [types.d.ts:275](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L275)*

The "tag" member MUST be present and contain the value
BASE64URL(JWE Authentication Tag) when the JWE Authentication Tag
value is non-empty; otherwise, it MUST be absent.

___

### unprotected

• `Optional` **unprotected**: [JWEHeaderParameters](_types_d_.jweheaderparameters.md)

*Defined in [types.d.ts:284](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L284)*

The "unprotected" member MUST be present and contain the value JWE
Shared Unprotected Header when the JWE Shared Unprotected Header
value is non-empty; otherwise, it MUST be absent.  This value is
represented as an unencoded JSON object, rather than as a string.
These Header Parameter values are not integrity protected.
