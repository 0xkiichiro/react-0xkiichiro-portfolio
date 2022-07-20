import AsideStyled, { Li, Ul, Bar } from "./Aside.styled";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import "./aside.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Aside = () => {
  const { isMinimized, handleMinimized } = useContext(Context);

  return (
    <AsideStyled isMinimized={isMinimized}>
      <h4>Explorer</h4>
      <Bar />
      <Ul>
        <Li>
          <IoIosArrowForward className="aside-icon" />
          <Link className="aside-link" to="/">
            home
          </Link>
        </Li>
        <Li>
          <IoIosArrowForward className="aside-icon" />
          <Link className="aside-link" to="about-me">
            about-me
          </Link>
        </Li>
        <Li>
          <IoIosArrowForward className="aside-icon" />
          <Link className="aside-link" to="projects">
            projects
          </Link>
        </Li>
        <Li>
          <IoIosArrowForward className="aside-icon" />
          <Link className="aside-link" to="contact">
            contact
          </Link>
        </Li>
      </Ul>
      {isMinimized ? (
        <IoIosArrowBack className="minimize-icon" onClick={handleMinimized} />
      ) : (
        <IoIosArrowForward
          className="minimize-icon"
          onClick={handleMinimized}
        />
      )}
    </AsideStyled>
  );
};

export default Aside;
