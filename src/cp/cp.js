import path from "path";
import { fileURLToPath } from "url";
import child_process from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pathToFile = path.join(__dirname, "files", "script.js");

const spawnChildProcess = async (...args) => {
    const childProcess = child_process.fork(pathToFile, args, {stdio: 'pipe'});
    
    process.stdin.on('data', (data) => {
        childProcess.stdin.write(data);
    })

    childProcess.stdout.on('data', (data) => {
        process.stdout.write(data)
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess('testArg');
