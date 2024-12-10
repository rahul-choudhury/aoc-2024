import { readFileSync } from "node:fs";

const data = readFileSync("./input.txt", "utf8");

// the () syntax creates capture groups
// for easy access of individual numbers
// during the map(([_, a, b]))
const pattern = /mul\((\d{1,3}),(\d{1,3})\)/g;

const partOneSum = Array.from(data.matchAll(pattern))
  .map(([_, a, b]) => Number(a) * Number(b))
  .reduce((acc, val) => acc + val, 0);

const partTwoSum = data
  .split("do()")
  .map((track) => track.split("don't()")[0])
  .flatMap((s) => [...s.matchAll(pattern)])
  .map(([_, a, b]) => Number(a) * Number(b))
  .reduce((acc, val) => acc + val, 0);

console.log(partOneSum);
console.log(partTwoSum);
