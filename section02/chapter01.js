// 1. Falsy
// undefined, null, 0, -0, NanN, "", 0n;
// 0n : big integer 아주 큰 숫자를 저장할 때 사용하는 타입

// 2. Truthy
// -> 위의 7가지를 제외한 나머지 모든 값

// 3. 활용사례
function printName(person) {
  if (person) {
    console.log(person.name);
    return;
  }
  console.log("person의 값이 없음");
}
