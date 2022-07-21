import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarStyled = styled.nav`
  position: absolute;
  width: ${(props) => (props.isMinimized ? "100% -30px" : "100% - 256px")};
  display: flex;
  margin-left: ${(props) => (props.isMinimized ? "25px" : "256px")};
  background-color: #181818;
  transition: 0.45s ease-in-out;
`;

export const Tab = styled.div`
  padding: 0.5rem 0.5rem;
  border-top-right-radius: 0.75rem;
  background-color: #181818;
  border-right: 1px solid rgba(255, 255, 255, 0.35);
  width: 128px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.35);
`;

export const LinkStyled = styled(Link)`
  color: #a4adb4;
  text-decoration: none;
  width: 100%;
`;

export default NavbarStyled;
