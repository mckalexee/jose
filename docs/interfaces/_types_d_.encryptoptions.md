# Interface: EncryptOptions

JWE Encryption options.

## Hierarchy

* **EncryptOptions**

## Index

### Properties

* [deflateRaw](_types_d_.encryptoptions.md#deflateraw)

## Properties

### deflateRaw

• `Optional` **deflateRaw**: [DeflateFunction](_types_d_.deflatefunction.md)

*Defined in [types.d.ts:347](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L347)*

In a browser runtime you have to provide an implementation for Deflate Raw
when you will be producing JWEs with compressed plaintext.
