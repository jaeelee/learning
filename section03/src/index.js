// common JS 방식으로 모듈 가져오기
// const { add, sub } = require("./math");

// es Module 방식으로 모듈 가져오기
import mul, { add, sub } from "./math.js";
import randomColor from "randomcolor";

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(2, 3));

const color = randomColor();
console.log(color);
