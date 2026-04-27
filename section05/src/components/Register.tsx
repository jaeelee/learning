import { useRef, useState } from "react";

// 간단한 회원가입 폼
export default function Register() {
  //   const [name, setName] = useState("");
  //   const [birth, setBirth] = useState("");
  //   const [conutry, setCountry] = useState("");
  const [userInfo, setUserInfo] = useState({
    name: "",
    birth: "",
    country: "",
  });
  const countRef = useRef(0);
  const inputRef = useRef(null);

  console.log("register 렌더링"); // refObj값을 변경시켜도 다시 실행되지 않음

  const onChangeUserInfo = (e) => {
    setUserInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = () => {
    if (userInfo.name === "") {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          placeholder="이름"
          name="name"
          value={userInfo.name}
          onChange={onChangeUserInfo}
        />
      </div>
      <div>
        <input
          type="date"
          placeholder="생년월일"
          name="birth"
          value={userInfo.birth}
          onChange={onChangeUserInfo}
        />
      </div>
      <div>
        <select
          name="country"
          value={userInfo.country}
          onChange={onChangeUserInfo}
        >
          <option value=""></option>
          <option value="KR">한국</option>
          <option value="US">미국</option>
          <option value="UK">영국</option>
        </select>
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
}
