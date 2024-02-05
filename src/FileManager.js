import { createInterface } from 'readline';
import { cwd, chdir, stdin, stdout } from 'process';
import os from 'os';
import { cat, add, rn, cp, mv, rm } from './basic-operations/index.js';
import { ls, up } from './navigation/index.js';
import { compress, decompress } from './zip/index.js';
import { osCommands } from './os/index.js';
import hash from './hash/index.js';

class FileManager {
    constructor(username) {
        this.username = username;
        this.rl = createInterface({
            input: stdin,
            output: stdout
        });
    }

    init() {
        console.log(`Welcome to the File Manager, ${this.username}!`);
        chdir(os.homedir());
        this.printLocation();
    }

    start() {
        this.init();

        this.rl.on('line', async (input) => {
            const lineText = input.split(' ').filter(e => e.trim() != '');
            const command = lineText[0];
            const pathToFile = lineText[1];
            const pathToFileSecond = lineText[2];

            try {
                switch(command) {
                    case 'up': 
                        up();
                        break;
                    case 'ls':
                        await ls();
                        break;
                    case 'cd':
                        chdir(pathToFile);
                        break;
                    case 'cat':
                        await cat(pathToFile);
                        break;
                    case 'add':
                        await add(pathToFile);
                        break;
                    case 'rn':
                        await rn(pathToFile, pathToFileSecond);
                        break;
                    case 'cp':
                        await cp(pathToFile, pathToFileSecond);
                        break;
                    case 'mv':
                        await mv(pathToFile, pathToFileSecond);
                        break;
                    case 'rm':
                        await rm(pathToFile);
                        break;
                    case 'os':
                        osCommands(pathToFile);
                        break;
                    case 'hash':
                        hash(pathToFile);
                        break;
                    case 'compress':
                        await compress(pathToFile, pathToFileSecond);
                        break;
                    case 'decompress':
                        await decompress(pathToFile, pathToFileSecond);
                        break;
                    case '.exit':
                        this.close();
                        break;
                    default:
                        console.log('Invalid input');
                        break;
                }
            } catch {
                console.log('Operation failed');
            }

            this.printLocation();
        });

        this.rl.on('SIGINT', this.close.bind(this));
    }

    close() {
        console.log(`Thank you for using File Manager, ${this.username}, goodbye!`);
        this.rl.close();
    }

    printLocation() {
        console.log('You are currently in', cwd(), '\n');
    }
}

export default FileManager;