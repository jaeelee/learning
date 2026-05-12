import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import { createContext, useEffect, useReducer, useRef, useState } from "react";

function reducer(state, action) {
  let nextState;

  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      nextState = [action.data, ...state];
      break;
    }
    case "UPDATE": {
      nextState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item,
      );
      break;
    }
    case "DELETE": {
      nextState = state.filter((item) => String(item.id) !== String(action.id));
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("Account", JSON.stringify(nextState));
  return nextState;
}

//  interface Account{
//    id: number,
//    createdDate: Date,
//    emotionId: Number,
//    content: text,
//  }

export const AccountStateContext = createContext();
export const AccountDispatchContext = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = ({ createdDate, content, price, priceType, category }) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        content,
        price,
        priceType,
        category,
      },
    });
  };

  const onUpdate = ({
    id,
    createdDate,
    content,
    price,
    priceType,
    category,
  }) => {
    dispatch({
      type: "UPDATE",
      data: { id, createdDate, content, price, priceType, category },
    });
  };

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  useEffect(() => {
    const storedData = localStorage.getItem("Account");
    if (!storedData) {
      setIsLoading(false);
      return;
    }
    const parsedData = JSON.parse(storedData);
    if (!Array.isArray(parsedData)) {
      setIsLoading(false);
      return;
    }

    let maxId = 0;
    parsedData.forEach((item) => {
      if (Number(item.id) > maxId) {
        maxId = Number(item.id);
      }
    });

    idRef.current = maxId + 1;

    dispatch({
      type: "INIT",
      data: parsedData,
    });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>데이터 로딩중입니다...</div>;
  }
  return (
    <AccountStateContext.Provider value={data}>
      <AccountDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-transaction" element={<New />} />
          <Route path="/edit-transaction/:id" element={<Edit />} />
        </Routes>
      </AccountDispatchContext.Provider>
    </AccountStateContext.Provider>
  );
}

export default App;
