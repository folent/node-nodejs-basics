import { readFile, access } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';

const read = async () => {
    const filePath = pathToFileURL('./src/fs/files/fileToRead.txt');
    const errorMessage = 'FS operation failed';

    try {
        const isExistsCurrentFile = await access(filePath, fs.constants.F_OK)
        .then(() => true)
        .catch(() => false)
    
        if (!isExistsCurrentFile) {
            throw new Error(errorMessage);
        }

        const contents = await readFile(filePath, { encoding: 'utf8' });
        console.log(contents);

    } catch (e) {
        console.error(e)
    }
};

await read();