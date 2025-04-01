/*
논리 연산자 &&, ||, !
*/

// 논리합(OR): 피연산자 중 하나라도 true이면 true.
// 둘 다 false일 때만 false가 된다.

/* console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

var name = 'hong';
var age = 8;
var invalidId = id.length < 4 || id.length > 12;
console.log('id 입력 조건에 맞지 않음', invalidId); //false  */

// 앞에 값이 참이면 앞의 값을 반환하는 특이한 케이스 연습
// falsy: 거짓으로 인정하는 값
// number 타입은 0일 경우 false로 인정
// string 타입은 ''일 경우 false로 인정
// null, undefined, NaN도 false로 인정

// truthy: 참으로 인정하는 값
//  {}, [] 일 경우 true로 인정
//  ' ' 빈 공백일  경우 true로 인정
console.clear();
console.log('hello' || 'world'); // hello
console.log(90 || 30); // 90
/* 시험 받고 정답이 90점이 나왔다. 점수가 있으니 앞에 값으로 쓰겠다. */
console.log(0 || 30);
/* 만약에 0점을 맞았다면 기본 30점으로 쓰겠다고 지정하는 경우를 상상해볼 수 있다. 
즉, 있으면 쓰고, 없으면 대신 써라 */

console.log(null || 'world'); // world
console.log(undefined || 'hello'); // hello
console.log(0 || 100); // 100
console.log('' || 'hello'); // hello

let userName = 'hong';
let userAge = 8;
console.log(userName || '널핑'); // hong

/* 컴퓨터는 없는 글자도 메모리에 할당 되고 있기 때문이다. */



// 앞의 값이 참이면 뒤으ㅏㅣ 값을 반환한다. 
// 앞의 값이 거짓이면 뒤의 값을 반환한다. 

// 어떤 값의 속성 확인 값으로 사용을 많이 사용하였으나 이제는 id?로 타입을 확인한다. 
// ontional chaing을 활용해서....

console.log('글자수', id && id.length); // 글자수 4
console.log();




















