import path from "path";
import { fileURLToPath } from "url";
import os from 'os';
import { Worker } from 'worker_threads';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathToFile = path.join(__dirname, "worker.js");

const performCalculations = async () => {
    const baseNum = 10;
    const countCore = os.cpus().length;
    const promiseArr = [...Array(countCore).keys()]
    .map((item) => {
        return new Promise((resolve, reject) => {
            const worker = new Worker(pathToFile, {
                workerData: baseNum + item,
            })
            worker.on('message', (data) => {
                resolve({status: 'resolved', data})
            })
            worker.on('error', (_err) => {
                reject({status: 'error', data: null})
            })
        })
    })

    Promise.all(promiseArr).then((res) => console.log(res)).catch((res) => console.log(res))
};

await performCalculations();