/*
반환값이 있는 함수 - 토스터

토스터 기계를 만든다. 
토스터에 시간과 빵 이라는 정보를 넘겨준다. 

특정 시간 후에 몇 초동안 구워진 빵
*/

function toaster(time, bread) {
  return time + '초 동안 구워진' + bread;
}

const toast1 = toaster(40, 'dn')