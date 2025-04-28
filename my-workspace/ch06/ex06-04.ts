// // 선택적 파라미터(optional parameter)

(()=>{
  function user(name: string, age?: number) { //선택적 파라미터. 안쓰는게 내부코드 구현하는데 쉽긴하다.
    console.log(name, age);
  }

  user('하루', 5);
  user('용쌤');

})();