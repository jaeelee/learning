# 감정일기장

---

# 페이지 라우팅(Page Routing)

- 경로에 따라 알맞은 페이지를 렌더링하는 과정
  - ex: 사용자 -블로그접속-> 브라우저(클라이언트) -요청/blog-> 서버 -blog 페이지 반환-> 브라우저(클라이언트) -블로그 페이지 렌더링-> 사용자
  - 위와 같은 과정을 페이지 라우팅이라고 함

## 전통적인 방식의 페이지 라우팅 원리

### MPA방식(Multi Page Application)

- 서버가 제공해야할 모든 페이지에 해당하는 html를 미리 가지고 있음
- 브라우저(클라이언트) -요청/blog-> 서버 -blog 페이지(html) 탐색 및 반환-> 브라우저(클라이언트)
- 많은 서비스가 사용하는 전통적인 방식

단점 : 페이지 이동이 쾌적하지 못하다(빠르게 처리하기 힘듦)
-> 페이지를 이동할 때마다 원래 렌더링해둔 기존의 페이지는 삭제하고 새로운 페이지를 가져와 처음부터 렌더링함
-> 새로고침 하는 것 처럼 깜빡임
-> 중복되는 부분까지 전부 새롭게 그리고 깜빡히는 현상으로인해 매끄럽지 않고 비효율적인 이동을 제공
-> 페이지를 이동할 때마다 서버에게 요청을 보내기 때문에 다수의 사용자가 접속 시 서버의 부하가 심해질

### Server Side Rendering (SSR)

- 서버측에서 미리 완성해둔 html을 보내준 것을 브라우저에서 그대로 보여주는 것

> MPA !== SSR
>
> - MPA는 서버측에서 html 을 가지고 있는 것
> - SSR은 미리 완성되어있는 페이지를 응답해주는 방식

## React 방식

### SPA방식(Single Page Application)

- 서버는 페이지를 하나만 가지고 있음(index.html)
- 나머지는 JS 파일들 (App.jsx, header.jsx, util.js 등)
- 브라우저가 서버에 어떤 페이지를 요청했든 index.html을 반환 (브라우저 -/setting 요청-> 서버 -index.html 반환-> 브라우저)
- 가장 처음 index.html 을 받아서 렌더링(빈화면) -> 서버가 후속으로 모든 js파일을 하나로 합친 js파일(번들링된 js 파일)을 추가로 전달 -> 브라우저가 번들파일을 직점 실행 하고 컴포넌트 렌더링
  -> 번들파일: 직접 작성한 모든 리액트파일이 하나로 묶여있는 파일이기 때문에 react app으로 부를 수도 있다.

- 페이지 이동이 매끄럽고 효율적
- 다수의 사용자가 접속해도 서버 부하가 적음

> 번들링 -> 여러개의 파일을 하나로 묶어주는 것, vite와 같은 도구들이 함

#### 페이지 이동 방식

- 서버에게 요청 따로 보내지 않음 react app에서 새로운 페이지에 필요한 컴포넌트들로 화면 교체
- 모든 페이지, 컴포넌트의 정보가 reactapp파일에 포함되어있기 때문에 아무른 요청도 없이 브라우저가 스스로 페이지를 이동 가능
- 변경이 필요한 컴포넌트만 교체

### 클라이언트 사이드 렌더링(CSR)

- 브라우저에서 직접 자바스크립트 파일을 실행해서 화면에 렌더링하는 방식

# react 브라우저 라우팅

## react-router-dom 라이브러리

### 사용 방법

```jsx

// 1. 설정
// main.jsx
import { BrowserRouter } from "react-router-dom";

// BrowserRouter : 리액트 앱의 모든 컴포넌트들이 현재 브라우저의 주소를 불러와 쓸 수도 있고 주소의 변화를 감지할 수 있게 함
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

// app.jsx
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
    <div>hello</div> <-- routes밖에 있을 경우 모든 페이지에 보임(일반적인 컴포넌트와 동일하게 동작)
    <Routes>  <-- routes 안의 컴포넌트들만 페이지 이동에 따라 라우팅 됨
      <div></div> // <--  오류남
      <Route path="/" element={<Home />} />
      <Route path="/diary" element={<Diary />} />
      <Route path="/new" element={<New />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

// 2. 이동하기
// 2-1. Link 사용하기
// 링크가 필요한 경우
import { Link } from "react-router-dom";
// 이동 버튼 만들기
<Link to={"/"}>Home</Link> // a태그를 대체하는 컴포넌트 (CSR방식으로 이동하도록 제공)
<a href="/">home</a> // CSR 방식아님 (페이지 이동 시 새로고침 발생)

// => 리액트 앱 내부에서 이동할 경우 Link 컴포넌트를 이용하자

// 2-2. useNavigate 훅 사용
// 특정 조건에 따라 페이지 이동이 필요한 경우
import { useNavigate } from "react-router-dom"; // <- 페이지를 실제로 이동 시키는 네비게이트함수를 반환

const nav = useNavigate();
const onClickButton = () => {
  nav("/new");
}

```

