const parseArgs = () => {
  const result = process.argv
    .slice(2)
    .map((x, index, arr) => {
      if ((index + 1) % 2 === 0) {
        return [arr[index - 1], x];
      }
    })
    .filter((x) => x)
    .map((x) => x.join(" is "))
    .join(", ");
  console.log(result);
};

parseArgs();
