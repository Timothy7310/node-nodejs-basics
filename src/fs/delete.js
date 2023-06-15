import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pathToFile = path.join(__dirname, "files", "fileToRemove.txt");

const remove = async () => {
  // 1
  fs.unlink(pathToFile, (err) => {
    if (err && err.code === "ENOENT") {
      throw Error("FS operation failed");
    }
  });

  // 2
  //   fs.rm(pathToFile, (err) => {
  //     if (err && err.code === "ENOENT") {
  //       throw Error("FS operation failed");
  //     }
  //   });
};

await remove();
