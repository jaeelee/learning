import { useState } from "react";
import "./App.css";
import CurrencyInput from "./components/CurrencyInput";

const EXCHANGE_RATE = 1450;
function App() {
  const [exchange, setExchange] = useState({ krw: 0, usd: 0 });

  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (e.target.name === "krw") {
      setExchange({ krw: value, usd: value / EXCHANGE_RATE });
    } else if (e.target.name === "usd") {
      setExchange({ krw: value * EXCHANGE_RATE, usd: value });
    }
  };

  return (
    <main>
      <h1>환율 변환기 (KRW-USD)</h1>
      <CurrencyInput
        name={"krw"}
        value={exchange.krw}
        onChange={handleChange}
      />
      <CurrencyInput
        name={"usd"}
        value={exchange.usd}
        onChange={handleChange}
      />
    </main>
  );
}

export default App;
