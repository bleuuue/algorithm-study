function solution(operations) {
  const queue = [];
  for (let i = 0, len = operations.length; i < len; i++) {
    if (operations[i].includes("I")) {
      queue.push(Number(operations[i].slice(2)));
    } else {
      if (!queue.length) continue;

      const findValue = (operations[i].includes("-") ? Math.min : Math.max)(
        ...queue
      );
      const deleteIndex = queue.findIndex((val) => val === findValue);

      queue.splice(deleteIndex, 1);
    }
  }

  const answer = queue?.length
    ? [Math.max(...queue), Math.min(...queue)]
    : [0, 0];

  return answer;
}
