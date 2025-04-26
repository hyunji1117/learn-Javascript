/* 
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

// Number는 너무 커지면 "대충" 기억하지만,
// BigInt는 "자리 하나하나 정확히" 기억한다.

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

const A = BigInt(input[0]);
const B = BigInt(input[1]);
const C = BigInt(input[2]);

const result = A + B + C;

console.log(result.toString());
// 출력(console.log) 할 때만 n을 덧붙여 보여주기 때문에 문자열로 값을 변환하여 출력해야 한다. 


/* function main() {
  const data = getData();
  data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data.a + data.b + data.c);
}
main(); */

/**
 * 표준 입력장치(콘솔)에서 한 줄로 입력된 세 건의 데이터를 읽어서 숫자로 변환한 후
 * 객체에 a, b, c 속성으로 저장하여 반환한다.
 * @returns {object} a, b, c 속성에 입력값이 저장된 객체
 */
// function getData() {
//   const fs = require("fs");
//   const fileData = fs.readFileSync(0).toString().trim().split(" ");

//   const result = new Object();

//   result.a = isNaN(fileData[0]) ? fileData[0] : parseInt(fileData[0]);
//   result.b = isNaN(fileData[1]) ? fileData[1] : parseInt(fileData[1]);
//   result.c = isNaN(fileData[2]) ? fileData[2] : parseInt(fileData[2]);

//   return result;
// }