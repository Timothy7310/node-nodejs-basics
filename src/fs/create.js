import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const create = async () => {
  // 1
  fs.access(path.join(__dirname, "files", "fresh.txt"), (err) => {
    if (err) {
      fs.writeFile(
        path.join(__dirname, "files", "fresh.txt"),
        "I am fresh and young",
        (err) => {
          if (err) {
            throw Error(err.message);
          }
        }
      );
    } else {
      throw Error("FS operation failed");
    }
  });

  // 2
  // fs.stat(path.join(__dirname, "files", "fresh.txt"), (err) => {
  //   if (err === null) {
  //     throw Error("FS operation failed");
  //   } else if (err.code === "ENOENT") {
  //     fs.writeFile(
  //       path.join(__dirname, "files", "fresh.txt"),
  //       "I am fresh and young",
  //       (err) => {
  //         if (err) {
  //           throw Error(err.message);
  //         }
  //       }
  //     );
  //   } else {
  //     console.log("WTF? ", err.code);
  //   }
  // });
};

await create();
