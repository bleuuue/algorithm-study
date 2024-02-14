가로 세로 상관없이 길이 중 가장 큰 값을 지갑의 가로 길이로 정의한다.
명함의 가로 세로를 비교하여 더 큰 값을 가로, 작은 값들을 세로라고 가정하며 세로 사이즈들 중 가장 큰 값을 구한다.

### 기존 나의 풀이

```
function solution(sizes) {
    const hArr = sizes.map((val) => Math.min(val[0], val[1]));
    const minW = Math.max(...sizes.reduce((acc, curr) => acc.concat(curr), []));
    const minH = Math.max(...hArr);
    return minW * minH;
}
```
