import "./Button.css";

const Button = ({ text, onClick, type = "DEFAULT" }) => {
  return (
    <button className={`Button Button_${type}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
