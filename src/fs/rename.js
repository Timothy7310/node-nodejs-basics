import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const oldFile = path.join(__dirname, "/files", "wrongFilename.txt");
const newFile = path.join(__dirname, "/files", "wrongFilename.md");

const rename = async () => {
  fs.access(oldFile, (err) => {
    if (err) {
      throw Error("FS operation failed");
    } else {
      fs.access(newFile, (err) => {
        if (err) {
          fs.rename(oldFile, newFile, (err) => {
            if (err) {
              throw err;
            }
          });
        } else {
          throw Error("FS operation failed");
        }
      });
    }
  });
};

await rename();
