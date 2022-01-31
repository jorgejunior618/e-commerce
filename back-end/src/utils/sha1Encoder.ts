import { createHash } from 'crypto';

function getHash(str: string): string {
  const sha1Encoder = createHash('sha1');
  sha1Encoder.update(str);
  return sha1Encoder.digest('hex');
}

export default getHash;
