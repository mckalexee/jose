# Function: generateSecret

▸ **generateSecret**(`alg`: string): Promise\<[KeyLike](../types/_types_d_.keylike.md)>

*Defined in [util/generate_secret.ts:28](https://github.com/panva/jose/blob/v3.x/src/util/generate_secret.ts#L28)*

Generates a symmetric secret key for a given JWA algorithm identifier.

**`example`** 
```
// ESM import
import generateSecret from 'jose/util/generate_secret'
```

**`example`** 
```
// CJS import
const { default: generateSecret } = require('jose/util/generate_secret')
```

**`example`** 
```
// usage
const secret = await generateSecret('HS256')
console.log(secret)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`alg` | string | JWA Algorithm Identifier to be used with the generate key pair.  |

**Returns:** Promise\<[KeyLike](../types/_types_d_.keylike.md)>
