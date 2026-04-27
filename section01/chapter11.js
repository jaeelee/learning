// 함수

getArea(10, 20); // 10, 20 : 인수

// 호이스팅
// -> 끌어올리다 라는 뜻
// 코드 아래에 선언된 내용들을 최상단으로 끌어올려둠

function getArea(width, height) {
  // width, height: 매개변수
  function another() {
    // 중첩함수
    console.log("another");
  }
  return width * height; //반환값
}
