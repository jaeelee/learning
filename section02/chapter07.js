// 6가지의 요소 조자 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소 추가
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고 반환
const popedItem = arr1.pop();

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고 반환
const shiftedItem = arr1.shift();

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가
const newLength2 = arr1.unshift(0);

// push, pop보다 shift,unshift 의 속도가 느리다 -> 배열을 한번 돌면서 뒤쪽 요소를 옮겨야하기 때문

// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환, 원본은 변경되지 않음
arr1.slice(2, 4); // (start index, end index + 1) 끝나는지점 이전까지 잘라내므로 +1 해줘야함
arr1.slice(2); // 마지막까지 필요한 경우 끝나는 시점은 생략가능
arr.slice(-1); // 뒤에서부터 n번쨰까지 잘라냄

// 6. concat
// 두개의 서로 다른 배열을 이어붙여서 새로운 배열로 반환
arr1.concat([1, 2, 3]);
