import { unlink, access } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';

const remove = async () => {
    const filePath = pathToFileURL('./src/fs/files/fileToRemove.txt');
    const errorMessage = 'FS operation failed';

    try {
        const isExistsCurrentFile = await access(filePath, fs.constants.F_OK)
        .then(() => true)
        .catch(() => false)
    
        if (!isExistsCurrentFile) {
            throw new Error(errorMessage);
        }

        await unlink(filePath);
    } catch (e) {
        console.error(e)
    }
};

await remove();