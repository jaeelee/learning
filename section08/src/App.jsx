import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import { useRef } from "react";

// interface todo{
//   id: number;
//   isDone: Boolean;
//   content: string;
//   date: Date;
// }

function App() {
  const [todos, setTodos] = useState([]);
  const idRef = useRef(0);

  const createTodo = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };

    setTodos((prev) => [newTodo, ...prev]);
  };

  const updateTodo = (targetId) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
  };

  const deleteTodo = (targetId) => {
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <main className="App">
      <Header />
      <Editor onCreate={createTodo} />
      <List todos={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    </main>
  );
}

export default App;
