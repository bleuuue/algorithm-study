const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map((val) => val.split(' ').map(Number));
let bagWeight = input[0][0], answer = 0;

input.splice(0, 1);
input.sort((a, b) => b[1] - a[1]);


for(let i = 0; i < input.length; i++) {
    const [weight, price] = input[i];

    if(bagWeight >= weight) {
        bagWeight -= weight;
        answer += weight * price;
    } else {
        answer += bagWeight * price;
        break;
    }
};

console.log(answer);