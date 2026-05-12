import { useContext } from "react";
import Editor from "../../components/Editor";
import Header from "../../components/Header";
import "./Edit.css";
import { AccountDispatchContext, AccountStateContext } from "../../App";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { onUpdate } = useContext(AccountDispatchContext);
  const data = useContext(AccountStateContext);
  const params = useParams();

  const onSubmit = (data) => {
    onUpdate({ id: params.id, ...data });
  };
  return (
    <div>
      <Header title="기록 수정하기" />
      <Editor
        data={data.find((item) => String(item.id) === String(params.id))}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Edit;
