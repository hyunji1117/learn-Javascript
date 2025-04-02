/* if - else if문을 사용하여 학점을 출력하세요. */

const score = 55;

if (score >= 90 && score <= 100) {
  console.log('A');
} else if (score) = 80) {// score가 80 이상 90 미만이면 "B" 출력
  console.log('B');
} else if (score)= 70) { // score가 70 이상 80 미만이면 "C" 출력
  console.log('C');
} else If(score) = 60) { // score가 60 이상 78 미만이면 "D" 출력
  console.log('D');
} else { // score가 60 미만이면 "F" 출력
  console.log('F');
}

/* 
굳이 switch문으로 하고 싶다면 ?
정수로 변환하고 10의 자리만 꺼내기
예: 26.6 -> 3.66 -> 3 */

switch (parseInt(score / 10)) {
  case 10:
    console.log('A');
    break;
  case 9:
    console.log('A');
    break;
  case 8:
    console.log('B');
    break;
  case 7:
    console.log('C');
    break;
  case 6:
    console.log('D');
    break;
  default:
    console.log('F');
}