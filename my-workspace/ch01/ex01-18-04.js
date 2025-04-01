/* 1. 정보처리 기사 필기 시험의 과목은 
소프트웨어 설계, 
소프트웨어 개발, 
데이터베이스 구축, 
프로그래밍 언어 활용, 
정보 시스템 구축 관리 입니다.

다섯 과목의 점수가 다음과 같을 때 총점과 평균을 출력하는 프로그램을 작성하세요.

출력 결과:
총점: 303
평균: 60.6 */

const softwareDesign = 48; // 1. 소프트웨어 설계
const softwareDevelopment = 80; // 2. 소프트웨어 개발
const databaseSetup = 50; // 3. 데이터베이스 구축
const programmingUsage = 70; // 4. 프로그래밍 언어 활용
const systemManagement = 55; // 5. 정보 시스템 구축 관리

const totalScore = softwareDesign + softwareDevelopment + databaseSetup + programmingUsage + systemManagement; // 총점
const averageScore = totalScore / 5; // 평균

console.log(`총점: ${totalScore}`); // 총점 출력
console.log(`평균: ${averageScore}`); // 평균 출력

/* 
2. 최고점과 최저점을 추가로 출력하세요
출력 결과:
총점: 303
평균: 60.6
최고점: 80
최저점: 48
*/

let max = 0;
/* 
최고점을 저장할 변수 max를 0으로 초기화
이유: 
max를 선언만 하고 초기화하지 않으면 undefined 상태가 되어, 비교할 때 NaN 결과가 나거나 버그가 발생한다.
그리고 시작점을 확실하게 지정해줌으로써 최소한의 안전한 기준값을 세울 수 있다.

선언과 할당을 같이 하는 것이 바람직하다.
0을 넣는 것은 숫자 타입을 가질 수 있도록 하는 것

1. 비교 연산 가능하게 하기
undefined 상태(컴퓨터에는 허수가 있다)면 비교 불가능하므로 기본값이 필요

2. 오류 예방
선언만 해놓고 값을 안 넣으면 예기치 못한 결과 발생

3. 로직 안정성
올바른 값이 들어가기 위한 시작점 지정

4. 실무 팁
배열의 첫 값을 초기값으로 쓰면 가장 안전함

예: 시험 점수는 0 이상이기 때문에 0으로 초기화하는 것이 합리적입니다.
*/

let min = 0;

// const를 선언하지 않는 이유. 
// let과 const의 차이점
// let은 재할당 가능, const는 재할당 불가능
// let은 블록 스코프, const는 함수 스코프

// 지역변수가 되어야 한다. 
// 지역변수로 선언하면, 해당 블록 내에서만 사용 가능
전역변수 전체적으로 사용 가능


/* if (softwareDesign > softwareDevelopment && softwareDesign > databaseSetup
  && softwareDesign > programmingUsage && softwareDesign > systemManagement) {
  max = softwareDesign;
} else if (softwareDevelopment > softwareDesign && softwareDevelopment > databaseSetup
  && softwareDevelopment > programmingUsage && softwareDevelopment > systemManagement) {
  max = softwareDevelopment;
} else if (databaseSetup > softwareDesign && databaseSetup > softwareDevelopment
  && databaseSetup > programmingUsage && databaseSetup > systemManagement) {
  max = databaseSetup;
} else if (programmingUsage > softwareDesign && programmingUsage > softwareDevelopment
  && programmingUsage > databaseSetup && programmingUsage > systemManagement) {
  max = programmingUsage;
} else {
  max = systemManagement;
}

console.log(`최고점: ${max}`); */

/* ❗️ 위 방식의 문제점(보완 필요)
두 과목이 같은 최고점일 경우, 예를 들어 softwareDevelopment와 programmingUsage가 둘 다 80이라면,
위 조건들은 모두 false가 되기 때문에 else로 가버리게 된다. → 이건 정확한 최고점 비교가 아니라는 증거.

개선을 원한다면 Math.max()나 배열 순회로 바꾸는 것이 좋다. */

max = Math.max(softwareDesign, softwareDevelopment, databaseSetup, programmingUsage, systemManagement);
console.log(`최고점: ${max}`); // 최고점 출력



