const args = process.argv.slice(2);
args.find(arg => arg.indexOf('--username') === 0) && console.log('Username is provided');