/*
while문
*/

//  1부터 10까지 홀수의 합계 출력

/* const sum = 0;
let i = 1;
while (i <= 10) {
  if (i % 2 === 1) {
    sum += i;
    i++;
  }
}
console.log(i); */



//  1부터 10까지 짝수의 합계 출력

let evenSum = 0;
let oddSum = 0;
let i = 1;
// 1부터 10까지 짝수의 합계
while (i <= 10) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
  i++;
}

console.log("짝수의 합계:", evenSum);
console.log("홀수의 합계:", oddSum);


