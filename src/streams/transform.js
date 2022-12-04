import { Transform } from 'node:stream'

const transform = async () => {
    try {
        const { stdin, stdout, exit } = process;

        const transformAction = new Transform({
            transform(chunk) {
                const transformChunk = chunk.toString().split('').reverse().join('');
                this.push(transformChunk + '\n')
                exit()
            }
        })

        stdin.pipe(transformAction).pipe(stdout)

    } catch (e) {
        console.error(e)
    }
};

await transform();