// 1. 함수 표현식

let varA = function funcA() {
  console.log("funcA");
};

varA();
funcA(); //실행되지 않음 -> 선언식으로 되어있지 않고 값으로 생성되어있기 떄문 (Uncaught ReferenceError: funcA is not defined)

varB(); //호이스팅이 되지 않음 (Uncaught ReferenceError: Cannot access 'varB' before initialization)
// 값으로 함수가 생성되기 때문에 이름 생략가능 -> 익명함수
let varB = function () {
  console.log("funcB");
};

// 질문 왜 호이스팅이 되지 않을까?
/**
 * 
 JavaScript에서 함수 표현식(Function Expression)이 호이스팅(Hoisting)되지 않는 것처럼 느껴지는 이유는, 자바스크립트 엔진이 **변수 선언**과 **값의 할당**을 분리해서 처리하기 때문입니다.

결론부터 말씀드리면, **변수 선언 자체는 호이스팅되지만, 함수가 할당된 '값'은 호이스팅되지 않기 때문**입니다. 이해를 돕기 위해 단계별로 살펴볼게요.

---

## 1. 선언식 vs 표현식의 차이

### 함수 선언식 (Function Declaration)
```javascript
sayHello(); // 실행 가능!

function sayHello() {
  console.log("안녕하세요!");
}
```
함수 선언식은 코드 실행 전, 자바스크립트 엔진이 함수 전체를 메모리에 미리 등록합니다. 따라서 어디서든 호출이 가능합니다.

### 함수 표현식 (Function Expression)
```javascript
sayHi(); // TypeError: sayHi is not a function (var 사용 시)
         // ReferenceError: Cannot access 'sayHi' before initialization (let/const 사용 시)

var sayHi = function() {
  console.log("하이!");
};
```
함수 표현식은 변수에 익명 함수를 담는 형태입니다. 엔진은 이를 **함수가 아니라 일반적인 '변수 선언'**으로 취급합니다.

---

## 2. 호이스팅의 동작 원리

자바스크립트는 코드를 실행하기 전 '컴파일 단계'를 거칩니다. 이때 변수 선언들을 코드의 최상단으로 끌어올리는 것처럼 동작하죠.



### `var`를 사용한 경우
변수 이름 `sayHi`는 호이스팅되어 메모리에 공간을 확보하지만, 값은 아직 들어오지 않은 상태인 `undefined`로 초기화됩니다.
* **컴파일 단계:** `var sayHi;` (선언만 최상단으로 이동)
* **실행 단계:** `sayHi();` 시도 → "어? `sayHi`는 현재 `undefined`인데 이걸 함수처럼 호출한다고?" → **TypeError 발생**

### `let`이나 `const`를 사용한 경우
선언은 호이스팅되지만, **TDZ(Temporal Dead Zone, 일시적 사각지대)**에 빠집니다. 초기화가 되기 전까지는 변수에 접근조차 할 수 없으므로 **ReferenceError**가 발생합니다.

---

## 3. 왜 이렇게 설계되었을까?

함수 표현식을 사용하는 주된 이유는 **함수를 데이터처럼 다루기 위해서**입니다.

1.  **코드 구조화:** 함수가 선언되기 전에 호출되는 것을 방지하여, 위에서 아래로 흐르는 논리적인 코드 작성을 유도합니다.
2.  **유연성:** 조건에 따라 다른 함수를 할당하거나, 콜백 함수로 전달하는 등 '값'으로서의 성격을 강조합니다.

---

> **요약하자면:**
> 함수 표현식은 변수에 함수라는 '값'을 담는 것입니다. 자바스크립트는 **선언**은 미리 챙기지만, 그 안에 **어떤 값(함수)**이 들어있는지는 실제 코드가 실행되는 시점(런타임)에 확인하기 때문에 호출이 불가능한 것입니다.
 */
// 2. 화살표 함수
let varC = (value) => value + 1;
