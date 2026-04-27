// 단락평가(short-circuit evaluation)
function returnFalse() {
  console.log("False");
  //   return false;
  return undefined;
}

function returnTrue() {
  console.log("True");
  //   return true;
  return 10;
}

console.log(returnFalse() && returnTrue());
// && 연산에서 첫번째 연산만으로 결과값을 확정할 수 있다면 두번째 연산은 생략
// F && ? = F 이기 때문에 첫번째 함수인 returnFalse함수만 실행하고 뒤의 returnTrue는 실행되지 않음

console.log(returnTrue() || returnFalse());
// T || ? = T 이기 때문에 첫번째 함수인 returnTrue만 실행하고 뒤의 returnFalse는 실행되지 않음

//  Truthy 혹은 Falsy 값으로도 가능

// 활용사례
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

// 주의
// && || 연산자를 논리합이나 논리곱으로 보면 안됨, short-circuit으로 봐야한다!
// js는 왼쪽에서 오른쪽으로 실행되기때문에 순서에 상관없는 수학과 달리 논리합 논리곲에 해당하는 법칙들이 적용되지 않는다
// && : truthy면 뒤로
// || : falsy면 뒤로
