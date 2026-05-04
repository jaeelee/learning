# conotext

- 컴포넌트 간의 데이터를 전달하는 또다른 방법
- 데이터를 보관하는 객체
- props가 가진 단점을 해결할 수 있음 -> Props Drilling

- Props Drilling
  - 부모 -> 자식으로만 데이터 전달 가능
  - 여러단계를 건너서 데이터를 전달해줘야하는 경우가 생김
  - 중간다리가 많아지면 불편함이 생긴다

## Context사용하기

```javascript
// 컨텍스트 생성
export const TodoContext = createContext(); // 전역으로 생성하는 이유 : APP안에 선언해도 문제는 없으나 app컴포넌트가 리렌더링되면 새로 생성되기 때문에 전역으로 생성하는 것이 좋음

// Provider : 컨텍스트가 공급할 데이터를 설정하거나 컨텍스트의 데이터를 공급받을 컴포넌트를 설정하기 위한 컴포넌트
// value에 공급할 데이터를 작성
// 하위의 모든 컴포넌트에 컨텍스트로 넣어준 데이터를 공급받아 사용 가능
function App() {
  return (
    <TodoContext.Provider value={}>
      <Editor/>
      <List/>
    </TodoContext.Provider>
    )
}

// useContext 훅 사용
// 인수로 받아온 컨텍스트로 부터 데이터를 받아옴
function TodoItem(){
  const { updateTodo: onUpdate, deleteTodo: onDelete } = // 값이 변경되면 해당 객체 자체가 새롭게 생성
    useContext(TodoContext);

}
```

## context 최적화 풀리는 문제

- Provider도 컴포넌트임
  -> props가 바뀌면 리렌더링이 된다
  -> 추가, 삭제, 변경 시 todosState가 변경되며 value로 전달한 객체가 다시 생성됨
  -> Props가 변경되었으니 Provider가 리렌더링
  -> 하위 컴포넌트들도 리렌더링 발생
  -> memo를 썼는데 왜??
  -> useContext로 가져온 객체 자체가 새롭게 생성됨
  -> memo를 사용하더라도 useContext를 통해 가져온 데이터들이 변경되면 props와 동일히게 리렌더링이 발생

- 해결 방법
  -> todoContext를 분리하기
  -> 변경될 수 있는 값 / 변경되지 않는 값
