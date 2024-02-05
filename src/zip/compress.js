import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';

export default async (pathToFile, pathToDestination) => {
    const readStream = createReadStream(pathToFile);
    const writeStream = createWriteStream(pathToDestination);

    await pipeline(readStream, createBrotliCompress(), writeStream);
}