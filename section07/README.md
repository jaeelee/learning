# section07

# 라이프사이클

= 생애주기
탄생으로부터 죽음까지의 단계

## 리액트 컴포넌트의 라이프사이클

mount -> update -> unMount

- mount
  - 탄생
  - 컴포넌트가 탄생하는 순간
  - 화면에 처음 렌더링 되는 순간

- update
  - 변화
  - 컴포넌트가 다시 렌더린되는 순간
  - 리렌더링 될 때를 의미

- unMount
  - 죽음
  - 컴포넌트가 화면에서 사라지는 순간
  - 렌더링에서 제외되는 순간을 의미

### 라이프 사이클 제어

- 라이프 사이클의 단계별로 컴포넌트가 각각 다른 작업을 하도록 하는 것

## useEffect

- 리액트 컴포넌트의 사이드 이펙트를 제어하는 react hooks

### 사이드이펙트

- 부수적인 효과
- 파생되는 표과
  -> 컴포넌트 동작에 따라 파생되는 여러 효과

```typescript
useEffect(() => {
  console.log(`count:${count}`);
}, [count]); // 의존성 배열 (deps, dependency array)
// 의존성 배열에 있는 값이 바뀌게 되면 사이드 이펙트로서 첫번째 인수에있는 콜백함수를 실행시킨다.

const handleClick = (value) => {
  setCount((prev) => prev + value);
  console.log(`count: ${count}`); // useEffect가 아닌 여기 넣으면 안되는 이유는 ?
  // 상태 변화 함수는 비동기로 동작한다 -> 현재 handleClick에서는 setCount함수가 호출만 된거지 완료되지 않았을 것이다.
  // 여기서의 count 값은 변경되기 이전 상태값이 출력되게 된다.
};
```

```typescript
// 1, 마운트(: 탄생) 제어하기
useEffect(() => {
  console.log("mount");
}, []); // deps에 빈배열일 경우 첫 mount 일때만 실행 됨

// 2. 업데이트(: 변화, 리렌더링) 제어하기
useEffect(() => {
  console.log("update");
}); // deps 생략

// 3. 언마둔트(: 죽음) 제어하기
useEffect(() => {
  // 클린업, 정리함수 -> useEffect가 끝날 때 실행됨. 즉, unmount될 때 실행
  return () => {
    console.log("unmount");
  };
}, []);
```
