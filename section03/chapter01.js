// 1. nodejs 소개
// nodejs를 왜 배워야 하나요?
// react, nextjs, 등이 nodejs를 기반으로 작동함

// javascript 실행환경 (런타임) = 구동기

// 왜 만든건가?
// js는 웹 페이지 내부에 필요한 단순한 기능만 작동하도록 만들어진 언어
// js => 매우 유연하고 작성하기 편리하도록 설계되어있음, 생산성이 매우 높음
// js를 웹페이지 밖에서도 js를 이용해 프로그램을 만들고싶은 수요가 생김
// node.js로 웹서버, 모바일앱, 데스크톱 앱 까지 만들수 있게 됨

// 2. nodejs 설치
// LTS : Long term surpport
// 가장 장기적으로 지원되는 버전, 오랜 기간동안 안정적으로 지원됨

// npm : node package manager
// -> nodejs의 프로젝트 단위인 패키지를 관리하는 도구 (nodejs설치 시 자동으로 설치됨)

// 3. nodejs 사용하기
// 프로젝트 : 특정 목적을 갖는 프로그램 단위
// 패키지 :  nodejs에서 사용하는 프로그램의 단위

// 4. 모듈 시스템
// 모듈을 다루는 시스템
// 자바스크립트 코드를 기능별로 분리하여 여러 파일로 나누어 구성하고 서로 가져와 쓰게 돕는 시스템
// 모듈? 기능별로 나누어진 각각의 js파일
// ex) user.js -> user 모듈

// 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템
// common JS, ES Module 등

// commonjs 방식으로 모듈 내보내기
MediaSourceHandle.export = {
  add: add,
  sub: sub,
};

// common JS 방식으로 모듈 가져오기
const { add, sub } = require("./math");

// es module -> 최신식!
// 사용하기 위해서는 package.json에
// type: "module"
// 추가 필요
// 추가 후에는 common JS모듈시스템은 사용 불가능 -> 함께 사용 불가능함

// 라이브러리?
// 프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것
// npmjs.com : 라이브러리 모여있는 곳
// package.json 에 dependencies 속성이 추가됨
// node_modules : 실제 라이브러리가 저장되어있는 저장소
// lock: 라이브러리의 버전이나 정보를 package.json보다 정확하고 엄밀하게 저장해둔 파일
// npm install : dependencies를 기준으로 필요한 라이브러리르 설치해줌
