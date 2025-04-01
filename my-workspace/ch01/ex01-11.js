/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/

var a = 5;
var b = 10;
var c = '5';
var d = 5;

// > (크다)
console.log(a > b); // false 5 > 10

// < (작다)
console.log(a < b); // true 5 < 10

// >= (크거나 같다)
console.log(a >= d); // true 5 >= 5

// <= (작거나 같다)
console.log(a <= d); // true 5 <= 5

// 문자열 비교
console.log(a == c); // true 5 == '5' (문자열과 숫자 비교) 문자 '5'는 숫자 5로 변환됨
console.log(a === c); // false 5 === '5' (문자열과 숫자 비교) 1차적으로 문자와 숫자의 타입이 다르기 때문에 false가 출력된다. 

console.log('ch05' > 'ch02'); // true 'ch05' > 'ch01' (문자열 비교) 문자 '5'는 숫자 5로 변환되어서 
// 문자도 크고 작은 비교가 가능하고 사전 순으로 비교된다.

console.log('ch12' > 'ch2'); // false 'ch12' > 'ch2' (문자열 비교) 컴퓨터 에서는 문자를 한 글자씩 비교하기 떄문에
// '2'는 숫자 2로 변환되어서 false가 출력된다. 


