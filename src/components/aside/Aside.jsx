import AsideStyled, { Li, Ul, Bar, LinkStyled } from "./Aside.styled";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./aside.css";

const Aside = () => {
  const { isMinimized, handleMinimized, handleLinkClick } = useContext(Context);

  return (
    <AsideStyled isMinimized={isMinimized}>
      <h4 className="aside-heading">Explorer</h4>
      <Bar />
      <Ul>
        <Li>
          <LinkStyled
            className="aside-link"
            to="/"
            id="home"
            onClick={(e) => handleLinkClick(e)}
          >
            <IoIosArrowForward className="aside-icon" />
            home
          </LinkStyled>
        </Li>
        <Li>
          <LinkStyled
            className="aside-link"
            to="about-me"
            id="about-me"
            onClick={(e) => handleLinkClick(e)}
          >
            <IoIosArrowForward className="aside-icon" />
            about-me
          </LinkStyled>
        </Li>
        <Li>
          <LinkStyled
            className="aside-link"
            to="projects"
            id="projects"
            onClick={(e) => handleLinkClick(e)}
          >
            <IoIosArrowForward className="aside-icon" />
            projects
          </LinkStyled>
        </Li>
        <Li>
          <LinkStyled
            className="aside-link"
            to="contact"
            id="contact"
            onClick={(e) => handleLinkClick(e)}
          >
            <IoIosArrowForward className="aside-icon" />
            contact
          </LinkStyled>
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
