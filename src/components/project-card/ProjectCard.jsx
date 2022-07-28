import ProjectCardStyled from "./ProjectCard.styled";

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardStyled>
      <h2>{project.name}</h2>
      <img
        src={project.screenshot}
        alt=""
        style={{ width: "525px", height: "200px" }}
      />
      <p>{project.desc}</p>
      <p>{project.tech}</p>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
