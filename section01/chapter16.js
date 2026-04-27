// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

animal = { a: 1 }; // 오류

// -> 프로퍼티 추가 수정 삭제 가능
animal.age = 2;
animal.name = "까망이";
delete animal.color;
// 왜? const는 재할당을 막는 것이기 떄문에(새로운 값을 할당하는 것을 막음)
// 프로퍼티는 할당에 영향이 가지 않음

// 2. 메서드
// -> 객체 프로퍼티 중 값이 함수인 프로퍼티

const person = {
  name: "홍길동",
  //메서드선언
  sayHi() {
    // sayHi: ()=>{}도 가능
    console.log("안녕");
  },
};
