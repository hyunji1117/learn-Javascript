/* re
제목: 꼬마 정민
설명: 더 큰 수를 더하는 문제
제출: https://www.acmicpc.net/submit/11382

문제
꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다!

입력
첫 번째 줄에 A, B, C (1 ≤ A, B, C ≤ 1012)이 공백을 사이에 두고 주어진다.

출력
A+B+C의 값을 출력한다.

예제 입력 1
77 77 7777

예제 출력 1
7931
*/

// 입력받기
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

// A, B, C를 숫자로 변환
const A = BigInt(input[0]);
const B = BigInt(input[1]);
const C = BigInt(input[2]);

// A + B + C 계산
const result = A + B + C;

// 결과 출력
console.log(result.toString());