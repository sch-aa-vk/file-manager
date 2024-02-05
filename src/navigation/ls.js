import { readdir, lstat } from 'fs/promises';

export default async () => {
    const files = await readdir(process.cwd());
    const tableData = [];

    for (const file of files) {
        const stat = await lstat(file);
        const type = stat.isFile() ? 'File' : 'Directory';
        tableData.push({ Name: file, Type: type });
    }

    console.table(tableData);
}