/* if (softwareDesign < softwareDevelopment && softwareDesign < databaseSetup
  && softwareDesign < programmingUsage && softwareDesign < systemManagement) {
  min = softwareDesign;
} else if (softwareDevelopment < softwareDesign && softwareDevelopment < databaseSetup
  && softwareDevelopment < programmingUsage && softwareDevelopment < systemManagement) {
  min = softwareDevelopment;
} else if (databaseSetup < softwareDesign && databaseSetup < softwareDevelopment
  && databaseSetup < programmingUsage && databaseSetup < systemManagement) {
  min = databaseSetup;
} else if (programmingUsage < softwareDesign && programmingUsage < softwareDevelopment
  && programmingUsage < databaseSetup && programmingUsage < systemManagement) {
  min = programmingUsage;
} else {
  min = systemManagement;
}

console.log(`최저점: ${min}`); */

min = Math.min(softwareDesign, softwareDevelopment, databaseSetup, programmingUsage, systemManagement);
console.log(`최저점: ${min}`); // 최저점 출력

/* 
Math.min()은 가장 작은 값을 반환하는 자바스크립트 내장 함수이다. 
인수로 전달된 숫자들 중에서 최소값을 찾아 반환한다. 

Math.min(
  softwareDesign,         // 30
  softwareDevelopment,    // 80
  databaseSetup,          // 50
  programmingUsage,       // 70
  systemManagement        // 55
)

위 값들을 함수에 전달하면, Math.min(30, 80, 50, 70, 55) 이 되고,
최소값은 30이므로 그 결과를 변수 min에 저장한다.
*/

/* 
나중에 배열을 배우게 된다면 반복 처리가 용이하고, 유지보수의 장점이 있는 점고 고려 해보자!
const scores = [
  { subject: '소프트웨어 설계', score: 48 },
  { subject: '소프트웨어 개발', score: 80 },
  { subject: '데이터베이스 구축', score: 50 },
  { subject: '프로그래밍 언어 활용', score: 70 },
  { subject: '정보 시스템 구축 관리', score: 55 },
]; 

이유: 
1. 반복 처리 용이
forEach, map, reduce, filter 등 활용 가능

2. 유지보수 편리
과목이 추가되어도 배열 요소만 추가하면 됨

3. 가독성 향상
점수와 과목 이름이 함께 있어서 의미 파악 쉬움

4. 불합격 사유 추적
어떤 과목이 몇 점인지 쉽게 출력 가능
*/



/* 3. 과목당 40점 이상, 전과목 평균 60점 이상이면 합격입니다.
합격 여부를 추가로 출력하세요.
출력 결과:
총점: 303
평균: 60.6
최고점: 80
최저점: 48
축하합니다.합격입니다.
*/

// if (sum >= 60 && softwareDesign >= 40 && softwareDevelopment >= 40
//   && databaseSetup >= 40 && programmingUsage >= 40 && systemManagement >= 40) {
//   console.log('축하합니다.합격입니다.');
// } else {
//   console.log('아쉽지만 불합격입니다.');
// }

if (avg >= 60 && min >= 40) {
  console.log('축하합니다.합격입니다.');
} else {
  if (avg < 60) {
    console.log(`아쉽지만 불합격입니다. 사유: 평균 60점 미달(${avg}점)`);
  }
  if (min < 40) {
    console.log(`아쉽지만 불합격입니다. 사유: 과락 40점 미달(${min}점)`);
  }
}

// 4. 만약 불합격일 경우 불합격 사유를 추가로 출력하세요.
// 출력 결과 1: softwareDesign = 40일 경우
// 총점: 295
// 평균: 59
// 최고점: 80
// 최저점: 40
// 아쉽지만 불합격입니다.사유: 평균 60점 미달

// 출력 결과 2: softwareDesign = 30일 경우;
// 총점: 285
// 평균: 57
// 최고점: 80
// 최저점: 30
// 아쉽지만 불합격입니다.사유: 평균 60점 미달(57점)
// 아쉽지만 불합격입니다.사유: 과락 40점 미달(30점)

if (avg < 60) {
  console.log(`아쉽지만 불합격입니다.사유: 평균 60점 미달(${avg}점)`);
}

if (min < 40) {
  console.log(`아쉽지만 불합격입니다.사유: 과락 40점 미달(${min}점)`);
}

if (avg < 60 && min < 40) {
  console.log(`아쉽지만 불합격입니다.사유: 평균 60점 미달(${avg}점), 과락 40점 미달(${min}점)`);
} else if (avg < 60) {
  console.log(`아쉽지만 불합격입니다.사유: 평균 60점 미달(${avg}점)`);