import { createContext, useCallback, useMemo, useReducer, useRef } from "react";
import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "DELETE":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}
function App() {
  const [data, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = useCallback((name, contact) => {
    dispatch({
      type: "CREATE",
      data: { id: idRef.current++, name, contact },
    });
  }, []);

  const onDelete = useCallback((id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  }, []);

  const memoizedDispatch = useMemo(() => {
    return { onCreate, onDelete };
  }, [onCreate, onDelete]);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={data}>
        <ContactDispatchContext.Provider value={memoizedDispatch}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
