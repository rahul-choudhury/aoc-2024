import { readFileSync } from "node:fs";

const data = readFileSync("./input.txt", "utf8").split(/\n/).filter(Boolean);
console.log(countSafeReports(data));

function countSafeReports(data: string[]) {
  let safeReportCount = 0;

  for (const entry of data) {
    const reading = entry.split(" ").map(Number);
    if (isSafe(reading)) {
      safeReportCount += 1;
    }
  }

  return safeReportCount;
}

function isSafe(reading: number[]) {
  let status: "increasing" | "decreasing" | undefined;

  for (let i = 0; i < reading.length - 1; i++) {
    const diff = reading[i] - reading[i + 1];

    if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
      return false;
    }

    if (!status) {
      status = diff < 0 ? "increasing" : "decreasing";
    } else if (
      (status === "increasing" && diff > 0) ||
      (status === "decreasing" && diff < 0)
    ) {
      return false;
    }
  }

  return true;
}
