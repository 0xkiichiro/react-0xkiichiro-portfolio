import styled from "styled-components";
import { Link } from "react-router-dom";

const AsideStyled = styled.div`
  position: fixed;
  height: 100vh;
  padding: 0.5rem 0;
  padding-left: 1rem;
  /* float: left; */
  background-color: #1e1e1e;
  border-right: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: ${(props) =>
    props.isMinimized &&
    "rgba(255, 255, 255, 0.25) 0px 0px 5px, rgba(255, 255, 255, 0.15) 0px 5px 10px"};
  left: ${(props) => (props.isMinimized ? "-230px" : "0%")};
  min-width: 256px;
  transition: 0.45s ease-in-out;
  z-index: 1;
  /* top: 0;
  left: 0; */
`;

export const Bar = styled.div`
  height: 2px;
  background-color: hotpink;
  margin-bottom: 0.5rem;
  //! check line below!
  margin-right: ${(props) => (props.isMinimized ? "2rem" : "1rem")};
`;

export const Li = styled.li`
  display: flex;
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
  width: ${(props) => (props.isMinimized ? "0px" : "240px")};
`;

export const Ul = styled.ul`
  text-decoration: none;
  list-style: none;
`;

export const LinkStyled = styled(Link)`
  color: #a4adb4;
  width: 100%;
`;

export default AsideStyled;
