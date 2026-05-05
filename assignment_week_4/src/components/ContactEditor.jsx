import { useContext, useRef, useState } from "react";
import "./ContactEditor.css";
import { ContactDispachContext } from "../App";

export default function ContactEditor() {
  const { onCreate } = useContext(ContactDispachContext);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const nameInputRef = useRef(null);
  const contactInputRef = useRef(null);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeContact = (e) => {
    setContact(e.target.value);
  };

  const onSubmit = () => {
    if (name === "") {
      nameInputRef.current.focus();
      return;
    } else if (contact === "") {
      contactInputRef.current.focus();
      return;
    }
    onCreate(name, contact);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) onSubmit();
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          ref={nameInputRef}
          value={name}
          onChange={onChangeName}
          onKeyDown={onKeyDown}
          className="name"
          placeholder="이름 ..."
          required
        />
        <input
          ref={contactInputRef}
          value={contact}
          onChange={onChangeContact}
          onKeyDown={onKeyDown}
          className="contact"
          placeholder="연락처(이메일) ..."
          required
        />
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  );
}
