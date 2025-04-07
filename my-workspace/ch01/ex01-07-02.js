/* 
symbol
함수를 통해 만들 수 있고, 객체 속성을 정의할 때 symbol를 사용할 수 있다. 
충돌, 덮어 쓰기가 되면 안되는 중요한 정보는 sybol로 정의한다는 것만 알고 있자.
*/

// string
var s1 = 'hello';
var s2 = 'World';
var s3 = 'hello';

console.log(s1 === s2); // false
console.log(s2 === s3); // false
console.log(s1 === s3); // true

// symbol 함수 추가하면 모든 symbol값은 다르게 나온다. 
var s1 = Symbol('hello');
var s2 = Symbol('World');
var s3 = Symbol('hello');

console.log(s1 === s2); // false
console.log(s2 === s3); // false
console.log(s1 === s3); // false