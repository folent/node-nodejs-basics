import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const compress = async () => {
    const filePath = new URL('./files/fileToCompress.txt', import.meta.url);
    const archivePath = new URL('./files/archive.txt.gz', import.meta.url);

    const input = createReadStream(filePath, 'utf-8');
    const output = createWriteStream(archivePath);
    const gzip = createGzip();

    pipeline(
        input,
        gzip,
        output,
        err => {
            if (err) {
                console.error(err);
            }
        }
    );
};

await compress();