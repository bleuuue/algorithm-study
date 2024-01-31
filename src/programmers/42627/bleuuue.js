function solution(jobs) {
  jobs.sort(([a, b], [c, d]) => a - c || b - d);
  let time = 0;
  let processed_time = 0;
  const waiting = [];
  const count = jobs.length;

  while (jobs.length || waiting.length) {
    let in_process;
    // 현재 시점 실행시킬 수 있는 프로세스 저장
    while (jobs.length && jobs[0][0] <= time) waiting.push(jobs.shift());

    if (waiting.length) {
      // 실행 가능한 것들 중 제일 짧게 걸리는 거 먼저 시작
      in_process = waiting.sort(([a, b], [c, d]) => b - d || a - c).shift();
    } else {
      // 실행 가능한 게 없다면 남은 것들 중 제일 먼저 할 수 있는 걸 시점으로 시작
      in_process = jobs.shift();
      time = in_process[0];
    }
    // 현재 시점 계산
    time += in_process[1];
    // 요청부터 소요 시간 계산
    processed_time += time - in_process[0];
  }

  return Math.floor(processed_time / count);
}
