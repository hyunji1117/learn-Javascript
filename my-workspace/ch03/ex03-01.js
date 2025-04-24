/*
* prototype
  - 모든 함수가 기본으로 가지고 있는 속성
  - 초기값은 빈 객체
  - prototype에 추가한 속성은 해당 함수가 생성자로 사용될 때 생성된 인스턴스에서 내부 링크로 참조되어 사용
  - 결국, prototype은 생성자 함수를 통해 생성되는 인스턴스의 메서드를 정의하는 역할

* Score 생성자 함수에 총점과 평균을 계산하는 메서드를 추가해서 완성하세요.
*/

/**
 * 국어, 영어 점수를 매개변수로 받는 생성자 함수
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */

// score라는 함수 객체가 만들어지고
//  모든 함수는 prototypt 라는 속성이 기본적으로 부여된다.  
// 그리고 object라는 빈 객체를 가리키고 있다. (img 참고)
// avg 속성 추가, 그리고 평균 함수로 객체에 추가한다. 
// 그리고 빈객체를 하나 생선한다. 
const Score = function(kor, eng){
  this.kor = kor;
  this.eng = eng;

  this.sum = function( ){
    return this.kor + this.eng;
  };
  // this.avg = function(){
  //   return this.sum() / 2;
  // };
};
Score.prototype.avg = function(){
  return this.sum() / 2;
}


const s1 = new Score(90, 80);
const s2 = new Score(70, 50);

console.log(s1.sum()); // 170
console.log(s1.avg()); // 85
console.log(s2.sum()); // 120
console.log(s2.avg()); // 60

console.log(s1.sum === s2.sum); // false
console.log(s1.avg === s2.avg); // true

console.log(Object.getPrototypeOf({}))

/* 생성자 함수로 객체를 생성할 때마다 sum 프로퍼티를 새로 할당하기 때문에, 같은 sum 속성이라고 하더라도, s1 이 가리키는 sum 의 주소와 s2 가 가리키는 sum 의 주소가 다르다. 
prototype 은 같은 sum 주소를 가리키는 거다. */