// 1. spread 연산자
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6]; // [arr[0],arr[1],arr[2]]처럼 index로 접근해 흩뿌릴 경우 배엷이 수정될 경우 문제될 가능성이 있어 위험

let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1, p2, p3) {}
funcA(...arr1);

// 2. rest 매개변수 (나머지 매개변수)
//

function funcB(p1, ...rest) {
  // 주의! rest매개변수 뒤에는 다른 인수가 올 수 없음
  console.log(rest);
}
funcB(...arr1);
