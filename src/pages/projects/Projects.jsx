import React from "react";
import ProjectsStyled, { GridContainer } from "./Projects.styled";
import { useContext } from "react";
import { Context } from "../../context/Context";
import ProjectCard from "../../components/project-card/ProjectCard";
import data from "../../db";

const Projects = () => {
  const { isMinimized } = useContext(Context);
  // console.log(data);
  return (
    <ProjectsStyled isMinimized={isMinimized}>
      <h1 className="heading">Projects</h1>
      <h2 className="sub-heading">Spotlight</h2>
      <GridContainer>
        {data?.map(
          (project) =>
            project.spotlight && (
              <ProjectCard key={project.id} project={project} />
            )
        )}
      </GridContainer>
      <h2 className="sub-heading">React Projects</h2>
      <GridContainer>
        {data?.map(
          (project) =>
            project.tech.includes("React.js") && (
              <ProjectCard key={project.id} project={project} />
            )
        )}
      </GridContainer>
      <h2 className="sub-heading">Other Projects</h2>
      <GridContainer>
        {data?.map(
          (project) =>
            project.tech.includes("React.js") || (
              <ProjectCard key={project.id} project={project} />
            )
        )}
      </GridContainer>
    </ProjectsStyled>
  );
};

export default Projects;
