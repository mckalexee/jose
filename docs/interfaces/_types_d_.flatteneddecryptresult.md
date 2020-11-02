# Interface: FlattenedDecryptResult

## Hierarchy

* **FlattenedDecryptResult**

## Index

### Properties

* [additionalAuthenticatedData](_types_d_.flatteneddecryptresult.md#additionalauthenticateddata)
* [plaintext](_types_d_.flatteneddecryptresult.md#plaintext)
* [protectedHeader](_types_d_.flatteneddecryptresult.md#protectedheader)
* [sharedUnprotectedHeader](_types_d_.flatteneddecryptresult.md#sharedunprotectedheader)
* [unprotectedHeader](_types_d_.flatteneddecryptresult.md#unprotectedheader)

## Properties

### additionalAuthenticatedData

• `Optional` **additionalAuthenticatedData**: Uint8Array

*Defined in [types.d.ts:466](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L466)*

JWE AAD.

___

### plaintext

•  **plaintext**: Uint8Array

*Defined in [types.d.ts:471](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L471)*

Plaintext.

___

### protectedHeader

• `Optional` **protectedHeader**: [JWEHeaderParameters](_types_d_.jweheaderparameters.md)

*Defined in [types.d.ts:476](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L476)*

JWE Protected Header.

___

### sharedUnprotectedHeader

• `Optional` **sharedUnprotectedHeader**: [JWEHeaderParameters](_types_d_.jweheaderparameters.md)

*Defined in [types.d.ts:481](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L481)*

JWE Shared Unprotected Header.

___

### unprotectedHeader

• `Optional` **unprotectedHeader**: [JWEHeaderParameters](_types_d_.jweheaderparameters.md)

*Defined in [types.d.ts:486](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L486)*

JWE Per-Recipient Unprotected Header.
