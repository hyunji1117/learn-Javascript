/*
for 문을 이용해서 구구단 작성

출력 예시:
3 x 1 = 3
3 x 2 = 6
...
3 x 9 = 27
*/

/* const dan = 3;

for (let i = 1; i <= 9; i++) {
  // 문자열을 결합하는 방법
  console.log(dan + ' x ' + i + ' = ' + (dan * i));
  // 변수를 지정하는 방법
  console.log(`${dan} x ${i} = ${dan * i}`);
} */



/*
2단부터 9단까지 출력
출력 예시
2*1 = 2
2*2 =4
....
9*8=72
9*9=81
*/

/* const dan = 2;

for (let dan = 2; dan <= 9; dan++) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} x ${i} = ${dan * i}`);
  }
  console.log('---------------------');
} */



/* 
2단부터 9단까지 출력
출력 예시
2 x 1 = 2 | 3 x 1 = 3 | 4 x 1 = 4 | 5 x 1 = 5 | 6 x 1 = 6 | 7 x 1 = 7 | 8 x 1 = 8 | 9 x 1 = 9 |
2 x 2 = 4 | 3 x 2 = 6 | 4 x 2 = 8 | 5 x 2 = 10 | 6 x 2 = 12 | 7 x 2 = 14 | 8 x 2 = 16 | 9 x 2 = 18 |
2 x 3 = 6 | 3 x 3 = 9 | 4 x 3 = 12 | 5 x 3 = 15 | 6 x 3 = 18 | 7 x 3 = 21 | 8 x 3 = 24 | 9 x 3 = 27 |
2 x 4 = 8 | 3 x 4 = 12 | 4 x 4 = 16 | 5 x 4 = 20 | 6 x 4 = 24 | 7 x 4 = 28 | 8 x 4 = 32 | 9 x 4 = 36 |
2 x 5 = 10 | 3 x 5 = 15 | 4 x 5 = 20 | 5 x 5 = 25 | 6 x 5 = 30 | 7 x 5 = 35 | 8 x 5 = 40 | 9 x 5 = 45 |
....
*/

const dan = 2;
for (let dan = 2; dan <= 9; dan++) {
  let gugu = '';
  for (let i = 1; i <= 9; i++) {
    gugu += `${i} x ${dan} = ${dan * i}`.padEnd(12);
  }
  console.log(gugu);
}