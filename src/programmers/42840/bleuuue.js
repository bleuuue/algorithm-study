function solution(answers) {
  const person = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  const count = [0, 0, 0];
  const answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === person[0][i % person[0].length]) count[0]++;
    if (answers[i] === person[1][i % person[1].length]) count[1]++;
    if (answers[i] === person[2][i % person[2].length]) count[2]++;
  }

  const max = Math.max(...count);
  count.forEach((val, i) => {
    if (max === val) answer.push(i + 1);
  });
  return answer;
}
