import { createWriteStream } from 'node:fs';

const write = async () => {
    try {
        const filePath = new URL('./files/fileToWrite.txt', import.meta.url);
        const { stdin, stdout } = process;
        const stream = createWriteStream(filePath);

        stdout.write('Press CTRL + C for Exit\nPlease type text... \n');
        stdin.pipe(stream);

    } catch (e) {
        console.error(e)
    }
};

await write();