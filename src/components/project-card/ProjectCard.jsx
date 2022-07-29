import ProjectCardStyled from "./ProjectCard.styled";
import "./projectCard.css";
import { AiFillGithub } from "react-icons/ai";

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardStyled>
      <h2 className="project-card-heading">{project.name}</h2>
      <img
        className="project-card-img"
        src={project.screenshot}
        alt="project-img"
        style={{ width: "525px", height: "200px" }}
      />
      <div className="project-info">
        <p className="project-desc">
          {project.desc.length > 100
            ? project.desc.substring(0, 150) + "..."
            : project.desc}
        </p>
        <div className="project-tech-div">
          <p>Tech used:</p>
          <p className="project-tech">
            {project.tech?.map((tech) => ` ${tech},`)}
          </p>
        </div>
        <div className="project-github-div">
          <p>To check the source code =&gt;</p>
          <a className="contact-link" href={project.github} target="_blank">
            <AiFillGithub className="project-github-icon" />
          </a>
        </div>
        <a className="live-site-link" href={project.liveSite} target="_blank">
          Click here for the live site!
        </a>
      </div>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
