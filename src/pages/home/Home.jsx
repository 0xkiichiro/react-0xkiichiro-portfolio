import HomeStyled from "./Home.styled";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Home = () => {
  const { isMinimized } = useContext(Context);
  return (
    <HomeStyled isMinimized={isMinimized}>
      <h1 className="heading">0xkiichiro's Portfolio</h1>
      <p className="paragraph">
        Welcome to my personal website, use the bar on the left to navigate.
      </p>
    </HomeStyled>
  );
};

export default Home;
