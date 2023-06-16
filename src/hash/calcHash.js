import crypto from "crypto";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const pathToFile = path.join(__dirname, "files", "fileToCalculateHashFor.txt");

const calculateHash = async () => {
  fs.readFile(pathToFile, "utf-8", (err, data) => {
    if (err) {
      throw err;
    }
    console.log(crypto.createHash("sha256").update(data).digest("hex"));
  });
};

await calculateHash();
