import NavbarStyled, { LinkStyled, Tab } from "./Navbar.styled";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { useContext } from "react";
import { Context } from "../../context/Context";
import "./navbar.css";

const Navbar = () => {
  const { isMinimized, navArr, setNavArr, isActive, setIsActive } =
    useContext(Context);

  return (
    <NavbarStyled isMinimized={isMinimized}>
      {navArr.map((item) => (
        <Tab className={isActive === item && "active"} key={item}>
          <LinkStyled
            to={`/${item === "home" ? "" : item}`}
            onClick={() => setIsActive(item)}
          >
            {item}
          </LinkStyled>
          <div className="icon-div">
            <MdOutlineRemoveCircle
              className="tab-icon"
              onClick={() => setNavArr(navArr.filter((i) => i !== item && i))}
            />
          </div>
        </Tab>
      ))}
    </NavbarStyled>
  );
};

export default Navbar;
