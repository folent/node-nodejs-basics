import { createReadStream, createWriteStream, } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const decompress = async () => {
    const fileName = './files/fileToCompress.txt';
    const archiveName = './files/archive.txt.gz';
    const filePath = new URL(fileName, import.meta.url);
    const archivePath = new URL(archiveName, import.meta.url);

    const input = createReadStream(archivePath);
    const output = createWriteStream(filePath, 'utf-8');
    const unZip = createUnzip();

    pipeline(
        input,
        unZip,
        output,
        err => {
            if (err) {
                console.error(err);
            }
        }
    );
};

await decompress();