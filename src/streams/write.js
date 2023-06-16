import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pathToFile = path.join(__dirname, "files", "fileToWrite.txt");

const transform = async () => {
  const stream = fs.createWriteStream(pathToFile);
  process.stdin.on("data", (data) => {
    stream.write(data);
  });
};

await transform();
