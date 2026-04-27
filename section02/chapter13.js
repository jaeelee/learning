// Promise
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트 내장 객체
// - 비동기 작업 실행
// - 비동기 작업 상태관리
// - 비동기 작업 결과저장
// - 비동기 작업 병렬 실행
// - 비동기 작업 다시 실행
// - 비동기 작업 기타 등등

// Promise의 3가지 상태
// 대기(pending)
// 성공(fulfilled)
// 실패(rejected)

function add10(num) {
  // 생성자
  // resolve(결과값): promise상태를 fulfilled상태로 변경
  // reject(결과값):  promise상태를 rejected상태로 변경
  const promise = new Promise((resolve, reject) => {
    //비동기 작업을 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });
  return promise;
}

// then 메서드
// promise의 비동기 작업이 성공했을 때 실행
// 반환값은 promise를 다시 반환
promise
  .then((value) => {
    console.log(value);
  })
  // catch 메서드
  // promise의 비동기 작업이 실패했을 때
  // 반환값은 promise를 다시 반환
  .catch((error) => {
    console.log(error);
  });
// promise 체이닝
// 위와같이 promsie then. catch 등을 연결해서 사용하는 것

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result); // 콜백지옥 방지로 새로운 promise객체를 반환 가능
  })
  .then((result) => {
    console.log(result);
    return add10(result);
  });
