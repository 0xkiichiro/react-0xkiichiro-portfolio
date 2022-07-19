import NavbarStyled, { LinkStyled, Tab } from "./Navbar.styled";
import Home from "../../pages/home/Home";
import AboutMe from "../../pages/about-me/AboutMe";
import Projects from "../../pages/projects/Projects";
import Contact from "../../pages/contact/Contact";
import { MdOutlineRemoveCircle } from "react-icons/md";
import "./navbar.css";

const Navbar = () => {
  return (
    <NavbarStyled>
      <Tab className="active">
        <LinkStyled to="/" element={<Home />}>
          home
        </LinkStyled>
        <MdOutlineRemoveCircle className="tab-icon" />
      </Tab>
      <Tab>
        <LinkStyled to="about-me" element={<AboutMe />}>
          about-me
        </LinkStyled>
        <MdOutlineRemoveCircle className="tab-icon" />
      </Tab>
      <Tab>
        <LinkStyled to="projects" element={<Projects />}>
          projects
        </LinkStyled>
        <MdOutlineRemoveCircle className="tab-icon" />
      </Tab>
      <Tab>
        <LinkStyled to="contact" element={<Contact />}>
          contact
        </LinkStyled>
        <MdOutlineRemoveCircle className="tab-icon" />
      </Tab>
    </NavbarStyled>
  );
};

export default Navbar;
