import { memo, useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchContext } from "../../../App";

// const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem" id={id}>
      <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

export default memo(TodoItem);

// // 고차 컴포넌트 (HOC, Higher Order Component)
// // 함수를 인수로 받아 추가기능을 덧붙여 새로운 컴포넌트를 반환하는 메소드
// // 고차 컴포넌트(HOC) 관련 아티클
// // https://patterns-dev-kr.github.io/design-patterns/hoc-pattern/
// export default memo(TodoItem, (prevProps, nextprops) => {
//   // 반환값에따라 Props가 바뀌었는지 바뀌지 않았는지 판단
//   // true => props가 바뀌지 않음 => 리렌더링 x
//   // false => props가 변경됨 => 리렌더링
//   if (prevProps.id !== nextprops.id) return false;
//   if (prevProps.isDone !== nextprops.isDone) return false;
//   if (prevProps.content !== nextprops.content) return false;
//   if (prevProps.date !== nextprops.date) return false;
//   return true;
// });
// // 왜 memo를 해도 리렌더링이 되냐?
// // -> onUpdate, onDelete함수가 리렌더링되면서 새롭게 만들어지기 때문 = 함수가 새로 생성되면 주소값이 변경되기 때문에 다른 함수로 판단됨
// // -> memo는 props 변경을 얕은 비교로 판단 (===)
// // -> Props가 변경된 것이기 때문에 리렌더링

// // 해결방법 1: memo에 콜백함수로 최적화기능 커스터마이징
// // 해결방법 2: useCallback으로 app.jsx에서 onCreate, onUpdate함수를 메모이제이션
