import { useState, useContext } from "react";
import "./Editor.css";
import { useRef } from "react";
import { TodoDispatchContext } from "../../App";

// const Editor = ({ onCreate }) => {
const Editor = () => {
  const { onCreate } = useContext(TodoDispatchContext);
  const [content, setContent] = useState("");
  const inputRef = useRef(null);

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (content === "") {
      inputRef.current.focus();
      return;
    }

    onCreate(content);
    setContent("");
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) onSubmit();
  };

  return (
    <div className="Editor">
      <input
        ref={inputRef}
        placeholder="새로운 TODO..."
        value={content}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};
export default Editor;
