import NavbarStyled, { LinkStyled, Tab } from "./Navbar.styled";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./navbar.css";

const Navbar = () => {
  const { isMinimized, navArr, setNavArr } = useContext(Context);

  return (
    <NavbarStyled isMinimized={isMinimized}>
      {navArr.map((item) => (
        <Tab className="active">
          <LinkStyled to={`/${item === "home" ? "" : item}`}>{item}</LinkStyled>
          <MdOutlineRemoveCircle
            className="tab-icon"
            onClick={() => setNavArr(navArr.filter((i) => i !== item && i))}
          />
        </Tab>
      ))}
    </NavbarStyled>
  );
};

export default Navbar;
