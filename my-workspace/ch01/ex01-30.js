/*
기본 함수
*/

console.log('Hello Function!');
console.log('Hello Function!');

// 함수 생성
function sayHello() {
  console.log('안녕! Function!');
}

// 함수 호출
sayHello();
// 한번 더 보고 싶으면 한번 더 출력하면 된다.
sayHello();
// for문으로 반복하여 출력이 가능하다.
for (let i = 0; i < 3; i++) {
  sayHello();
}