import { Transform } from "node:stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(data, _encoding, cb) {
      cb(null, `${`${data}`.split("").reverse().join("")}\n\n`);
    },
  });

  process.stdin.pipe(transformStream).on("data", (data) => {
    process.stdout.write(data);
  });
};

await transform();
