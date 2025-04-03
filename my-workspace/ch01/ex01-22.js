/*
반복문 - break, continue
*/

// n ~ m 까지의 정수 중에서 가장 작은 짝수를 찾아서 출력하세요.
// n < m

const n = 1;
const m = 10;

// 선언 시켜서 i를 증가시키도록 한다.
// 반복에 사용할 숫자 (초기값은 n, 즉 1)
let i = n;
// 짝수를 찾으면 저장할 변수 (처음엔 아무 것도 없으니 -1로 초기화)
let result = -1;
// i가 m보다 작거나 같을 때까지 계속 반복
// 즉, i = 1부터 10까지 순서대로 검사
while (i <= m) {
  // i % 2 === 0이면 i는 짝수입니다.
  if (i % 2 === 0) {
    // 짝수를 찾으면 result에 저장하고 break로 반복을 즉시 종료합니다.
    // 가장 먼저 발견된 짝수만 저장하고 멈추는 것이 핵심!
    result = i;
    break;
  }
  // 아직 짝수를 못 찾았다면 i를 1 증가시켜서 다음 숫자로 넘어감
  i++;
}
console.log(result); // 2

// 정유진님의 정석 코드
for (let i = n; i <= m; i++) {
  //짝수확인
  if (i % 2 == 0) {
    console.log(i + "는 짝수입니다.");
    break;
  }
}

// 강사님 코드

const n = 1;
const m = 10;

for (let i = n; i <= m; i++) {
  //짝수확인
  if (i % 2 == 0) {
    console.log(i + "는 짝수입니다.");
    break;
  }
}

// n부터 m까지 홀수만 출력하세요.
for (let i = n; i <= m; i++) {
  if (i % 2 === 1) {
    console.log('홀수', i);
  }
}

// n부터 m까지 홀수와 짝수를 구분해서 출력하세요.
for (let i = n; i <= m; i++) {
  if (i % 2 === 1) {
    console.log('홀수', i);
    continue;
  }

  console.log('짝수', i);
  // 굉장히 많고
  // 복잡한
  // 코드가 
  // 있을 수 
  // 있습니다.
}