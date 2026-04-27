// 자료형
// 1. 원시타입

// 1-1. 숫자
let age = 20;
// 모듈러 연산 가능 (+, -, *, /, %)
// 무한대 값은 Infinity, 음수 무한대 값은 -Infinity
// 숫자가 아닌 값은 NaN

// 1-2. 문자열
let name = "John";
// "", '', `` 로 감싸야함
// +연산으로 문자열 결합 가능
// ``사용 방법: ${}로 변수 삽입 가능 -> 템플릿 리터럴 문법
let introText = `My name is ${name}`;

// 1-3. 불리언
let isEmpty = true;

// 1-4. null (아무것도 없다)
// 개발자가 직접 선언한 값이 없다는 것을 의미
let empty = null;

// 1-5. undefined (정의되지 않음)
// 아무것도 할당되지 않았을 때 자동으로 할당되는 값
let none;

// 2. 객체타입
