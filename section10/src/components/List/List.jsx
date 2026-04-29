import { useState } from "react";
import TodoItem from "./TodoItem/TodoItem";
import "./List.css";
import { useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase()),
    );
  };

  const filteredTodos = getFilteredData();

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

  return (
    <div className="List">
      <h4>Todo List 🌱</h4>
      <div>
        <div>totalCount: {totalCount}</div>
        <div>donCount: {donCount}</div>
        <div>notDoneCount: {notDoneCount}</div>
      </div>
      <input
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={onChangeSearch}
      />
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};
export default List;
