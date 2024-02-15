function solution(k, dungeons) {
  let answer = 0;
  const visit = dungeons.map(() => false);
    
  const dfs = (k, count) => {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visit[i] && k >= dungeons[i][0]) {
        visit[i] = true;
        dfs(k - dungeons[i][1], count + 1);
        visit[i] = false;
      }
    }
    answer = Math.max(answer, count);
  };

  dfs(k, 0, visit);
  return answer;
}
