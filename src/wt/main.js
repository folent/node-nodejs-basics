import { Worker, isMainThread } from 'node:worker_threads';
import { cpus } from 'node:os'

const performCalculations = async () => {
    const workerPath = new URL('worker.js', import.meta.url);

    if (isMainThread) {
        const cpuCount = cpus().length;
        let number = 10;

        const workers = Array(cpuCount)
        .fill()
        .map(_ => {
            return new Promise((resolve) => {
                const worker = new Worker(workerPath, { workerData: number++ });

                worker.on("message", data => {
                    resolve({
                        status: 'resolved',
                        data
                    })
                });
                worker.on("error", _ => {
                    resolve({
                        status: 'error',
                        data: null
                    })
                });
              });
        })

        const results = await Promise.all(workers);
        console.log(results);
    }
};

await performCalculations();