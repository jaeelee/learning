// 1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티(객체 속성)
// -> key: value
// -> key값으로는 숫자 혹은 문자만 가능
// -> value는 모든 타입 가능 (숫자, 문자, 객체, 배열, 함수 등)
let person = {
  name: "홍길동", // name 프로퍼티
  age: 10,
  hobby: "테니스",
};

// 3. 객체 프로퍼티 다루는 방법

// 3.1 특정 프로퍼티 접근
let name = person.name; // 점 표기법
let age = person["age"]; // 괄호 표기법

let property = "hobby";
let hobby = person[property];

// 3.2 추가방법
person.job = "developer";
person["favoriteFood"] = "떡볶이";

// 3.3 수정방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 삭제방법
delete person.job;
delete person["favoriteFood"];

// 3.5 존재 유무 확인
let hasName = "name" in person;
