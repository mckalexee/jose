# Interface: JWTDecryptGetKey

Interface for JWT Decryption dynamic key resolution.
No token components have been verified at the time of this function call.

## Hierarchy

* [GetKeyFunction](_types_d_.getkeyfunction.md)\<[JWEHeaderParameters](_types_d_.jweheaderparameters.md), [FlattenedJWE](_types_d_.flattenedjwe.md)>

  ↳ **JWTDecryptGetKey**

## Callable

▸ (`protectedHeader`: [JWEHeaderParameters](_types_d_.jweheaderparameters.md), `token`: [FlattenedJWE](_types_d_.flattenedjwe.md)): Promise\<[KeyLike](../types/_types_d_.keylike.md)>

*Defined in [types.d.ts:76](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L76)*

Interface for JWT Decryption dynamic key resolution.
No token components have been verified at the time of this function call.

#### Parameters:

Name | Type |
------ | ------ |
`protectedHeader` | [JWEHeaderParameters](_types_d_.jweheaderparameters.md) |
`token` | [FlattenedJWE](_types_d_.flattenedjwe.md) |

**Returns:** Promise\<[KeyLike](../types/_types_d_.keylike.md)>
