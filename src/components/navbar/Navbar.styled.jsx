import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarStyled = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  margin-left: 256px;
  background-color: #383838;
`;

export const Tab = styled.div`
  padding: 0.5rem 1rem;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
  background-color: #383838;
  border-right: 1px solid gray;
  min-width: 10%;
  /* margin-top: 0.5rem; */
  /* &:active {
    background-color: #1e1e1e;
  } */
`;

export const LinkStyled = styled(Link)`
  color: #a4adb4;
  text-decoration: none;
`;

export default NavbarStyled;
