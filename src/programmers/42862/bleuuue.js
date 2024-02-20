function solution(n, lost, reserve) {
  const lost_filter = lost.filter((val) => !reserve.includes(val)).sort();
  const reserve_set = new Set(
    reserve.filter((val) => !lost.includes(val)).sort()
  );

  for (let i = lost_filter.length - 1; i >= 0; i--) {
    const front = lost_filter[i] - 1,
      back = lost_filter[i] + 1;

    if (reserve_set.has(back)) {
      reserve_set.delete(back);
      lost_filter.pop();
    } else if (reserve_set.has(front)) {
      reserve_set.delete(front);
      lost_filter.pop();
    }
  }

  return n - lost_filter.length;
}
