# Interface: DecryptOptions

JWE Decryption options.

## Hierarchy

* **DecryptOptions**

  ↳ [JWTDecryptOptions](_jwt_decrypt_.jwtdecryptoptions.md)

## Index

### Properties

* [contentEncryptionAlgorithms](_types_d_.decryptoptions.md#contentencryptionalgorithms)
* [inflateRaw](_types_d_.decryptoptions.md#inflateraw)
* [keyManagementAlgorithms](_types_d_.decryptoptions.md#keymanagementalgorithms)

## Properties

### contentEncryptionAlgorithms

• `Optional` **contentEncryptionAlgorithms**: string[]

*Defined in [types.d.ts:330](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L330)*

A list of accepted JWE "enc" (Encryption Algorithm) Header Parameter values.

___

### inflateRaw

• `Optional` **inflateRaw**: [InflateFunction](_types_d_.inflatefunction.md)

*Defined in [types.d.ts:336](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L336)*

In a browser runtime you have to provide an implementation for Inflate Raw
when you expect JWEs with compressed plaintext.

___

### keyManagementAlgorithms

• `Optional` **keyManagementAlgorithms**: string[]

*Defined in [types.d.ts:325](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L325)*

A list of accepted JWE "alg" (Algorithm) Header Parameter values.
