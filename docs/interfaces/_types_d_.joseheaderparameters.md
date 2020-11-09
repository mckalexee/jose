# Interface: JoseHeaderParameters

## Hierarchy

* **JoseHeaderParameters**

  ↳ [JWSHeaderParameters](_types_d_.jwsheaderparameters.md)

  ↳ [JWEHeaderParameters](_types_d_.jweheaderparameters.md)

## Index

### Properties

* [cty](_types_d_.joseheaderparameters.md#cty)
* [jwk](_types_d_.joseheaderparameters.md#jwk)
* [kid](_types_d_.joseheaderparameters.md#kid)
* [typ](_types_d_.joseheaderparameters.md#typ)
* [x5c](_types_d_.joseheaderparameters.md#x5c)
* [x5t](_types_d_.joseheaderparameters.md#x5t)
* [x5u](_types_d_.joseheaderparameters.md#x5u)

## Properties

### cty

• `Optional` **cty**: string

*Defined in [types.d.ts:176](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L176)*

"cty" (Content Type) Header Parameter.

___

### jwk

• `Optional` **jwk**: Pick\<[JWK](_types_d_.jwk.md), \"kty\" \| \"crv\" \| \"x\" \| \"y\" \| \"e\" \| \"n\">

*Defined in [types.d.ts:166](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L166)*

"jwk" (JSON Web Key) Header Parameter.

___

### kid

• `Optional` **kid**: string

*Defined in [types.d.ts:146](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L146)*

"kid" (Key ID) Header Parameter.

___

### typ

• `Optional` **typ**: string

*Defined in [types.d.ts:171](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L171)*

"typ" (Type) Header Parameter.

___

### x5c

• `Optional` **x5c**: string[]

*Defined in [types.d.ts:156](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L156)*

"x5c" (X.509 Certificate Chain) Header Parameter.

___

### x5t

• `Optional` **x5t**: string

*Defined in [types.d.ts:151](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L151)*

"x5t" (X.509 Certificate SHA-1 Thumbprint) Header Parameter.

___

### x5u

• `Optional` **x5u**: string

*Defined in [types.d.ts:161](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L161)*

"x5u" (X.509 URL) Header Parameter.
