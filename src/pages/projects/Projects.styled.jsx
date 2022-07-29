import styled from "styled-components";

const ProjectsStyled = styled.div`
  position: absolute;
  top: 40px;
  left: ${(props) => (props.isMinimized ? "30px" : "256px")};
  width: ${(props) =>
    props.isMinimized ? "calc(100% - 30px)" : "calc(100% - 256px)"};
  padding: 2rem;
  padding-bottom: 5rem;
  transition: 0.45s ease-in-out;
`;

export const GridContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 2rem 0;
  /* grid-gap: 32px 20px;
  grid-template-columns: repeat(4, 1fr); */
`;

export default ProjectsStyled;
