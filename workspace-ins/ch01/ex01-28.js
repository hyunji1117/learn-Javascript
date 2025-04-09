/*
유사 배열 객체
*/

/**
 * 전달받은 배열의 모든 요소를 인덱스와 함께 출력한다.
 * @param {any[]} arr - 배열
 */
function printArr (arr) {
  for (let i=0; i<arr.length; i++){
    console.log(i, arr[i]);
  }
}

const colorArr = [ 'orange', 'yellow', 'green' ];
colorArr.push('black');
printArr(colorArr);

/*
TODO 유사 배열 객체
유사 배열 객체
  - length 속성
  - 0부터 시작해서 1씩 증가하는 속성 추가
*/
const arr = {
  length: 3,
  0: 'orange',
  1: 'yellow',
  2: 'green'
};
arr.push('black');
printArr(arr);

// 문자열도 유사 배열 객체의 일종
// printArr('이것은 문자열');
