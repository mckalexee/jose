# Interface: JWTVerifyGetKey

Interface for JWT Verification dynamic key resolution.
No token components have been verified at the time of this function call.

## Hierarchy

* [GetKeyFunction](_types_d_.getkeyfunction.md)\<[JWSHeaderParameters](_types_d_.jwsheaderparameters.md), [FlattenedJWSInput](_types_d_.flattenedjwsinput.md)>

  ↳ **JWTVerifyGetKey**

## Callable

▸ (`protectedHeader`: [JWSHeaderParameters](_types_d_.jwsheaderparameters.md), `token`: [FlattenedJWSInput](_types_d_.flattenedjwsinput.md)): Promise\<[KeyLike](../types/_types_d_.keylike.md)>

*Defined in [types.d.ts:76](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L76)*

Interface for JWT Verification dynamic key resolution.
No token components have been verified at the time of this function call.

#### Parameters:

Name | Type |
------ | ------ |
`protectedHeader` | [JWSHeaderParameters](_types_d_.jwsheaderparameters.md) |
`token` | [FlattenedJWSInput](_types_d_.flattenedjwsinput.md) |

**Returns:** Promise\<[KeyLike](../types/_types_d_.keylike.md)>
