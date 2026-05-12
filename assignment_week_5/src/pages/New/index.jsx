import { useContext } from "react";
import Editor from "../../components/Editor";
import Header from "../../components/Header";
import "./New.css";
import { AccountDispatchContext } from "../../App";

const New = () => {
  const { onCreate } = useContext(AccountDispatchContext);

  const onSubmit = (data) => {
    onCreate({ ...data });
  };

  return (
    <div>
      <Header title="새로운 기록"></Header>
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
