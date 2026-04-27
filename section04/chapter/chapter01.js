// #1 react소개
// Meta에서 개발한 오픈소스 javascript 라이브러리
// 대규모 웹 서비스 ui 를 더 편하게 개발하기 위해 만들어진 기술

// - 특징
// 1. 컴포넌트기반으로 ui를 표현

// 컴포넌트: 구성요소
// 화면을 구성하는 요소, ui를 구성하는 요소
// 기본적으로 페이지의 모든 요소들을 컴포넌트라는 단위로 개발하기 때문에
// 여러 페이지에서 공통으로 사용되는 경우 컴포넌트를 불러와서 사용하면 되기 때문에 중복코드 발생하지 않음
// 유지보수 차원에서도 매우 용이

// 2. 화면 업데이트 구현이 쉽다

// react는 선언형 프로그래밍으로 되어있음
// 선언형 프로그래밍 : 과정은 생략하고 목적만 간결히 명시하는 방법 <-> 명령형 프로그래밍: 목적을 이루기 위한 모든 일련의 과정을 설명하는 방식
// 업데이트를 위한 복잡한 동작을 직접 정의할 필요 없이 특정 변수값을 변경하는 것으로 화면을 업데이트 신킬 수 있다.

// 3. 화면 업데이트가 빠르게 처리된다

// 선수지식 : 브라우저는 어떻게 동작하는가?
// 브라우저 렌더링 과정 (critical rendering path)
/*

html -> DOM
        ↓
    render tree -> layout -> painting
        ↑
css  -> CSSOM
*/

// DOM(Document Object Model) : 요소들의 위치, 배치 모양에 관한 모든 정보 (html 문서를 브라우저가 이해하기 쉬운 객체 모델로 변환한 것)
// CSSOM : 요소들의 스탈일과 관련된 모든 정보 (css코드를 브라우저가 자기가 더 이해하기 쉬운 형태로 변환한 것)
// render tree : 웹페이지의 청사진
// layout : 요소의 배치를 잡는 작업
// -> layout을 다시하는 경우를 reflow
// painting : 실제로 화면에 그려내는 과정
// -> painting을 다시 하는 경우 : repaint

// 업대이트는 언제 일어날까?
// js가 dom을 수정하면 업데이트가 발생!

// reflow와 repaint는 꽤 오래 걸리는 작업이다..

function onCLick() {
  const $ul = document.getElementById("ul");
  for (let i = 0; i < 3000; i++) {
    $ul.innerHTML += `<li>${i}</li>`; // dom 수정이 3천번 일어남
  }
}

function onCLick1() {
  const $ul = document.getElementById("ul");
  let list = "";
  for (let i = 0; i < 3000; i++) {
    list += `<li>${i}</li>`;
  }
  $ul.innerHTML = list; // dom 수정이 1번만 일어남
}

// 위와같이 동시에 발생한 다양한 업데이트를 모아두고 다 모였다면 한번에 수정
// 다양한 업데이트들 -> 동시에 발생한 업데이트 모음->다 모인 후 한번에 수정 -> dom
// -> 리액트는 이 과정을 자동으로 해준다 (feat. virtual dom)

// Virtual Dom?
// DOM을 자바스크립트 객체로 흉내낸 것으로 일종의 복제판
// React는 업데이트가 발생하면 실제 dom을 수정하기 전에 복제판에 먼저 반영해봄
// 즉 virtual dom 이 일종의 버퍼 역할

// #2 react 생성하기
// Vite
// 차세대 프론트엔드 개발 툴
// 기본 설정이 적용된 React App 생성 가능
// 명령어: npm create vite@latest

// public : 코드가아닌 정적인 파일이 들어가있는 폴더
// src : 소스코드 보관 폴더
// assets : 정적 파일이 들어가있는 폴더
// index.html : 리액트 앱의 기본 틀 역할

// #3 react app 구동 원리

// 리액트 앱안에 웹 서버가 내장되어 있다..!!
// npm run dev -> 웹 서버가 가동이 시작

// localhost: 현재 내 컴퓨터의 주소
// 포트번호 : 하나의 컴퓨터 내에서 여러 서버를 구동하고 있을 때 구분하기 위함

// 실행 시 작동 순서
// 리액트 앱의 처음에 index.html 파일을 브라우저에 보냄
// index.html 안의 script 에 있는 scr/main.jsx파일을 가져와서 실행
// [src/main.jsx] createRoot : 인수로 받은 html 요소를 리액트의 루트(뿌리)로 만들어주는 역할을 함
