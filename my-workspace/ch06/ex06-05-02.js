// 유니언 타입과 타입 가드
(function () {
    // FIXME: print 함수의 타입을 정의하고 msg의 타입에 따라서 결과값 출력
    function print(msg) {
        if (typeof msg === 'string') {
            // string일 경우
            console.log("".concat(msg, " \uAE00\uC790\uC218: ").concat(msg.length)); // string일 경우 length 속성 사용
        }
        if (typeof msg === 'number') {
            // number일 경우
            console.log("".concat(msg, " + 10 = ").concat(msg + 10));
        }
        if (typeof msg === 'boolean') {
            // boolean일 경우
            console.log("".concat(msg, ": ").concat(msg ? '참' : '거짓'));
        }
    }
    print('world');
    print(200);
    print(false);
})();
