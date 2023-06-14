import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pathFiles = path.join(__dirname, "/files");
const pathCopy = path.join(__dirname, "/files_copy");

const copy = async () => {
  // 1
  //   fs.access(pathFiles, (err) => {
  //     if (err === null) {
  //       fs.access(pathCopy, (err) => {
  //         if (err === null) {
  //           throw Error("FS operation failed");
  //         } else {
  //           fs.mkdir(pathCopy, { recursive: true }, (err) => {
  //             if (err) {
  //               throw err;
  //             }
  //           });
  //     fs.readdir(pathFiles, { withFileTypes: true }, (err, files) => {
  //       if (err) {
  //         throw err;
  //       }
  //       files.map((file) => {
  //         if (file.isFile()) {
  //           fs.copyFile(
  //             `${pathFiles}${path.sep}${file.name}`,
  //             `${pathCopy}${path.sep}${file.name}`,
  //             (err) => {
  //               if (err) {
  //                 throw err;
  //               }
  //             }
  //           );
  //         }
  //       });
  //     });
  //   }
  //       });
  //     } else {
  //       throw Error("FS operation failed");
  //     }
  //   });

  // 2
  fs.access(pathFiles, (err) => {
    if (err === null) {
      fs.access(pathCopy, (err) => {
        if (err === null) {
          throw Error("FS operation failed");
        } else {
          fs.mkdir(pathCopy, { recursive: true }, (err) => {
            if (err) {
              throw err;
            }
          });

          fs.readdir(pathFiles, { withFileTypes: true }, (err, files) => {
            if (err) {
              throw err;
            }
            files.map((file) => {
              if (file.isFile()) {
                const stream = fs.createReadStream(
                  `${pathFiles}${path.sep}${file.name}`,
                  "utf8"
                );
                stream.on("data", (data) => {
                  fs.writeFile(
                    `${pathCopy}${path.sep}${file.name}`,
                    data,
                    (err) => {
                      if (err) {
                        throw err;
                      }
                    }
                  );
                });
                stream.on("error", (err) => console.log(`Err: ${err}`));
              }
            });
          });
        }
      });
    } else {
      throw Error("FS operation failed");
    }
  });
};

await copy();
