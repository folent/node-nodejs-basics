import { access, rename as renameFile } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';

const rename = async () => {
    const currentFilePath = pathToFileURL('./src/fs/files/wrongFilename.txt');
    const newFilePath = pathToFileURL('./src/fs/files/properFilename.md');
    const errorMessage = 'FS operation failed';
    
    try {
        const isExistsCurrentFile = await access(currentFilePath, fs.constants.F_OK)
            .then(() => true)
            .catch(() => false)

        const isExistsNewFile = await access(newFilePath, fs.constants.F_OK)
            .then(() => true)
            .catch(() => false)
        
        if (!isExistsCurrentFile || isExistsNewFile) {
            throw new Error(errorMessage);
        }

        await renameFile(currentFilePath, newFilePath);
    
    } catch (e) {
        console.error(e)
    }
};

await rename();