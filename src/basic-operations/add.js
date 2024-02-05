import { appendFile } from 'fs/promises';
import path from 'path';

export default async (fileName) => {
    const filepath = path.join(process.cwd(), fileName);

    await appendFile(filepath, '', { flag: 'wx' });
}