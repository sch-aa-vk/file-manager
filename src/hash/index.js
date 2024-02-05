import { createHash } from 'crypto';
import path from 'path';

export default () => {
    const hash = createHash('sha256');
    const update = hash.update(path.join(process.cwd(), pathToFile));
    const digest = update.digest('hex');
    
    console.log(digest);
}