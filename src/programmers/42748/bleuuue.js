function solution(array, commands) {
  return commands.map(
    ([sIndex, eIndex, index]) =>
      array.slice(sIndex - 1, eIndex).sort((a, b) => a - b)[index - 1]
  );
}
