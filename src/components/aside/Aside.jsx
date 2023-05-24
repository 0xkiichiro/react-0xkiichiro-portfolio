import AsideStyled, { Li, Ul, Bar, LinkStyled } from './Aside.styled';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import './aside.css';

const Aside = () => {
  const { isMinimized, handleMinimized, handleLinkClick } = useContext(Context);

  return (
    <AsideStyled isMinimized={isMinimized}>
      <h4 className="aside-heading">Explorer</h4>
      <Bar />
      <Ul>
        <Li>
          <IoIosArrowForward className="aside-icon" />
          <LinkStyled
            className="aside-link"
            to="/"
            id="home"
            onClick={(e) => handleLinkClick(e)}
          >
            home
          </LinkStyled>
        </Li>
        <Li>
          <IoIosArrowForward className="aside-icon" />
          <LinkStyled
            className="aside-link"
            to="about-me"
            id="about-me"
            onClick={(e) => handleLinkClick(e)}
          >
            about-me
          </LinkStyled>
        </Li>
        <Li>
          <IoIosArrowForward className="aside-icon" />
          <LinkStyled
            className="aside-link"
            to="projects"
            id="projects"
            onClick={(e) => handleLinkClick(e)}
          >
            projects
          </LinkStyled>
        </Li>
        <Li>
          <IoIosArrowForward className="aside-icon" />
          <LinkStyled
            className="aside-link"
            to="blog"
            id="blog"
            onClick={(e) => handleLinkClick(e)}
          >
            blog
          </LinkStyled>
        </Li>
        <Li>
          <IoIosArrowForward className="aside-icon" />
          <LinkStyled
            className="aside-link"
            to="contact"
            id="contact"
            onClick={(e) => handleLinkClick(e)}
          >
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
