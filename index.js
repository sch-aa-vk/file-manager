import FileManager from './src/FileManager.js';
import os from 'os';

const args = process.argv.slice(2);
const otherArgs = args.filter(arg => arg.indexOf('--username') !== 0);
const username = otherArgs.length > 0 ? otherArgs.split('=')[1] : os.userInfo().username;

const fileManager = new FileManager(username);
fileManager.start();