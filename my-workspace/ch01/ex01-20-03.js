/*
첫날에 쌀을 한톨 받습니다.
둘째날 쌀을 두돌 받습니다.
세째날 쌀을 네돌 받습니다.
매일 전날의 두개가 되는 쌀알을 받아서 모으면 몇일을 모아야 쌀알을 천만개 모을 수 있을까요?
*/

// 변수 선언
let day = 1; // 첫날에 
let count = 1; // 쌀알 한 톨 받는다
let sum = 0;

// 반복문을 사용하여 쌀알의 개수를 계산
while (sum < 10000000) {
  // 총 합이 1000만 이라면
  sum += count;
  day++;
  count = count * 2;
}

day--; // 마지막 날을 제외하기 위해 하루를 빼줍니다.

console.log(`${day}일 동안 받았더니 쌀알이 ${sum}개 되었다. 내일은 ${count}개 받을 수 있겠군.`);

// 30일 동안 몇 개의 쌀알을 모을 수 있는가?
/* let totalRice = 0;
let ricePerDay = 1; // 첫날 쌀알 수
let days = 30; // 총 일수
for (let i = 1; i <= days; i++) {
  totalRice += ricePerDay;
  ricePerDay *= 2; // 매일 전날의 두배로 증가
}
console.log(`30일 동안 모은 쌀알의 총 개수: ${totalRice}개`); */
