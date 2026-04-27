import Header from "@/components/Header"; // -> vite에서는 확장자를 사용하지 않아도 되도록 설정 되어있어서 생략 가능
import Button from "@/components/Button";
import "./App.css";
import { useState } from "react";
import Register from "@/components/Register";

const Blub = () => {
  const [light, setLight] = useState("ON"); // [상태, 상태변화함수]
  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}
      <button onClick={() => setLight(light === "ON" ? "OFF" : "ON")}>
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};
const Counter = () => {
  const [count, setCount] = useState(0); // [상태, 상태변화함수]

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};
// 부모 컴포넌트
function App() {
  const buttonProps = {
    text: "메일",
  };
  console.log();

  return (
    <>
      <Header />
      <h1>안녕 리액트!</h1>
      <Button {...buttonProps} />
      <Button text="카페" />
      <Button text="블로그">
        <div>자식</div>
      </Button>
      <Blub />
      <Counter />
      <Register />
    </>
  );
}

export default App;
