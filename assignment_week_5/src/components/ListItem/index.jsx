import { useNavigate } from "react-router-dom";
import { getFormatedDate } from "../../util/date";
import Button from "../Button";
import "./ListItem.css";
import { PRICE_TYPE_INCOME } from "../../constants/constants";
import { useContext } from "react";
import { AccountDispatchContext } from "../../App";

const ListItem = ({ id, category, content, price, priceType, createdDate }) => {
  const nav = useNavigate();
  const { onDelete } = useContext(AccountDispatchContext);

  const onDeleteItem = () => {
    onDelete(id);
  };

  return (
    <div className="ListItem">
      <div className="wrapper">
        <div className="category">{category}</div>
        <div className="content">{content}</div>
      </div>
      <div className="wrapper">
        <div className={`price_${priceType}`}>
          {priceType === PRICE_TYPE_INCOME ? "+ " : "- "}
          {price}원
        </div>
        <div className="date">{getFormatedDate(new Date(createdDate))}</div>
        <div className="button_wrapper">
          <Button
            className="edit_button"
            text={"수정"}
            onClick={() => nav(`/edit-transaction/${id}`)}
          />
          <Button
            onClick={onDeleteItem}
            className="delete_button"
            text={"삭제"}
          />
        </div>
      </div>
    </div>
  );
};

export default ListItem;
