import path from 'path';
import { unlink } from 'fs/promises';

export default async (pathToFile) => {
    await unlink(path.join(process.cwd(), pathToFile));
}