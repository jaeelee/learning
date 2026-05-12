import { useNavigate } from "react-router-dom";
import {
  CATEGORY,
  PRICE_TYPE_EXPENSE,
  PRICE_TYPE_INCOME,
  TYPE_NEGAVITE,
  TYPE_POSITIVE,
} from "../../constants/constants";
import Button from "../Button";
import "./Editor.css";
import { useRef, useState } from "react";
import { getFormatedDate } from "../../util/date";

const Editor = ({ onSubmit, data }) => {
  const nav = useNavigate();
  const [newData, setNewData] = useState(
    data
      ? { ...data, createdDate: getFormatedDate(new Date(data?.createdDate)) }
      : {
          priceType: PRICE_TYPE_EXPENSE,
          category: CATEGORY[0].value,
          content: "",
          price: "",
          createdDate: getFormatedDate(new Date()),
        },
  );
  const inputRef = useRef({});
  console.log("editor", data);

  const onSave = () => {
    const emptyField = Object.keys(newData).find((key) => {
      const value = newData[key];
      return !value || (typeof value === "string" && value.trim() === "");
    });

    if (emptyField) {
      inputRef.current[emptyField]?.focus();
      return;
    }

    onSubmit({
      ...newData,
      createdDate: new Date(newData.createdDate).getTime(),
    });
    nav("/");
  };

  const onChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  return (
    <div className="Editor">
      <section>
        <h4>분류</h4>
        <select
          ref={(e) => (inputRef.current["priceType"] = e)}
          name="priceType"
          value={newData.priceType}
          onChange={onChange}
        >
          <option value={PRICE_TYPE_EXPENSE}>지출</option>
          <option value={PRICE_TYPE_INCOME}>수입</option>
        </select>
      </section>
      <section>
        <h4>지출/수입 이름</h4>
        <input
          ref={(e) => (inputRef.current["content"] = e)}
          placeholder="지출 & 수입 이름을 입력하세요..."
          name="content"
          value={newData.content}
          onChange={onChange}
        />
      </section>
      <section>
        <h4>지출/수입 금액</h4>
        <input
          ref={(e) => (inputRef.current["price"] = e)}
          placeholder="금액을 입력하세요"
          name="price"
          value={newData.price}
          onChange={onChange}
          type="text"
          inputMode="numeric"
        />
      </section>
      <section>
        <h4>카테고리</h4>
        <select
          ref={(e) => (inputRef.current["category"] = e)}
          name="category"
          value={newData.category}
          onChange={onChange}
        >
          {CATEGORY.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </section>
      <section>
        <h4>날짜</h4>
        <input
          ref={(e) => (inputRef.current["createdDate"] = e)}
          type="date"
          name="createdDate"
          value={String(newData.createdDate).replaceAll(".", "-")}
          onChange={onChange}
        />
      </section>
      <section className="button_wrapper">
        <Button onClick={onSave} text="저장" type={TYPE_POSITIVE} />
        <Button onClick={() => nav(-1)} text="취소" type={TYPE_NEGAVITE} />
      </section>
    </div>
  );
};

export default Editor;
