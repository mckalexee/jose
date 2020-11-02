# Interface: GetKeyFunction\<T, T2>

Generic Interface for consuming operations dynamic key resolution.
No token components have been verified at the time of this function call.

## Type parameters

Name |
------ |
`T` |
`T2` |

## Hierarchy

* **GetKeyFunction**

  ↳ [FlattenedDecryptGetKey](_jwe_flattened_decrypt_.flatteneddecryptgetkey.md)

  ↳ [CompactDecryptGetKey](_jwe_compact_decrypt_.compactdecryptgetkey.md)

  ↳ [JWTDecryptGetKey](_jwt_decrypt_.jwtdecryptgetkey.md)

  ↳ [FlattenedVerifyGetKey](_jws_flattened_verify_.flattenedverifygetkey.md)

  ↳ [CompactVerifyGetKey](_jws_compact_verify_.compactverifygetkey.md)

  ↳ [JWTVerifyGetKey](_jwt_verify_.jwtverifygetkey.md)

## Callable

▸ (`protectedHeader`: T, `token`: T2): Promise\<[KeyLike](../types/_types_d_.keylike.md)>

*Defined in [types.d.ts:76](https://github.com/panva/jose/blob/v3.x/src/types.d.ts#L76)*

Generic Interface for consuming operations dynamic key resolution.
No token components have been verified at the time of this function call.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`protectedHeader` | T | JWE or JWS Protected Header. |
`token` | T2 | The consumed JWE or JWS token.  |

**Returns:** Promise\<[KeyLike](../types/_types_d_.keylike.md)>
