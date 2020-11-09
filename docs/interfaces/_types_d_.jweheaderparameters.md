# Interface: JWEHeaderParameters

Recognized JWE Header Parameters, any other Header members
may also be present.

## Hierarchy

* [JoseHeaderParameters](_types_d_.joseheaderparameters.md)

  ↳ **JWEHeaderParameters**

## Indexable

▪ [propName: string]: any

Any other JWE Header member.

## Index

### Properties

* [alg](_types_d_.jweheaderparameters.md#alg)
* [crit](_types_d_.jweheaderparameters.md#crit)
* [cty](_types_d_.jweheaderparameters.md#cty)
* [enc](_types_d_.jweheaderparameters.md#enc)
* [jwk](_types_d_.jweheaderparameters.md#jwk)
* [kid](_types_d_.jweheaderparameters.md#kid)
* [typ](_types_d_.jweheaderparameters.md#typ)
* [x5c](_types_d_.jweheaderparameters.md#x5c)
* [x5t](_types_d_.jweheaderparameters.md#x5t)
* [x5u](_types_d_.jweheaderparameters.md#x5u)
* [zip](_types_d_.jweheaderparameters.md#zip)

## Properties

### alg

• `Optional` **alg**: string

*Defined in [types.d.ts:295](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L295)*

JWE "alg" (Algorithm) Header Parameter.

___

### crit

• `Optional` **crit**: string[]

*Defined in [types.d.ts:305](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L305)*

JWE "crit" (Critical) Header Parameter.

___

### cty

• `Optional` **cty**: string

*Inherited from [JoseHeaderParameters](_types_d_.joseheaderparameters.md).[cty](_types_d_.joseheaderparameters.md#cty)*

*Defined in [types.d.ts:176](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L176)*

"cty" (Content Type) Header Parameter.

___

### enc

• `Optional` **enc**: string

*Defined in [types.d.ts:300](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L300)*

JWE "enc" (Encryption Algorithm) Header Parameter.

___

### jwk

• `Optional` **jwk**: Pick\<[JWK](_types_d_.jwk.md), \"kty\" \| \"crv\" \| \"x\" \| \"y\" \| \"e\" \| \"n\">

*Inherited from [JoseHeaderParameters](_types_d_.joseheaderparameters.md).[jwk](_types_d_.joseheaderparameters.md#jwk)*

*Defined in [types.d.ts:166](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L166)*

"jwk" (JSON Web Key) Header Parameter.

___

### kid

• `Optional` **kid**: string

*Inherited from [JoseHeaderParameters](_types_d_.joseheaderparameters.md).[kid](_types_d_.joseheaderparameters.md#kid)*

*Defined in [types.d.ts:146](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L146)*

"kid" (Key ID) Header Parameter.

___

### typ

• `Optional` **typ**: string

*Inherited from [JoseHeaderParameters](_types_d_.joseheaderparameters.md).[typ](_types_d_.joseheaderparameters.md#typ)*

*Defined in [types.d.ts:171](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L171)*

"typ" (Type) Header Parameter.

___

### x5c

• `Optional` **x5c**: string[]

*Inherited from [JoseHeaderParameters](_types_d_.joseheaderparameters.md).[x5c](_types_d_.joseheaderparameters.md#x5c)*

*Defined in [types.d.ts:156](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L156)*

"x5c" (X.509 Certificate Chain) Header Parameter.

___

### x5t

• `Optional` **x5t**: string

*Inherited from [JoseHeaderParameters](_types_d_.joseheaderparameters.md).[x5t](_types_d_.joseheaderparameters.md#x5t)*

*Defined in [types.d.ts:151](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L151)*

"x5t" (X.509 Certificate SHA-1 Thumbprint) Header Parameter.

___

### x5u

• `Optional` **x5u**: string

*Inherited from [JoseHeaderParameters](_types_d_.joseheaderparameters.md).[x5u](_types_d_.joseheaderparameters.md#x5u)*

*Defined in [types.d.ts:161](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L161)*

"x5u" (X.509 URL) Header Parameter.

___

### zip

• `Optional` **zip**: string

*Defined in [types.d.ts:310](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L310)*

JWE "zip" (Compression Algorithm) Header Parameter.
