1. 여벌 체육복을 가져온 학생이 도난당했을 경우 lost와 reserve에서 제거
2. 도난당한 학생들을 뒤에서부터 탐색하여 여벌 체육복으로 존재할 경우 lost와 reserve에서 제거
   - lost에서의 요소 제거로 pop을 쓰기 위해 뒤에서부터 탐색
   - 기존 코드에서는 reserve도 배열로 선언되어 삭제할 요소의 index를 검색하고 삭제하였지만 Set을 이용하여 has와 delete 내장 함수를 이용하여 간편히 삭제
3. 총 인원수에서 체육복을 빌리지 못한 학생(최종 lost 크기) 수를 빼고 반환한다.

### 기존 코드

```
function solution(n, lost, reserve) {
    const lost_filter = lost.filter((val) => !reserve.includes(val)).sort();
    const reserve_filter = reserve.filter((val) => !lost.includes(val)).sort();

    for (let i = lost_filter.length - 1; i >= 0; i--) {
        const front = lost_filter[i] - 1, back = lost_filter[i] + 1;
        if (reserve_filter.includes(back)) {
            const delIdx = reserve_filter.findIndex((val) => val === back);
            reserve_filter.splice(delIdx, 1);
            lost_filter.pop();
        } else if(reserve_filter.includes(front)) {
            const delIdx = reserve_filter.findIndex((val) => val === front);
            reserve_filter.splice(delIdx, 1);
            lost_filter.pop();
        }
    }

    return n - lost_filter.length;
}
```
