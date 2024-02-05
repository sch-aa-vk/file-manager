import os from 'os';

export const osCommands = (command) => {
    switch(command) {
        case '--EOL':
            console.log(JSON.stringify(os.EOL));
            break;
        case '--cpus':
            console.log(os.cpus().map(cpu => ({ model: cpu.model, speed: cpu.speed * 0.001 })));
            break;
        case '--homedir':
            console.log(os.homedir());
            break;
        case '--username':
            console.log(os.userInfo().username);
            break;
        case '--architecture':
            console.log(os.arch());
            break;
        default:
            console.log('Invalid input');
            break;
    }
}