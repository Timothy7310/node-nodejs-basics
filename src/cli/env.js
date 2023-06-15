const parseEnv = () => {
  const result = Object.entries(process.env)
    .filter(([key, _value]) => key.startsWith("RSS_"))
    .map((x) => x.join("="))
    .join("; ");
  console.log(result);
};

parseEnv();
