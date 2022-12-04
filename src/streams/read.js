import { createReadStream } from 'node:fs';
import { pathToFileURL } from 'node:url';

const read = async () => {
    try {
        const filePath = pathToFileURL('./src/streams/files/fileToRead.txt');
        const { stdout } = process;
        const stream = createReadStream(filePath);

        stream.on('open', () => {
            stream.pipe(stdout)
         })
    } catch (e) {
        console.error(e)
    }
};

await read();