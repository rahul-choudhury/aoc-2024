import fs from "node:fs";

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // splits the data by two spaces or a newline character
  const serializedData = data.split(/ {2}|\n/);

  /* NOTE: due to the splitting by \n,
   * the last line ("") is also included in the array.
   *
   * data.split(/ {2}|\n/).filter(Boolean) might be a better approach.
   * but, eh..
   * */
  serializedData.pop();

  const listOne = serializedData
    .filter((_, idx) => idx % 2 === 0)
    .map(Number)
    .sort((a, b) => a - b);

  const listTwo = serializedData
    .filter((_, idx) => idx % 2 !== 0)
    .map(Number)
    .sort((a, b) => a - b);

  const sum = listOne.reduce(
    (sum, num, idx) => sum + Math.abs(num - listTwo[idx]),
    0,
  );

  console.log(sum);
});
