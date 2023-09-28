import * as blurhash from 'blurhash';
import {users} from '../mini-backend/db';
import sharp from 'sharp';

async function processImages() {
  const map = new Map<string, string>();

  for await (const user of [...users.values()]) {
    console.log(`Downloading ${user.avatar}.`);
    const arrayBuffer = await fetch(user.avatar).then(response =>
      response.arrayBuffer(),
    );
    console.log(`Downloaded ${arrayBuffer.byteLength} bytes.`);

    const {data, info} = await sharp(arrayBuffer)
      .resize(32)
      .ensureAlpha()
      .raw()
      .toBuffer({
        resolveWithObject: true,
      });
    console.log(`Resized to (${info.width}${info.height}).`);

    const hash = blurhash.encode(
      new Uint8ClampedArray(data),
      info.width,
      info.height,
      4,
      4,
    );
    console.log(`Hash: ${hash}`);

    map.set(user.login, hash);
    console.log();
  }

  console.log(map);
}

processImages();
