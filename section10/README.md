# 최적화

## 일반적인 방법

- 서버의 응답 속도 개선
- 이미지, 폰트, 코드 파일 등 정적 파일 로딩 개선
- 불필요한 네트워크 요청 줄임

## react 내부 최적화

- 컴포넌트 내부의 불필요한 연산 방지
  - useMemo/useCallback
  - 메모이제이션 기법을 기반으로 불필요한 연산 최적화하는 리액트 훅
  - 결과값을 메모리에 저장해두고 같은 연산이 반복될 때 메모리에 저장된 값을 불러옴

  ```javascript
  // -> getAnalzsedData 처럼 사용할 경우 카운트가 변경되는 상황과 관련없는 (검색기능 등) 상황에서도 해당 함수가 호출됨
  // const getAnalzsedData = () => {
  //   const totalCount = todos.length;
  //   const donCount = todos.filter((todo) => todo.isDone).length;
  //   const notDoneCount = totalCount - donCount;
  // console.log("호출");

  //   return { totalCount, donCount, notDoneCount };
  // };
  // const { totalCount, donCount, notDoneCount } = getAnalzsedData();

  const { totalCount, donCount, notDoneCount } = useMemo(
    () => {
      const totalCount = todos.length;
      const donCount = todos.filter((todo) => todo.isDone).length;
      const notDoneCount = totalCount - donCount;
      console.log("호출");

      return { totalCount, donCount, notDoneCount };
    },
    [todos], //deps
  );
  ```

- 컴포넌트의 불필요한 리렌더링 방지
  - React.memo
  - 컴포넌트를 인수로 받아 최적화된 컴포넌트로 만들어 반환
  - Props를 기준으로 메오이제이션
  - 부모가 리렌더링 되더라도 props가 바뀌지 않으면 리렌더링 되지 않음

  ```javascript
  // 고차 컴포넌트 (HOC, Higher Order Component)
  // 함수를 인수로 받아 추가기능을 덧붙여 새로운 컴포넌트를 반환하는 메소드
  // 고차 컴포넌트(HOC) 관련 아티클
  // https://patterns-dev-kr.github.io/design-patterns/hoc-pattern/
  export default memo(TodoItem, (prevProps, nextprops) => {
    // 반환값에따라 Props가 바뀌었는지 바뀌지 않았는지 판단
    // true => props가 바뀌지 않음 => 리렌더링 x
    // false => props가 변경됨 => 리렌더링
    if (prevProps.id !== nextprops.id) return false;
    if (prevProps.isDone !== nextprops.isDone) return false;
    if (prevProps.content !== nextprops.content) return false;
    if (prevProps.date !== nextprops.date) return false;
    return true;
  });
  // 왜 memo를 해도 리렌더링이 되냐?
  // -> onUpdate, onDelete함수가 리렌더링되면서 새롭게 만들어지기 때문 = 함수가 새로 생성되면 주소값이 변경되기 때문에 다른 함수로 판단됨
  // -> memo는 props 변경을 얕은 비교로 판단 (===)
  // -> Props가 변경된 것이기 때문에 리렌더링

  // 해결방법 1: memo에 콜백함수로 최적화기능 커스터마이징
  // 해결방법 2: useCallback으로 app.jsx에서 onCreate, onUpdate함수를 메모이제이션
  ```

- 컴포넌트 내부의 불필요한 함수 재생성 방지
  - useCallback
  ```javascript
  const updateTodo = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);
  ```

## 언제하는가, 어떤 것을 하는가

- 언제하는가
  - 기능완성 -> 최적화

- 어떤 것을 최적화 대상이 되는가
  - 꼭 최적화가 필요할 것 같은 연산, 함수, 컴포넌트들
  - 왜?
  - memo와 같은 최적화 함수들도 연산을 필요로 함(props 비교, 메모리에 결과값 저장 등)
  - 단순한 것들을 최적화 할 경우 리렌더링 하는 속도가 빠르거나 비슷할 수도 있다

참고 : 아티클 "When to use useMemo, useCallback"
https://goongoguma.github.io/2021/04/26/When-to-useMemo-and-useCallback/
