import fs from "node:fs";

export function readDataFromFile(path: string, splitStr: string = "\n") {
  const data = fs.readFileSync(path, "utf8").split(splitStr);
  data.pop();

  return data;
}
