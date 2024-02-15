function solution(brown, yellow) {
  const sum = brown + yellow;
  let h = Math.floor(Math.sqrt(brown + yellow));
  let w = sum / h;

  while ((h - 2) * (w - 2) !== yellow || w % 1 !== 0) w = sum / --h;

  return [w, h];
}
