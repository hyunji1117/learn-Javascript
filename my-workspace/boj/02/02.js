/* 
제목: 시험 성적
설명: 시험 점수를 성적으로 바꾸는 문제
제출: https://www.acmicpc.net/submit/9498

문제
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

출력
시험 성적을 출력한다.

예제 입력 1
100

예제 출력 1
A
*/

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const score = parseInt(input[0]);

if (score >= 90 && score <= 100) {
  console.log('A');
} else if (score >= 80 && score < 90) {
  console.log('B');
} else if (score >= 70 && score < 80) {
  console.log('C');
} else if (score >= 60 && score < 70) {
  console.log('D');
} else {
  console.log('F');
}


/* 입력받기
const fs = require('fs');
const input = parseInt(fs.readFileSync('/dev/stdin').toString().trim(), 10);

조건문을 사용하여 성적 계산
if (input >= 90) {
  console.log('A');
} else if (input >= 80) {
  console.log('B');
} else if (input >= 70) {
  console.log('C');
} else if (input >= 60) {
  console.log('D');
} else {
  console.log('F');
} */