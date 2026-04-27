import { useEffect } from "react";

const Even = () => {
  // 3. 언마운트(: 죽음) 제어하기
  useEffect(() => {
    // 클린업, 정리함수 -> useEffect가 끝날 때 실행됨. 즉, unmount될 때 실행
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
