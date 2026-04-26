const CurrencyInput = ({ name, value, onChange }) => {
  return (
    <div>
      {name}:
      <input name={name} type="number" value={value} onChange={onChange} />
    </div>
  );
};
export default CurrencyInput;
