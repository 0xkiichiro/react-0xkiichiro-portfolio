import AsideStyled, { Li, Ul, Bar } from "./Aside.styled";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./aside.css";

const Aside = () => {
  const { isMinimized, handleMinimized, handleLinkClick } = useContext(Context);

  return (
    <AsideStyled isMinimized={isMinimized}>
      <h4>Explorer</h4>
      <Bar />
      <Ul>
        <Li>
          <IoIosArrowForward className="aside-icon" />
          <Link
            className="aside-link"
            to="/"
            id="home"
            onClick={(e) => handleLinkClick(e)}
          >
            home
          </Link>
        </Li>
        <Li>
          <IoIosArrowForward className="aside-icon" />
          <Link
            className="aside-link"
            to="about-me"
            id="about-me"
            onClick={(e) => handleLinkClick(e)}
          >
            about-me
          </Link>
        </Li>
        <Li>
          <IoIosArrowForward className="aside-icon" />
          <Link
            className="aside-link"
            to="projects"
            id="projects"
            onClick={(e) => handleLinkClick(e)}
          >
            projects
          </Link>
        </Li>
        <Li>
          <IoIosArrowForward className="aside-icon" />
          <Link
            className="aside-link"
            to="contact"
            id="contact"
            onClick={(e) => handleLinkClick(e)}
          >
            contact
          </Link>
        </Li>
      </Ul>
      {!isMinimized ? (
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
