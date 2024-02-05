import { readFile } from 'fs/promises';
import path from 'path';

export default async (fileName) => {
    const filepath = path.join(process.cwd(), fileName);

    const content = await readFile(filepath, { encoding: 'utf-8' });
    console.log('\nFile content: ', content);
}