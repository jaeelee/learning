// 1. if문
let num = 10;
if (num >= 10) {
} else if (num >= 5) {
} else {
}

// 2. switch문
// 다수의 조건을 처리할 때 if보다 직관적임
let animal = "cat";

switch (animal) {
  case "cat":
    console.log("고양이");
    break;
  case "dog":
    console.log("강아지");
    break;
  case "basr":
    console.log("곰");
    break;
  default:
}
