import HomeStyled from "./Home.styled";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Home = () => {
  const { isMinimized } = useContext(Context);
  return (
    <HomeStyled isMinimized={isMinimized}>
      <h1>0xkiichiro Portfolio</h1>
    </HomeStyled>
  );
};

export default Home;
