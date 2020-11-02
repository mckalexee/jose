import { JOSENotSupported } from '../../lib/errors.js'

export default function subtleRsaEs(alg: string) {
  switch (alg) {
    case 'RSA-OAEP':
    case 'RSA-OAEP-256':
    case 'RSA-OAEP-384':
    case 'RSA-OAEP-512':
      return 'RSA-OAEP'
    default:
      throw new JOSENotSupported(
        `alg ${alg} is unsupported either by JOSE or your javascript runtime`,
      )
  }
}
