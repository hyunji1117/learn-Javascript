/* if문을 사용하여 학점을 출력하세요. */

const score = 69;

// score가 90 이상 100 이하이면 "A" 출력
if (score >= 90 && score <= 100) {
  console.log('당신의 점수는:', "A", '입니다.');
}

// score가 80 이상 90 미만이면 "B" 출력
if (score >= 80 && score < 90) {
  console.log('당신의 점수는:', "B", '입니다.');
}

// score가 70 이상 80 미만이면 "C" 출력
if (score >= 70 && score < 80) {
  console.log('당신의 점수는:', "C", '입니다.');
}

// score가 60 이상 70 미만이면 "D" 출력
if (score >= 60 && score < 70) {
  console.log('당신의 점수는:', "D", '입니다.');
}

// score가 60 미만이면 "F" 출력
if (score < 60) {
  console.log('당신의 점수는:', "F", '입니다.');
}