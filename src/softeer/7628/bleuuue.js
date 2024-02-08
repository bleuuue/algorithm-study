const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .splice(1)
  .map(Number);
let answer = 0;

for (let i = 2; i <= Math.max(...input); i++) {
  const num = input.filter((val) => val % i === 0).length;
  answer = Math.max(answer, num);
}

console.log(answer);
