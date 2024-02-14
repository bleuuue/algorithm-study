function solution(numbers) {
  const number = numbers.split("").map(Number);
  const every = [];
  let answer = 0;

  const permutation = (arr, selectNum) => {
    const result = [];
    if (selectNum === 1) return arr.map((v) => v);

    arr.forEach((v, i, arr) => {
      const fixer = v.toString();
      const restArr = arr.filter((_, index) => index !== i);
      const permuArr = permutation(restArr, selectNum - 1);
      const combineFixer = permuArr.map((v) => fixer + v);
      result.push(...combineFixer);
    });

    return result;
  };

  const isPrime = (num) => {
    if (num < 2) return false;
    for (let n = 2; n <= Math.sqrt(num); n++) {
      if (num % n === 0) return false;
    }
    return true;
  };

  for (let i = 1; i <= number.length; i++)
    every.push(...permutation(number, i).map(Number));

  const set = new Set(every);
  set.forEach((num) => {
    if (isPrime(num)) answer++;
  });

  return answer;
}
