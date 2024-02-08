const fs = require('fs');
const args = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number).splice(1);

args.forEach((n) => {
    const fiveNum = Math.floor(n / 5), rest = n % 5;
    let str = '';
    for(let i = 0; i < Math.floor(n / 5); i++) {
        str += '++++ ';
    }
    
    if(rest === 0) str = str.trim();
    else {
        for(let i = 0; i < rest; i++) {
            str += '|';
        }
    }
    console.log(str);
});
