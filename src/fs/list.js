import { readdir, access } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';

const list = async () => {
    const folderWithFiles = pathToFileURL('./src/fs/files');
    const errorMessage = 'FS operation failed';

    try {
        const isExistsFolder = await access(folderWithFiles, fs.constants.F_OK)
        .then(() => true)
        .catch(() => false)

        if (!isExistsFolder) {
            throw new Error(errorMessage);
        }

        const files = await readdir(folderWithFiles);

        for (const file of files) {
            console.log(file);
        }
    } catch (e) {
        console.error(e)
    }
};

await list();