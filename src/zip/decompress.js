import path from "path";
import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pathToFile = path.join(__dirname, "files", "archive.gz");
const pathToNewFile = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    const unzip = zlib.createUnzip();
    const source = fs.createReadStream(pathToFile);
    const destination = fs.createWriteStream(pathToNewFile);

    source.pipe(unzip).pipe(destination).on('finish', () => {
        fs.rm(pathToFile, (err) => {
            if (err) {
                throw err;
            }
        })
    })
};

await decompress();