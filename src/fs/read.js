import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pathToFile = path.join(__dirname, "files", "fileToRead.txt");

const read = async () => {
  // 1
  //   fs.readFile(pathToFile, "utf-8", (err, data) => {
  //     if (err && err.code === "ENOENT") {
  //       throw Error("FS operation failed");
  //     } else {
  //       console.log(data);
  //     }
  //   });

  //   2
  fs.access(pathToFile, (err) => {
    if (err) {
      throw Error("FS operation failed");
    } else {
      const stream = fs.createReadStream(pathToFile, "utf-8");
      stream.on("data", (data) => console.log(data));
    }
  });
};

await read();
