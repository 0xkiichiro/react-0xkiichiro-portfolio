import React from "react";
import ProjectsStyled, { GridContainer } from "./Projects.styled";
import { useContext } from "react";
import { Context } from "../../context/Context";
import ProjectCard from "../../components/project-card/ProjectCard";

const Projects = () => {
  const { isMinimized } = useContext(Context);
  return (
    <ProjectsStyled isMinimized={isMinimized}>
      <h1 className="heading">Projects</h1>
      <GridContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </GridContainer>
    </ProjectsStyled>
  );
};

export default Projects;
