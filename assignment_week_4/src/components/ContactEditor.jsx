import { useContext, useRef, useState } from "react";
import "./ContactEditor.css";
import { ContactDispatchContext } from "../App";

export default function ContactEditor() {
  const { onCreate } = useContext(ContactDispatchContext);
  const [contactInfo, setContactInfo] = useState({ name: "", contact: "" });
  const nameInputRef = useRef(null);
  const contactInputRef = useRef(null);

  const onChange = (e) => {
    console.log(e.target.name, e.target.value, contactInfo);
    setContactInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    if (contactInfo.name === "") {
      nameInputRef.current.focus();
      return;
    } else if (contactInfo.contact === "") {
      contactInputRef.current.focus();
      return;
    }
    onCreate(contactInfo.name, contactInfo.contact);
    setContactInfo({ name: "", contact: "" });
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) onSubmit();
  };

  return (
    <div className="ContactEditor">
      <div className="title">Add Contact</div>
      <div className="input_wrapper">
        <input
          name="name"
          ref={nameInputRef}
          value={contactInfo.name}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="name"
          placeholder="이름 ..."
          required
        />
        <input
          name="contact"
          ref={contactInputRef}
          value={contactInfo.contact}
          onChange={onChange}
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
