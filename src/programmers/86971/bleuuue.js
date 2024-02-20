function solution(n, wires) {
  let answer = 100;
  const dfs = (wires, visit, set) => {
    wires.forEach(([v1, v2], i) => {
      if (!visit[i] && (set.has(v1) || set.has(v2))) {
        set.add(v1);
        set.add(v2);
        visit[i] = true;
        dfs(wires, visit, set);
      }
    });
  };

  wires.forEach(([v1, v2], i) => {
    const newWires = wires.filter((_, index) => i !== index);
    const visit = newWires.map(() => false);
    const set = new Set([v1]);

    dfs(newWires, visit, set);

    answer = Math.min(answer, Math.abs(set.size - (n - set.size)));
  });

  return answer;
}
