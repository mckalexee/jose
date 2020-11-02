/* eslint-disable @typescript-eslint/naming-convention */

import type {
  KeyLike,
  JWEHeaderParameters,
  JWEKeyManagementHeaderParameters,
  EncryptOptions,
} from './types.d'

interface NodeCrypto extends Crypto {
  readonly CryptoKey: typeof CryptoKey
}

declare module 'crypto' {
  const webcrypto: NodeCrypto
}

export type Awaited<T> = T extends PromiseLike<infer PT> ? PT : never
export type AsyncOrSync<T> = PromiseLike<T> | T

export interface FlattenedEncryptClass<T> extends CompactEncryptClass<T> {
  setAdditionalAuthenticatedData(aad: Uint8Array): ThisType<FlattenedEncryptClass<T>>
  setSharedUnprotectedHeader(
    sharedUnprotectedHeader: JWEHeaderParameters,
  ): ThisType<FlattenedEncryptClass<T>>
  setUnprotectedHeader(unprotectedHeader: JWEHeaderParameters): ThisType<FlattenedEncryptClass<T>>
}

export interface CompactEncryptClass<T> {
  encrypt(key: KeyLike, options?: EncryptOptions): Promise<T>
  setContentEncryptionKey(cek: Uint8Array): ThisType<CompactEncryptClass<T>>
  setInitializationVector(iv: Uint8Array): ThisType<CompactEncryptClass<T>>
  setKeyManagementParameters(
    parameters: JWEKeyManagementHeaderParameters,
  ): ThisType<CompactEncryptClass<T>>
  setProtectedHeader(protectedHeader: JWEHeaderParameters): ThisType<CompactEncryptClass<T>>
}

export interface JWEKeyManagementHeaderResults {
  apu?: string
  apv?: string
  epk?: EpkJwk
  iv?: string
  p2c?: number
  p2s?: string
  tag?: string
}

export interface EpkJwk {
  crv: string
  d?: string
  kty: string
  x: string
  y?: string
  [propName: string]: any
}
