// 5가지 요소 순회 및 탐색 메서드

// 1. fotEach
// 모든 요소를 순회하면서 각각의 요소에 특정 동작을 수행시키는 메서드
let arr = [1, 2, 3];

arr.forEach(function (item, idx, arr) {
  //   console.log(idx, item * 2);
});

let doubledArr = [];

arr.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let isInclude1 = arr.includes(3); // true
let isInclude2 = arr.includes(10); // false

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let ObjectArr = [{ name: "홍길동" }, { name: "김철수" }, { name: "김영희" }];
let index = arr.indexOf(1); // 0
let index2 = arr.indexOf(20); // -1

// 4. findIndex
// 콜백함수를 만족하는 특정요소의 인덱스를 반환하는 메서드
arr.findIndex((item) => item % 2 !== 0);

// 복잡한 객체값을 찾을때는 findIndex 를 사용
// 객체의 경우 비교할 때 참조값을 비교하기 때문에 indexOf로는 찾을 수 없다
ObjectArr.indexOf({ name: "홍길동" }); // -1

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾고 그 요소를 반환
arr.find((item) => item.name === "홍길동");
