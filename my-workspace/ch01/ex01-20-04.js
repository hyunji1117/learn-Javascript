/* do-while 최소 한번만 실행하는 경우에 사용한다. (잘 쓰지 않는다.)

do {

} while (조건);
 */

let i = 0;
let sum = 0;

do {
  sum += i;
  i++;
} while (i < 10);

console.log(sum);
