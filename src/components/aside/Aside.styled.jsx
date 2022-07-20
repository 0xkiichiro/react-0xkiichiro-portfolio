import styled from "styled-components";

const AsideStyled = styled.div`
  position: relative;
  height: 100vh;
  padding: 1rem 0;
  padding-left: 1rem;
  /* float: left; */
  background-color: #1e1e1e;
  border-right: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: ${(props) =>
    props.isMinimized &&
    "rgba(255, 255, 255, 0.15) 0px 0px 25px, rgba(255, 255, 255, 0.05) 0px 5px 10px"};
  left: ${(props) => (props.isMinimized ? "-230px" : "0%")};
  min-width: 256px;
  transition: 0.45s ease-in-out;
`;

export const Bar = styled.div`
  height: 2px;
  background-color: hotpink;
  margin-bottom: 0.5rem;
`;

export const Li = styled.li`
  text-decoration: none;
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

export const Ul = styled.ul`
  text-decoration: none;
  list-style: none;
`;

export default AsideStyled;
