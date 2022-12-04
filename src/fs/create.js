import { writeFile, access } from 'node:fs/promises';
import fs from 'node:fs';
import { Buffer } from 'node:buffer';
import { pathToFileURL } from 'node:url';

const filePath = pathToFileURL('./src/fs/files/fresh.txt');
const text = 'I am fresh and young';
const errorMessage = 'FS operation failed';

const create = async () => {
  try {
      const isExistFile = await access(filePath, fs.constants.F_OK)
          .then(() => true)
          .catch(() => false)
          
      if (isExistFile) {
        throw new Error(errorMessage);
      }

      const data = new Uint8Array(Buffer.from(text));
      await writeFile(filePath, data);

    } catch (err) {
      console.error(err);
    }
};

await create();