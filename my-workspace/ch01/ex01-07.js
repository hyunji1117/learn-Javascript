/*
기본 데이터 타입 - BigInt
*/

var b1 = 12345n;
var be = BigInt(maxSafeNum);

// BigInt끼리 연산하도록 해줘야 에러가 생기지 않는다.
console.log(b2 - 1n, b2, b2 + 1n, b2 + 3n);
