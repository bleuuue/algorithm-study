function solution(k, dungeons) {
  let answer = 0;
  const visit = dungeons.map(() => false);
  const dfs = (k, count, visit) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visit[i] && k >= dungeons[i][0]) {
        visit[i] = true;
        k -= dungeons[i][1];
        answer = Math.max(answer, count);
        dfs(k, count + 1, visit);
      }
      visit[i] = false;
      k += dungeons[i][1];
    }
  };

  dfs(k, 0, visit);
  return answer;
}
