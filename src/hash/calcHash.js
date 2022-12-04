import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs';
import { pathToFileURL } from 'node:url';

const calculateHash = async () => {
    const filePath = pathToFileURL('./src/hash/files/fileToCalculateHashFor.txt');
    const input = createReadStream(filePath);
    const hash = createHash('sha256');

    try {
        input.on('readable', () => {

            const data = input.read();
            if (data)
                hash.update(data);
            else {
                console.log(`hex is ${hash.digest('hex')}`);
            }
        })
    } catch (e) {
        console.error(e);
    }
}

await calculateHash();