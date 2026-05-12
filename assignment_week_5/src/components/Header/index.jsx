import "./Header.css";

const Header = ({ title, rightChild }) => {
  return (
    <header className="Header">
      <div className="title">{title}</div>
      <div>{rightChild}</div>
    </header>
  );
};

export default Header;
