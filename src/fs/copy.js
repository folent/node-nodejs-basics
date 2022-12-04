import { readdir, access, copyFile, mkdir } from 'node:fs/promises';
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';

const currentPath = './src/fs/files/';
const newPath = pathToFileURL('./src/fs/files_copy/');
const errorMessage = 'FS operation failed';

const copy = async () => {
  try {
    const isExistsCurrentFolder = await access(currentPath, fs.constants.F_OK)
        .then(() => true)
        .catch(() => false)

    const isExistsNewFolder = await access(newPath, fs.constants.F_OK)
        .then(() => true)
        .catch(() => false)

    if (!isExistsCurrentFolder || isExistsNewFolder) {
        throw new Error(errorMessage);
    }

    const newFolder = await mkdir(newPath, { recursive: true });
    const files = await readdir(currentPath);
    const copyFiles = files.map(file => {
      const currentFilePath = currentPath + file;
      const newFilePath = newFolder + '/' + file;

      return copyFile(currentFilePath, newFilePath);
    })

    await Promise.all[copyFiles]
  } catch (e) {
    console.error(e)
  }
}

copy();