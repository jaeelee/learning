// 1. 콜백함수
// 인수로 전달되어 나중에 실행되는 함수
// 콜백 : 뒷전에 실행되는, 나중에 실행되는

function main(value) {
  value();
}

main(() => {
  //   console.log("I am sub");
});

// 2. 콜백 함수 활용

// 유사한 구조 함수 재생성 방지 (중복방지)
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, (idx) => console.log(idx));
repeat(5, (idx) => console.log(idx * 2));
