import { useContext } from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import ListItem from "../../components/ListItem";
import { TYPE_POSITIVE } from "../../constants/constants";
import "./Home.css";
import { AccountStateContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const list = useContext(AccountStateContext);
  const nav = useNavigate();

  console.log(list);
  return (
    <div className="Home">
      <Header
        title={"한입 가계부"}
        rightChild={
          <Button
            text={"+작성하기"}
            type={TYPE_POSITIVE}
            onClick={() => nav("/new-transaction")}
          />
        }
      />
      <section className="list_section">
        {Array.isArray(list) && list.length > 0
          ? list.map((item) => <ListItem key={item.id} {...item} />)
          : "리스트가 없습니다."}
      </section>
    </div>
  );
};

export default Home;
