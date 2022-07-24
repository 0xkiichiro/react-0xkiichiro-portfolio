import ProjectCardStyled from "./ProjectCard.styled";

const ProjectCard = () => {
  return (
    <ProjectCardStyled>
      <h2>Project Name</h2>
      <img src="https://picsum.photos/525/250" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        laborum numquam suscipit repudiandae harum est doloremque aliquid
        expedita omnis quasi!
      </p>
    </ProjectCardStyled>
  );
};

export default ProjectCard;
