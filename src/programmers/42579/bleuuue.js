function solution(genres, plays) {
  let answer = [];
  const map = new Map();
  genres.forEach((genre, i) =>
    map.set(genre, [
      ...(map.get(genre) || []),
      {
        plays: plays[i],
        index: i,
      },
    ])
  );

  const sortMap = new Map(
    [...map].sort((a, b) => {
      const aSum = a[1].reduce((sum, v) => sum + v.plays, 0);
      const bSum = b[1].reduce((sum, v) => sum + v.plays, 0);

      return bSum - aSum;
    })
  );

  for (const [key, value] of sortMap) {
    value.sort((a, b) => b.plays - a.plays);

    answer = [...answer, ...value.slice(0, 2).map((val) => val.index)];
  }

  return answer;
}
