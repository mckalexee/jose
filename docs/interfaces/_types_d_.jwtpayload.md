# Interface: JWTPayload

Recognized JWT Claims Set members, any other members
may also be present.

## Hierarchy

* **JWTPayload**

## Indexable

▪ [propName: string]: any

Any other JWT Claim Set member.

## Index

### Properties

* [aud](_types_d_.jwtpayload.md#aud)
* [exp](_types_d_.jwtpayload.md#exp)
* [iat](_types_d_.jwtpayload.md#iat)
* [iss](_types_d_.jwtpayload.md#iss)
* [jti](_types_d_.jwtpayload.md#jti)
* [nbf](_types_d_.jwtpayload.md#nbf)
* [sub](_types_d_.jwtpayload.md#sub)

## Properties

### aud

• `Optional` **aud**: string \| string[]

*Defined in [types.d.ts:420](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L420)*

JWT Audience [RFC7519#section-4.1.3](https://tools.ietf.org/html/rfc7519#section-4.1.3).

___

### exp

• `Optional` **exp**: number

*Defined in [types.d.ts:435](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L435)*

JWT Expiration Time - [RFC7519#section-4.1.4](https://tools.ietf.org/html/rfc7519#section-4.1.4).

___

### iat

• `Optional` **iat**: number

*Defined in [types.d.ts:440](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L440)*

JWT Issued At - [RFC7519#section-4.1.6](https://tools.ietf.org/html/rfc7519#section-4.1.6).

___

### iss

• `Optional` **iss**: string

*Defined in [types.d.ts:410](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L410)*

JWT Issuer - [RFC7519#section-4.1.1](https://tools.ietf.org/html/rfc7519#section-4.1.1).

___

### jti

• `Optional` **jti**: string

*Defined in [types.d.ts:425](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L425)*

JWT ID - [RFC7519#section-4.1.7](https://tools.ietf.org/html/rfc7519#section-4.1.7).

___

### nbf

• `Optional` **nbf**: number

*Defined in [types.d.ts:430](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L430)*

JWT Not Before - [RFC7519#section-4.1.5](https://tools.ietf.org/html/rfc7519#section-4.1.5).

___

### sub

• `Optional` **sub**: string

*Defined in [types.d.ts:415](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L415)*

JWT Subject - [RFC7519#section-4.1.2](https://tools.ietf.org/html/rfc7519#section-4.1.2).
