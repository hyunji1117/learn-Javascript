/*
if문의 다양한 사용 예제 -> switch문으로 변환
*/

/* 문제1
지정한 연산자와 숫자를 받아서 연산을 수행하는 프로그램
연산자는 +, -, *, / 만 입력 가능
잘못된 연산자를 입력할 경우 "잘못된 입력" 출력
*/

// if문으로 작성

/* const operator = '%';
const n1 = 10;
const n2 = 20;

if (operator === '+') {
  console.log(n1 + n2);
} else if (operator === '-') {
  console.log(n1 - n2);
} else if (operator === '*') {
  console.log(n1 * n2);
} else if (operator === '/') {
  console.log(n1 / n2);
} else {
  console.log('잘못된 입력');
} */

// switch문으로 변환

/* const operator = '/';
const n1 = 10;
const n2 = 20;

switch (operator) {
  case '+':
    console.log(n1 + n2);
    break;
  case '-':
    console.log(n1 - n2);
    break;
  case '*':
    console.log(n1 * n2);
    break;
  case '/':
    // ✅ if문 추가 경우
    if (n2 ===0) {
      console.log('0으로 나눌 수 없습니다.');
    } else {
      console.log(n1 / n2);
    }
    // console.log(n1 / n2);
    break;
  default:
    console.log('잘못된 입력');
    break;
} */

/* 문제2
1 ~ 7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
1은 월요일, 2는 화요일, ... 7은 일요일
1 ~ 7 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

// if문으로 작성

/* const day = 8;

if (day === 1) {
  console.log(('월요일'));
} else if (day === 2) {
  console.log(('화요일'));
} else if (day === 3) {
  console.log(('수요일'));
} else if (day === 4) {
  console.log('목요일');
} else if (day === 5) {
  console.log('금요일');
} else if (day === 6) {
  console.log('토요일');
} else if (day === 7) {
  console.log('일요일');
} else {
  console.log('잘못된 입력');
} */

// switch문으로 변환

/* const day = 7;

switch (day) {
  case 1:
    console.log('월요일');
    break;
  case 2:
    console.log('화요일');
    break;
  case 3:
    console.log('수요일');
    break;
  case 4:
    console.log('목요일');
    break;
  case 5:
    console.log('금요일');
    break;
  case 6:
    console.log('토요일');
    break;
  case 7:
    console.log('일요일');
    break;
  default:
    console.log('잘못된 입력');
    break;
} */

/* 문제3
1 ~ 12 사이의 월을 받아서 게절을 출력하는 프로그램
봄: 4월, 여름: 5 ~ 10월, 가을: 11월, 겨울: 12 ~ 3월
1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

// if문으로 작성

/* const month = 3;

if (month === 4) {
  console.log('봄');
} else if (month === 5 || month === 6 || month === 7 || month === 8 || month === 9 || month === 10) {
  console.log('여름');
} else if (month === 11) {
  console.log('가을');
} else if (month === 12 || month === 1 || month === 2 || month === 3) {
  console.log('겨울');
} else {
  console.log('잘못된 입력');
} */

// switch문으로 변환

/* const month = 6;

switch (month) {
  case 4:
    console.log('봄');
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log('여름');
    break;
  case 11:
    console.log('가을');
    break;
  case 12:
  case 1:
  case 2:
  case 3:
    console.log('겨울');
    break;
  default:
    console.log('잘못된 입력');
    break;
} */