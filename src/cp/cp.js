import { fork } from 'node:child_process';
import { pathToFileURL } from 'node:url'

const spawnChildProcess = async (args) => {
    const workerPath = pathToFileURL('./src/cp/files/script.js');

    fork(workerPath, args);
    process.stdin.on('data', chunk => {
        process.stdout.write(`Received from child process: ${chunk.toString()}\n`)
    });
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
