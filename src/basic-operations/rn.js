import { open, rename } from 'fs/promises';

export default async (oldFileName, newFileName) => {
    const oldFilepath = path.join(process.cwd(), oldFileName);
    const newFilepath = path.join(process.cwd(), newFileName);

    await open(newFilepath, 'ax');
    await rename(oldFilepath, newFilepath);
}