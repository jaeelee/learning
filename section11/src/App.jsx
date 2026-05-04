import "./App.css";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import { createContext, useMemo, useRef } from "react";
import Counter from "./components/Counter";
import { useReducer } from "react";
import { useCallback } from "react";

// interface todo{
//   id: number;
//   isDone: Boolean;
//   content: string;
//   date: Date;
// }

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((todo) =>
        todo.id === action.targetId ? { ...todo, isDone: !todo.isDone } : todo,
      );
    case "DELETE":
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
}

// export const TodoContext = createContext(); // 전역으로 생성하는 이유 : APP안에 선언해도 문제는 없으나 app컴포넌트가 리렌더링되면 새로 생성되기 때문에 전역으로 생성하는 것이 좋음
export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

function App() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const createTodo = useCallback((content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  }, []);

  const updateTodo = useCallback((targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  }, []);

  // const deleteTodo = (targetId) => {
  //   dispatch({
  //     type: "DELETE",
  //     targetId: targetId,
  //   });
  // };

  const deleteTodo = useCallback(
    (targetId) => {
      dispatch({
        type: "DELETE",
        targetId: targetId,
      });
    },
    [], // mount 됐을 때 한번만 생성
  );

  // const [todos, setTodos] = useState([]);
  // const idRef = useRef(0);

  // const createTodo = (content) => {
  //   const newTodo = {
  //     id: idRef.current++,
  //     isDone: false,
  //     content: content,
  //     date: new Date().getTime(),
  //   };

  //   setTodos((prev) => [newTodo, ...prev]);
  // };

  // const updateTodo = (targetId) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
  //     ),
  //   );
  // };

  // const deleteTodo = (targetId) => {
  //   setTodos(todos.filter((todo) => todo.id !== targetId));
  // };

  const memoizedDispatch = useMemo(() => {
    return { onCreate: createTodo, onUpdate: updateTodo, onDelete: deleteTodo };
  }, []);

  return (
    <main className="App">
      <Counter />
      <Header />
      <TodoStateContext.Provider value={todos}>
        <TodoDispatchContext.Provider value={memoizedDispatch}>
          {/* <TodoContext.Provider
        value={{ todos, createTodo, updateTodo, deleteTodo }}
      > */}
          {/* <Editor onCreate={createTodo} /> */}
          <Editor />
          {/* <List todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} /> */}
          <List />
          {/* </TodoContext.Provider> */}
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </main>
  );
}

export default App;
