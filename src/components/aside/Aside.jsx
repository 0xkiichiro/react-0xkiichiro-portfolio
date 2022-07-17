import AsideStyled from "./Aside.styled";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <AsideStyled>
      <h4>Explorer</h4>
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="projects">projects</Link>
        </li>
        <li>
          <Link to="contact">contact</Link>
        </li>
      </ul>
    </AsideStyled>
  );
};

export default Aside;