### 동적 경로

- 동적인 데이터를 포함하고 있는 경로

1. url parameter

- 아이템의 id같이 변경되지 않는 값을 명시할 때 사용
- 사용법 `/:변수`

```jsx
// app.jsx
<Route path="/diary/:id" element={<Diary />} />;

// diary.jsx
import { useParams } from "react-router-dom";
const Diary = () => {
  const params = useParams();
  console.log(params.id);

  reutrn <></>
};
```

2. Query String

- 검색어 등 자주 변경되는 값을 주소로 명시하기 위해 사용
- 사용법

```jsx
import { useSeachParams } from "react-router-dom";
const Home = () => {
  const [params, setParams] = useSearchParams();
  console.log(params.get("value")); // url : /?value="value"
};
```

# public폴더와 assets폴더 차이

둘 다 동일하게 정적인 파일을 보관하는 곳

- public에 넣을 경우
  -> 경로를 통해 이미지를 가져옴 `<img src="/image.png">`
  -> 이미지가 너무 많은 경우 캐시 메모리에 넣는것도 부담이기 때문에 public에 넣기도 함

- assets에 넣을 경우
  -> vite가 내부적으로 제공하는 이미지 최적화가 적용됨(브라우저 메모리에 캐싱)
  -> import 문으로 이미지 가져옴 `import image from "/image.png"`

- 최적화가 어떻게 적용되는데요
  -> 빌드하면 확인가능 npm run build -> npm run preview
  -> 확인해보면 public에는 일반 url이 적혀있고 assets에 있는 파일들은 dataURI가 적여있음
  -> data uri가 뭔데 : 이미지와 같은 외부데이터들을 문자열 형태로 브라우저의 메모리에 캐싱하기 위한 포맷
  -> 브라우저 메모리에 캐싱되면 새로고침할 때 다시 불러오지 않도록 최적화 됨

# 프로젝트 개발 순서 팁

페이지라우팅, 글로벌 레이아웃 설정 -> 공통 컴포넌트 구현 -> 개볊이지 및 복잡한 기능 구현

# 웹 스토리지

- 웹 브라우저 내장 DB
- 별도의 프로그램이나 라이브러리 설치 필요 없음
- 기본적으로 key:value 형태로 value에는 문자열로 저장 -> 객체를 저장하려면 문자열로 변환후 저장해야함

  | sessionStorage                             | LocalStorage                                |
  | ------------------------------------------ | ------------------------------------------- |
  | 브라우저 탭별로 데이터를 보관              | 사이트 주소별로 데이터를 보관               |
  | 탭이 종료되기 전까지 데이터 유지(새로고침) | 사용자가 직접 삭제하기 전까지 데이터를 보관 |
  | 탭이 종료되거나 꺼지면 데이터가 삭제       | 삭제 전까지 영구적으로 보관                 |

- state는 javascript의 변수에 저장된 값이나 다름이 없다
  -> 새로고침이 되면 state가 다시 생성된다. 즉, 초기화 된다.
  -> 유지되도록 하고 싶다면?
  -> 외부 데이터베이스에 저장

# 배포하기

- 페이지 타이틀 설정
  - 브라우저 탭에 표시되는 페이지의 제목
- fivicon 설정
  - 브라우저 탭에 표시되는 작은 아이콘
- 오픈 그래프 설정
  - 웹 사이트 링크 공유할 떄 썸네일, 제목 등 정보를 노출하는 것
- 프로젝트 빌드하기

## 클라우드 서버

- 이미 구축되어있는 공간에 임대해서 사용하는 것
- vercel 추천

# 학습 방법

- 가르치기..!!
- 내가 오늘 들었던 강의를 다른사람에게 가르킬 수 있는가
- 오늘 공부한 내용으로 내일 과외를 할 수 있을까

추천 방법 : 블로그를 통해 가르치기! -> 교육용 컨텐츠라고 생각하고 글을 쓰기

# 학습 방향 추천

- 함께 자라기 애자일로 가는 길 [김창준 저자]
- 실력에 맞는 난이도의 과제를 하기 ex) 게임과 같다
- 몰입을 지속적으로 경험할 수 있도록 할 것

어떻게??

1. 새로운 키워드 수집 - velog, sns 등 개발자가 모인 곳 눈팅, 기업의 기술블로그들, 세미나 참여 등등..

2.어려운 과제의 난이도 낮추기 - 어려운 부분은 빼고 해볼만한것 만 남긴 미니 프로젝트 만들기

3. 내 실력 높이기 - 강의, 스터디, 책 등등

4. 나의 실력 낮추기(모래주머니 달기) - 평소에 쓰던 라이브러리 사용하지 않고 구현해보기 등등
