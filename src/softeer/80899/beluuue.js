const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').splice(1);

let answer = '';

input.forEach((str) => {
    const [str1, str2] = str.toUpperCase().split(' ');
    const index = str1.indexOf('X');
    answer += str2[index];
})

console.log(answer);