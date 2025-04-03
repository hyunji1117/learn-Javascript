/*
매개변수를 가진 함수 - 도어락
*/

/*
매개변수를 가진 함수 - 도어락
도어락은 비밀번화가 입력되면 문이 열린다
잘못된 비밀번호가 입력되면 경보음이 울린다
*/

/* function doorLock(password) {
  const pwd = 1234; // ??
  if (pwd === password) {
    console.log('문이 열립니다.');
  } else {
    console.log('경보음이 울립니다.');

  }
}

doorLock(1111);
doorLock(1234);
doorLock(); // 선언안된 변수, 강형언어는 여기서 에러가 나는데 js는 약형 언어여서 실행을 시켜준다.  */


// password.slice 함수 사용하기 (문자의 일부만 뜯어내려고 할 때)

function doorLock(password = '') {
  const pwd = '1234';
  // password = password || ''; // 비밀번호가 없으면 빈 문자열로 초기화 default parameter라는 것
  const subPassword = password.slice(-pwd.length); // 내용 추가
  if (subPassword === pwd) {
    console.log('문이 열립니다.');
  } else {
    console.log('경보음이 울립니다.');
  }
}

doorLock('1234');
doorLock('123451234');
doorLock();