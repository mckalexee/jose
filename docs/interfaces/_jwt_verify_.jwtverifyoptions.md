# Interface: JWTVerifyOptions

Combination of JWS Verification options and JWT Claims Set verification options.

## Hierarchy

* [VerifyOptions](_types_d_.verifyoptions.md)

* [JWTClaimVerificationOptions](_types_d_.jwtclaimverificationoptions.md)

  ↳ **JWTVerifyOptions**

## Index

### Properties

* [algorithms](_jwt_verify_.jwtverifyoptions.md#algorithms)
* [audience](_jwt_verify_.jwtverifyoptions.md#audience)
* [clockTolerance](_jwt_verify_.jwtverifyoptions.md#clocktolerance)
* [currentDate](_jwt_verify_.jwtverifyoptions.md#currentdate)
* [issuer](_jwt_verify_.jwtverifyoptions.md#issuer)
* [maxTokenAge](_jwt_verify_.jwtverifyoptions.md#maxtokenage)
* [subject](_jwt_verify_.jwtverifyoptions.md#subject)
* [typ](_jwt_verify_.jwtverifyoptions.md#typ)

## Properties

### algorithms

• `Optional` **algorithms**: string[]

*Inherited from [VerifyOptions](_types_d_.verifyoptions.md).[algorithms](_types_d_.verifyoptions.md#algorithms)*

*Defined in [types.d.ts:399](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L399)*

A list of accepted JWS "alg" (Algorithm) Header Parameter values.

___

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

### currentDate

• `Optional` **currentDate**: Date

*Inherited from [JWTClaimVerificationOptions](_types_d_.jwtclaimverificationoptions.md).[currentDate](_types_d_.jwtclaimverificationoptions.md#currentdate)*

*Defined in [types.d.ts:389](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L389)*

Date to use when comparing NumericDate claims, defaults to `new Date()`.

___

### issuer

• `Optional` **issuer**: string \| string[]

*Inherited from [JWTClaimVerificationOptions](_types_d_.jwtclaimverificationoptions.md).[issuer](_types_d_.jwtclaimverificationoptions.md#issuer)*

*Defined in [types.d.ts:369](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L369)*

Expected JWT "iss" (Issuer) Claim value(s).

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
