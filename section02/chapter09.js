// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let arr = [
  { name: "홍길동", hobby: "테니스" },
  { name: "김철수", hobby: "테니스" },
  { name: "김영희", hobby: "독서" },
];

const tennisPeople = arr.filter((item) => item.hobby === "테니스");

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백함수를 실행하고
// 그 결과값을 모아서 새로운 배열로 반환
const mapResult = arr.map((item, index, arr) => item * 2);
let names = arr.map((item) => item.name);

// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr1 = ["b", "a", "c"];
arr1.sort();

// 숫자일 경우 주의
let arr2 = [10, 3, 5];
arr2.sort((a, b) => {
  if (a > b) {
    return 1; // b가 a앞에 와라 => b, a 배치
  } else if (b > a) {
    return -1; // a가 b 앞에 와라 => a, b  배치
  } else {
    return 0; // 두 값의 자리를 바꾸지 마라
  }
});
// 간단 버전
arr2.sort((a, b) => a - b);

// 4. toSorted
// 원본은 놔두고 새로운 정렬된 배열을 반환하는 메서드
const sorted = arr1.toSorted();

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
const joined = arr1.join("-"); // 구분자를 인수로 받음
