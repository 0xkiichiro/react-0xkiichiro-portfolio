import AboutMeStyled from "./AboutMe.styled";
import Header from "../../components/header/Header";
import { useContext } from "react";
import { Context } from "../../context/Context";

const AboutMe = () => {
  const { isMinimized } = useContext(Context);

  return (
    <AboutMeStyled isMinimized={isMinimized}>
      <h1 className="heading">About me</h1>
      <Header />
    </AboutMeStyled>
  );
};

export default AboutMe;
