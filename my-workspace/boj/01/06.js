/*
제목: 사칙연산
설명: 모든 연산 문제
제출: https://www.acmicpc.net/submit/10869

문제
두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

입력
두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

출력
첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

예제 입력 1
7 3

예제 출력 1
10
4
21
2
1
*/

// var a = 7;
// var b = 3;

const fs = require('fs');
const fileData = fs.readFileSync(0).toString().trim().split(' ');

// 입력값 파싱
const a = parseInt(fileData[0]);
const b = parseInt(fileData[1]);

// 사칙연산 결과 출력
console.log(a + b);           // 덧셈
console.log(a - b);           // 뺄셈
console.log(a * b);           // 곱셈
console.log(parseInt(a / b)); // 나눗셈 → 정수 몫만!
console.log(a % b);           // 나머지