# Function: generateKeyPair

▸ **generateKeyPair**(`alg`: string, `options?`: [GenerateKeyPairOptions](../interfaces/_util_generate_key_pair_.generatekeypairoptions.md)): Promise\<{ privateKey: CryptoKey \| KeyObject ; publicKey: CryptoKey \| KeyObject  }>

*Defined in [util/generate_key_pair.ts:41](https://github.com/panva/jose/blob/v3.x/src/util/generate_key_pair.ts#L41)*

Generates a private and a public key for a given JWA algorithm identifier.
This can only generate asymmetric key pairs. For symmetric secrets use the
`generateSecret` function.

**`example`** 
```
// ESM import
import generateKeyPair from 'jose/util/generate_key_pair'
```

**`example`** 
```
// CJS import
const { default: generateKeyPair } = require('jose/util/generate_key_pair')
```

**`example`** 
```
// usage
const { publicKey, privateKey } = await generateKeyPair('PS256')
console.log(publicKey)
console.log(privateKey)
```

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`alg` | string | JWA Algorithm Identifier to be used with the generate key pair. |
`options?` | [GenerateKeyPairOptions](../interfaces/_util_generate_key_pair_.generatekeypairoptions.md) | Additional options passed down to the key pair generation.  |

**Returns:** Promise\<{ privateKey: CryptoKey \| KeyObject ; publicKey: CryptoKey \| KeyObject  }>
