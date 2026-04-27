const Controller = ({ handleClick }) => {
  return (
    <div>
      <button onClick={() => handleClick(-1)}>-1</button>
      <button onClick={() => handleClick(-10)}>-10</button>
      <button onClick={() => handleClick(-100)}>-100</button>
      <button onClick={() => handleClick(+100)}>+100</button>
      <button onClick={() => handleClick(10)}>+10</button>
      <button onClick={() => handleClick(1)}>+1</button>
    </div>
  );
};

export default Controller;
