import { pipeline } from 'stream/promises';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';

export default async (pathToFile, pathToNewDir) => {
    const readStream = createReadStream(path.join(process.cwd(), pathToFile));
    const writeStream = createWriteStream(path.join(process.cwd(), pathToNewDir));

    await pipeline(readStream, writeStream);
}