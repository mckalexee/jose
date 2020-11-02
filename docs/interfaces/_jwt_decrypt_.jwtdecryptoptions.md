# Interface: JWTDecryptOptions

Combination of JWE Decryption options and JWT Claims Set verification options.

## Hierarchy

* [DecryptOptions](_types_d_.decryptoptions.md)

* [JWTClaimVerificationOptions](_types_d_.jwtclaimverificationoptions.md)

  ↳ **JWTDecryptOptions**

## Index

### Properties

* [audience](_jwt_decrypt_.jwtdecryptoptions.md#audience)
* [clockTolerance](_jwt_decrypt_.jwtdecryptoptions.md#clocktolerance)
* [contentEncryptionAlgorithms](_jwt_decrypt_.jwtdecryptoptions.md#contentencryptionalgorithms)
* [currentDate](_jwt_decrypt_.jwtdecryptoptions.md#currentdate)
* [inflateRaw](_jwt_decrypt_.jwtdecryptoptions.md#inflateraw)
* [issuer](_jwt_decrypt_.jwtdecryptoptions.md#issuer)
* [keyManagementAlgorithms](_jwt_decrypt_.jwtdecryptoptions.md#keymanagementalgorithms)
* [maxTokenAge](_jwt_decrypt_.jwtdecryptoptions.md#maxtokenage)
* [subject](_jwt_decrypt_.jwtdecryptoptions.md#subject)
* [typ](_jwt_decrypt_.jwtdecryptoptions.md#typ)

## Properties

### audience

• `Optional` **audience**: string \| string[]

*Inherited from [JWTClaimVerificationOptions](_types_d_.jwtclaimverificationoptions.md).[audience](_types_d_.jwtclaimverificationoptions.md#audience)*

*Defined in [types.d.ts:357](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L357)*

Expected JWT "aud" (Audience) Claim value(s).

___

### clockTolerance

• `Optional` **clockTolerance**: string \| number

*Inherited from [JWTClaimVerificationOptions](_types_d_.jwtclaimverificationoptions.md).[clockTolerance](_types_d_.jwtclaimverificationoptions.md#clocktolerance)*

*Defined in [types.d.ts:364](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L364)*

Expected clock tolerance
- in seconds when number (e.g. 5)
- parsed as seconds when a string (e.g. "5 seconds").

___

### contentEncryptionAlgorithms

• `Optional` **contentEncryptionAlgorithms**: string[]

*Inherited from [DecryptOptions](_types_d_.decryptoptions.md).[contentEncryptionAlgorithms](_types_d_.decryptoptions.md#contentencryptionalgorithms)*

*Defined in [types.d.ts:330](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L330)*

A list of accepted JWE "enc" (Encryption Algorithm) Header Parameter values.

___

### currentDate

• `Optional` **currentDate**: Date

*Inherited from [JWTClaimVerificationOptions](_types_d_.jwtclaimverificationoptions.md).[currentDate](_types_d_.jwtclaimverificationoptions.md#currentdate)*

*Defined in [types.d.ts:389](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L389)*

Date to use when comparing NumericDate claims, defaults to `new Date()`.

___

### inflateRaw

• `Optional` **inflateRaw**: [InflateFunction](_types_d_.inflatefunction.md)

*Inherited from [DecryptOptions](_types_d_.decryptoptions.md).[inflateRaw](_types_d_.decryptoptions.md#inflateraw)*

*Defined in [types.d.ts:336](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L336)*

In a browser runtime you have to provide an implementation for Inflate Raw
when you expect JWEs with compressed plaintext.

___

### issuer

• `Optional` **issuer**: string \| string[]

*Inherited from [JWTClaimVerificationOptions](_types_d_.jwtclaimverificationoptions.md).[issuer](_types_d_.jwtclaimverificationoptions.md#issuer)*

*Defined in [types.d.ts:369](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L369)*

Expected JWT "iss" (Issuer) Claim value(s).

___

### keyManagementAlgorithms

• `Optional` **keyManagementAlgorithms**: string[]

*Inherited from [DecryptOptions](_types_d_.decryptoptions.md).[keyManagementAlgorithms](_types_d_.decryptoptions.md#keymanagementalgorithms)*

*Defined in [types.d.ts:325](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L325)*

A list of accepted JWE "alg" (Algorithm) Header Parameter values.

___

### maxTokenAge

• `Optional` **maxTokenAge**: string

*Inherited from [JWTClaimVerificationOptions](_types_d_.jwtclaimverificationoptions.md).[maxTokenAge](_types_d_.jwtclaimverificationoptions.md#maxtokenage)*

*Defined in [types.d.ts:374](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L374)*

Maximum time elapsed (in seconds) from the JWT "iat" (Issued At) Claim value.

___

### subject

• `Optional` **subject**: string

*Inherited from [JWTClaimVerificationOptions](_types_d_.jwtclaimverificationoptions.md).[subject](_types_d_.jwtclaimverificationoptions.md#subject)*

*Defined in [types.d.ts:379](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L379)*

Expected JWT "sub" (Subject) Claim value.

___

### typ

• `Optional` **typ**: string

*Inherited from [JWTClaimVerificationOptions](_types_d_.jwtclaimverificationoptions.md).[typ](_types_d_.jwtclaimverificationoptions.md#typ)*

*Defined in [types.d.ts:384](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L384)*

Expected JWT "typ" (Type) Header Parameter value.
