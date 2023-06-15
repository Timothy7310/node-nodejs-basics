import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pathToFolder = path.join(__dirname, "files");

const list = async () => {
  fs.readdir(pathToFolder, {}, (err, files) => {
    if (err && err.code === "ENOENT") {
      throw err;
    }
    console.log(files);
  });
};

await list();
