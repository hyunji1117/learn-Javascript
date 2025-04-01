/*
if-else문

if(조건식) {
    조건식이 참일 때 실행할 코드;
    조건식이 참일 때 실행할 코드;
    ......
} else {
    조건식이 거짓일 때 실행할 코드;
    조건식이 거짓일 때 실행할 코드;
    ......
}
*/

const age = 15;
// age가 20 이상이면 "성인" 출력
if (age >= 20) {
  console.log("성인");
} else {
  console.log("미성년자");
}

const num = -5;
// num이 양수이면 "양수" 출력
// 음수 양수의 기준은 0으로 설정하면 된다. 
if (num > 0) {
  console.log("양수");
} else {
  if (num < 0) {
    console.log("음수");
  } else {
    console.log(0);
  }
}

const password = 1234;
// password가 1234면 "로그인 성공!" 출력
if (password === 1234) {
  console.log("로그인 성공!");
} else {
  console.log("로그인 실패!");
}

const num2 = 4;
// num2가 짝수이면 "짝수" 출력
/* num2 % 2는 num2를 2로 나눈 나머지를 구함
나머지가 0이면 → 짝수
따라서 "짝수"가 출력됨 */
// 단, num2는 0보다 크다. (0에 대한 조건을 고려해야할 경우, 조건 고정하기)
if (num2 % 2 === 0) {
  console.log('짝수');
} else {
  console.log('홀수');
}

// num3가 3의 배수이면 "3의 배수" 출력
// num3가 3의 배수가 아니면 "3의 배수가 아님" 출력
const num3 = 14;
if (num3 % 3 === 0) {
  console.log("3의 배수");
} else {
  console.log("3의 배수가 아님");
}