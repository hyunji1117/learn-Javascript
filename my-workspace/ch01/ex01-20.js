/*
반복문 - while문
*/

/* if - else if문을 사용하여 학점을 출력 -> 반복문 - while문 */

// 1부터 10까지 출력

// 원래는 이렇게 하드코딩 하였다. 
/* console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10); */

// 1부터 10까지 출력하는 반복문을 사용할 경우
/* let i = 1;
while (i <= 10) {
  console.log(i++);
} */

// 1부터 10까지의 모든 수의 합계를 출력
i = 1;
let sum; // 초기값을 주지 않고 선언을 하면 undefined 상태가 된다.
while (i <= 10) { // i = 1부터 10까지
  sum += i; // sum = sum + i; // sum에 i를 더한 값을 다시 sum에 대입
  i++;
}

console.log(i);
console.log(sum);

var sum = 0;

// 선언까지는 됬는데 초기값이 0이 아직 안되었다는 것. 
// hoisting 단원에서 다시 얘기 해보겠다.

---

## ✅ 코드 전체

var sum = 0;
var i = 1;
while (i <= 10) { // 조건식
  sum += i; // 실행할 코드
  i++; // 증감식
}
alert(sum);

### 1️⃣ `var sum = 0;`

  - `sum`이라는 변수를 선언하고 ** 초기값 0 ** 을 저장합니다.
- → 누적합(총합)을 저장할 변수입니다.

---

### 2️⃣ `var i = 1;`

  - `i`라는 변수에 ** 1을 저장 ** 합니다.
- → 반복문에서 사용할 ** 카운터 변수 ** 예요. 1부터 시작해서 10까지 올라갑니다.

---

### 3️⃣ `while (i <= 10)`

  - `i`가 10 이하일 동안 반복합니다.
- 즉, `i = 1 ~ 10` 동안 반복문이 실행됩니다.

---

### 4️⃣ `sum += i;`

  - 현재 값 `i`를 `sum`에 누적시킵니다.
    즉, `sum = sum + i;` 와 같은 의미입니다.

---

### 5️⃣ `i++;`

  - `i` 값을 1 증가시킵니다.
- 반복문 다음 회차에서 조건을 다시 검사하기 위해 증가시킵니다.

---

### 6️⃣ `alert(sum);`

  - 반복이 모두 끝난 뒤 `sum` 값을 ** 팝업창(alert) ** 으로 출력합니다.

---

## ✅ 실행 흐름 요약

  | i 값 | sum에 더함 | sum 값 |
| ------| -------------| ---------|
| 1 | 0 + 1 | 1 |
| 2 | 1 + 2 | 3 |
| 3 | 3 + 3 | 6 |
| 4 | 6 + 4 | 10 |
| ...  | ...         | ...     |
| 10 | 45 + 10 | 55 |

  ---

## ✅ 최종 출력

  ```javascript
alert(sum); // 팝업창에 55 출력
```