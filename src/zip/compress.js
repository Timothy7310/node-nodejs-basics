import path from "path";
import fs from "fs";
import zlib from "zlib";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pathToFile = path.join(__dirname, "files", "fileToCompress.txt");
const pathToNewFile = path.join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const gzip = zlib.createGzip();
    const source = fs.createReadStream(pathToFile);
    const destination = fs.createWriteStream(pathToNewFile);
    
    source.pipe(gzip).pipe(destination).on('finish', () => {
        fs.rm(pathToFile, (err) => {
            if (err) {
                throw err
            }
        })
    })
};

await compress();