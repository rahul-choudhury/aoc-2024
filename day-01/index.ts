import { readFileSync } from "node:fs";

const data = readFileSync("./input.txt", "utf8")
  .split(/ {2}|\n/)
  .filter(Boolean); // filters out any empty strings (especially the trailing "" after the last \n)

// Part 01
const partOneListOne = data
  .filter((_, idx) => idx % 2 === 0)
  .map(Number)
  .sort((a, b) => a - b);

const partOneListTwo = data
  .filter((_, idx) => idx % 2 !== 0)
  .map(Number)
  .sort((a, b) => a - b);

const partOneSum = partOneListOne.reduce(
  (sum, num, idx) => sum + Math.abs(num - partOneListTwo[idx]),
  0,
);

// Part 02
const partTwoListOne = data.filter((_, idx) => idx % 2 === 0).map(Number);
const partTwoListTwo = data.filter((_, idx) => idx % 2 !== 0).map(Number);

const countMap = partTwoListTwo.reduce((map, num) => {
  map.set(num, (map.get(num) || 0) + 1);
  return map;
}, new Map());

const partTwoSum = partTwoListOne.reduce((acc, num) => {
  const occurrences = countMap.get(num) || 0;
  return acc + num * occurrences;
}, 0);

console.log(partOneSum);
console.log(partTwoSum);
