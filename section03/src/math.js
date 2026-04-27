function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// default: math 모듈을 대표하는 단하나의 기본값
export default function multiply(a, b) {
  return a * b;
}

// commonjs 방식으로 모듈 내보내기
// MediaSourceHandle.export = {
//   add: add,
//   sub: sub,
// };

// es module -> 최신식!
// 사용하기 위해서는 package.json에
// type: "module"
// 추가 필요

export { add, sub };
