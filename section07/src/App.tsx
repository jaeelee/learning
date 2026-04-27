import { useEffect, useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    setCount((prev) => prev + value);
    console.log(`count: ${count}`); // useEffect가 아닌 여기 넣으면 안되는 이유는 ?
    // 상태 변화 함수는 비동기로 동작한다 -> 현재 handleClick에서는 setCount함수가 호출만 된거지 완료되지 않았을 것이다.
    // 여기서의 count 값은 변경되기 이전 상태값이 출력되게 된다.
  };

  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]); // 의존성 배열 (deps, dependency array)
  // 의존성 배열에 있는 값이 바뀌게 되면 사이드 이펙트로서 첫번째 인수에있는 콜백함수를 실행시킨다.

  // 1, 마운트(: 탄생) 제어하기
  useEffect(() => {
    console.log("mount");
  }, []); // deps에 빈배열일 경우 첫 mount 일때만 실행 됨

  // 2. 업데이트(: 변화, 리렌더링) 제어하기
  useEffect(() => {
    console.log("update");
  }); // deps 생략

  // 3. 언마운트(: 죽음) 제어하기
  // useEffect(() => {
  //   return () => {};
  // }, []);

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller handleClick={handleClick} />
      </section>
    </div>
  );
}

export default App;
