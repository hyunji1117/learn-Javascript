/*
반복문 - for문
*/

// while문으로 1부터 10까지의 모든 수의 합계를 출력

/* let sum = 0;
let i = 1;
while (i <= 10) { // 조건식
  sum += i; // 실행할 코드
  i++; // 증감식
}
console.log(sum); */

// for문으로 1부터 10까지의 모든 수의 합계를 출력

/* let sum = 0; // 초기값을 주지 않고 선언을 하면 undefined 상태가 된다.
// for문은 초기식, 조건식, 증감식이 한 줄에 모두 들어가 있다.
for (let i = 1; i <= 10; i++) { // 초기식, 조건식, 증감식
  sum += i; // 실행할 코드
  console.log(i, sum);

} */

// 1부터 10까지 출력
// let sum = 0;
// let evenSum = 0;
// let oddSum = 0;

for (let i = 1; i <= 10; i++) {
  console.log(i);

  // 1부터 10까지 홀수의 합계 출력. 25
  sum = 0;
  for (let i = 1; i <= 10; 1 += 2) {
    sum += i; // 홀수의 합계
  }
  console.log("홀수의 합계:", sum);

  /* if (i % 2 === 1) {
    evenSum += i; // 홀수의 합계
    console.log("홀수의 합계:", evenSum);
  } else {
    oddSum += i; // 짝수의 합계
    console.log("짝수의 합계:", oddSum);
  }
  } */


  // 1부터 10까지 짝수의 합계 출력. 30

  for (let i = 2; i <= 10; i += 2) {
    sum += i; // 짝수의 합계
  }

  console.log("짝수의 합계:", sum);
