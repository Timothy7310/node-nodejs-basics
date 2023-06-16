import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  const stream = fs.createReadStream(pathToFile);
  stream.on("data", (data) => {
    process.stdout.write(data);
  });
};

await read();
