import type React from "react";

export default function Button({
  text,
  color = "black",
  children,
}: {
  text: string;
  color?: string;
  children?: React.ReactNode;
}) {
  // 이벤트 핸들러
  const onClickButton = () => {
    console.log(text);
  };
  return (
    <button onClick={onClickButton}>
      {text}-{color}
      {children}
    </button>
  );
}
