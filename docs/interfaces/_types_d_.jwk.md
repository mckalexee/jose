# Interface: JWK

JSON Web Key ([JWK](https://tools.ietf.org/html/rfc7517)).
"RSA", "EC", "OKP", and "oct" key types are supported.

## Hierarchy

* **JWK**

## Index

### Properties

* [alg](_types_d_.jwk.md#alg)
* [crv](_types_d_.jwk.md#crv)
* [d](_types_d_.jwk.md#d)
* [dp](_types_d_.jwk.md#dp)
* [dq](_types_d_.jwk.md#dq)
* [e](_types_d_.jwk.md#e)
* [ext](_types_d_.jwk.md#ext)
* [k](_types_d_.jwk.md#k)
* [key\_ops](_types_d_.jwk.md#key_ops)
* [kid](_types_d_.jwk.md#kid)
* [kty](_types_d_.jwk.md#kty)
* [n](_types_d_.jwk.md#n)
* [oth](_types_d_.jwk.md#oth)
* [p](_types_d_.jwk.md#p)
* [q](_types_d_.jwk.md#q)
* [qi](_types_d_.jwk.md#qi)
* [use](_types_d_.jwk.md#use)
* [x](_types_d_.jwk.md#x)
* [x5c](_types_d_.jwk.md#x5c)
* [x5t](_types_d_.jwk.md#x5t)
* [x5t#S256](_types_d_.jwk.md#x5t#s256)
* [x5u](_types_d_.jwk.md#x5u)
* [y](_types_d_.jwk.md#y)

## Properties

### alg

• `Optional` **alg**: string

*Defined in [types.d.ts:13](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L13)*

JWK "alg" (Algorithm) Parameter.

___

### crv

• `Optional` **crv**: string

*Defined in [types.d.ts:14](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L14)*

___

### d

• `Optional` **d**: string

*Defined in [types.d.ts:15](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L15)*

___

### dp

• `Optional` **dp**: string

*Defined in [types.d.ts:16](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L16)*

___

### dq

• `Optional` **dq**: string

*Defined in [types.d.ts:17](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L17)*

___

### e

• `Optional` **e**: string

*Defined in [types.d.ts:18](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L18)*

___

### ext

• `Optional` **ext**: false \| true

*Defined in [types.d.ts:22](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L22)*

JWK "ext" (Extractable) Parameter.

___

### k

• `Optional` **k**: string

*Defined in [types.d.ts:23](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L23)*

___

### key\_ops

• `Optional` **key\_ops**: string[]

*Defined in [types.d.ts:27](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L27)*

JWK "key_ops" (Key Operations) Parameter.

___

### kid

• `Optional` **kid**: string

*Defined in [types.d.ts:31](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L31)*

JWK "kid" (Key ID) Parameter.

___

### kty

• `Optional` **kty**: string

*Defined in [types.d.ts:35](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L35)*

JWK "kty" (Key Type) Parameter.

___

### n

• `Optional` **n**: string

*Defined in [types.d.ts:36](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L36)*

___

### oth

• `Optional` **oth**: Array\<{ d?: string ; r?: string ; t?: string  }>

*Defined in [types.d.ts:37](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L37)*

___

### p

• `Optional` **p**: string

*Defined in [types.d.ts:42](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L42)*

___

### q

• `Optional` **q**: string

*Defined in [types.d.ts:43](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L43)*

___

### qi

• `Optional` **qi**: string

*Defined in [types.d.ts:44](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L44)*

___

### use

• `Optional` **use**: string

*Defined in [types.d.ts:48](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L48)*

JWK "use" (Public Key Use) Parameter.

___

### x

• `Optional` **x**: string

*Defined in [types.d.ts:49](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L49)*

___

### x5c

• `Optional` **x5c**: string[]

*Defined in [types.d.ts:54](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L54)*

JWK "x5c" (X.509 Certificate Chain) Parameter.

___

### x5t

• `Optional` **x5t**: string

*Defined in [types.d.ts:58](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L58)*

JWK "x5t" (X.509 Certificate SHA-1 Thumbprint) Parameter.

___

### x5t#S256

• `Optional` **x5t#S256**: string

*Defined in [types.d.ts:62](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L62)*

"x5t#S256" (X.509 Certificate SHA-256 Thumbprint) Parameter.

___

### x5u

• `Optional` **x5u**: string

*Defined in [types.d.ts:66](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L66)*

JWK "x5u" (X.509 URL) Parameter.

___

### y

• `Optional` **y**: string

*Defined in [types.d.ts:50](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L50)*
