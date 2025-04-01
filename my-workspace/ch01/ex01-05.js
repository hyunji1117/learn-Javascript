/*
변수 선언
*/

var a;
var b, c;
var d = 10; /* 할당 */
var e = 100, f = 200;

var user = '하츄핑';
var user2 = '아자핑';

var message = '아자핑이 "안녕하세요."라고 말했다.';
var message = "하츄핑이 속으로'안녕하세요.'라고 말했다.";
var message = "피곤핑이 \"안녕하세요.\"라고 말했다."; /* 이스케이프 문자(\) */
var message = "몰라핑이 \n모른다로 말했다."; /* 줄바꿈 */
var message = "하츄핑이 \t안녕하세요라고 말했다."; /* 탭 */
var message = "하츄핑이 \r안녕하세요라고 말했다."; /* 캐리지 리턴 */
// var message = "하츄핑이 \\안녕하세요라고 말했다."; /* 백슬래시를 문자로 사용할 경우 */

console.log(message);