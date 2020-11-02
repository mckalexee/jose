# Interface: JWTClaimVerificationOptions

JWT Claims Set verification options.

## Hierarchy

* **JWTClaimVerificationOptions**

  ↳ [JWTDecryptOptions](_jwt_decrypt_.jwtdecryptoptions.md)

  ↳ [JWTVerifyOptions](_jwt_verify_.jwtverifyoptions.md)

## Index

### Properties

* [audience](_types_d_.jwtclaimverificationoptions.md#audience)
* [clockTolerance](_types_d_.jwtclaimverificationoptions.md#clocktolerance)
* [currentDate](_types_d_.jwtclaimverificationoptions.md#currentdate)
* [issuer](_types_d_.jwtclaimverificationoptions.md#issuer)
* [maxTokenAge](_types_d_.jwtclaimverificationoptions.md#maxtokenage)
* [subject](_types_d_.jwtclaimverificationoptions.md#subject)
* [typ](_types_d_.jwtclaimverificationoptions.md#typ)

## Properties

### audience

• `Optional` **audience**: string \| string[]

*Defined in [types.d.ts:357](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L357)*

Expected JWT "aud" (Audience) Claim value(s).

___

### clockTolerance

• `Optional` **clockTolerance**: string \| number

*Defined in [types.d.ts:364](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L364)*

Expected clock tolerance
- in seconds when number (e.g. 5)
- parsed as seconds when a string (e.g. "5 seconds").

___

### currentDate

• `Optional` **currentDate**: Date

*Defined in [types.d.ts:389](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L389)*

Date to use when comparing NumericDate claims, defaults to `new Date()`.

___

### issuer

• `Optional` **issuer**: string \| string[]

*Defined in [types.d.ts:369](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L369)*

Expected JWT "iss" (Issuer) Claim value(s).

___

### maxTokenAge

• `Optional` **maxTokenAge**: string

*Defined in [types.d.ts:374](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L374)*

Maximum time elapsed (in seconds) from the JWT "iat" (Issued At) Claim value.

___

### subject

• `Optional` **subject**: string

*Defined in [types.d.ts:379](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L379)*

Expected JWT "sub" (Subject) Claim value.

___

### typ

• `Optional` **typ**: string

*Defined in [types.d.ts:384](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L384)*

Expected JWT "typ" (Type) Header Parameter value.
