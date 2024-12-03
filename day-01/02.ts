import fs from "node:fs";

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const serializedData = data.split(/ {2}|\n/);
  serializedData.pop();

  const listOne = serializedData.filter((_, idx) => idx % 2 === 0).map(Number);
  const listTwo = serializedData.filter((_, idx) => idx % 2 !== 0).map(Number);

  const countMap = listTwo.reduce((map, num) => {
    map.set(num, (map.get(num) || 0) + 1);
    return map;
  }, new Map());

  const sum = listOne.reduce((acc, num) => {
    const occurrences = countMap.get(num) || 0;
    return acc + num * occurrences;
  }, 0);

  console.log(sum);
});
