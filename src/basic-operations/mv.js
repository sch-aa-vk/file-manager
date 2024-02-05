import { pipeline } from 'stream/promises';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { unlink } from 'fs/promises';

export default async (pathToFile, pathToNewDir) => {
    const readStream = createReadStream(path.join(process.cwd(), pathToFile));
    const writeStream = createWriteStream(path.join(process.cwd(), pathToNewDir));

    await pipeline(readStream, writeStream);
    await unlink(path.join(process.cwd(), pathToFile));
}