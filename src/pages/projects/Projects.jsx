import React from "react";
import ProjectsStyled from "./Projects.styled";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Projects = () => {
  const { isMinimized } = useContext(Context);
  return (
    <ProjectsStyled isMinimized={isMinimized}>
      <h1>Projects</h1>
    </ProjectsStyled>
  );
};

export default Projects;
