/*
반복문 - for문 - 중첩 for문으로 별 피라미드 프로그램 만들기
*/

/*
for문
*/

/*
*
**
***
****
*****
*/


// 총 5줄 출력하려고 하는 반복문
// i = 1부터 5까지, 즉 5줄을 출력
/* for (let i = 1; i <= 5; i++) {
  let str = '';
  for (let k = 1; k <= 5; k++) {
    // 현재 줄 번호(i)가 열 번호(j)보다 크거나 같으면 * 출력
    // (예: 3행에서 j가 1, 2, 3이면 출력 → ***)
    // 그렇지 않으면 공백 출력
    if (i >= k) {
      str += '*';
    } else {
      str += ' ';
    }
  }
  console.log(str);
} */

/*
    *
   **
  ***
 ****
*****
*/

/* for (let i = 0; i < lines; i++) {
  let space = '';
  let star = '';
  for (let k = 0; k < lines - i - 1; k++) {
    space += ' ';
  }
  for (let k = 0; k <= i; k++) {
    star += '*';
  }
  console.log(space + star);
} */

const lines = 5;

for (let i = 0; i < lines; i++) {
  let star = '';
  for (let k = 0; k <= i; k++) {
    star += '*';
  }
  console.log(star);
}

