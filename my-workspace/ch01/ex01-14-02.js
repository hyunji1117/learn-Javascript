/*
입력한 값이 홀수인지 짝수인지 출력하는 코드를 작성하세요

입력값 예시 1:
15
출력값 1:
15는 홀수 입니다. 

입력값 예시 2:
출력값 2:
12는 짝수 입니다.
*/

const fs = require('fs');
const fileData = fs.readFileSync(0).toString();
console.log(fileData);

let num = Number(fileData);
let result = num % 2 === 0 ? '짝수' : '홀수';
console.log(`${num}는 ${result} 입니다.`);

// 입력받은 데이터에 따라서 짝수 인지, 홀수인지 판단하는 코드입니다.