import { memo, useContext } from "react";
import "./ContactItem.css";
import { ContactDispachContext } from "../App";

const ContactItem = ({ id, name, contact }) => {
  const { onDelete } = useContext(ContactDispachContext);

  return (
    <div className="ContactItem">
      <div className="name">{name}</div>
      <div className="contact">{contact}</div>
      <button onClick={() => onDelete(id)}>🗑️ Remove</button>
    </div>
  );
};

const MemoizedContactItem = memo(ContactItem);
export default MemoizedContactItem;
