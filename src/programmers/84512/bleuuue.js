function solution(word) {
  const arr = ["A", "E", "I", "O", "U"];
  const words = [];

  const dfs = (word, len) => {
    if (word.length === len) words.push(word);
    else arr.forEach((val) => dfs(word + val, len));
  };

  for (let i = 0; i < arr.length; i++) dfs("", i + 1);
  words.sort();

  return words.findIndex((val) => val === word) + 1;
}
