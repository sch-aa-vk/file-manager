import os from 'os';

export default () => {
    if (process.cwd() !== os.homedir()) process.chdir('..');
}