import styled from "styled-components";

const ContactStyled = styled.div`
  position: absolute;
  top: 40px;
  left: ${(props) => (props.isMinimized ? "30px" : "256px")};
  padding: 2rem;
  transition: 0.45s ease-in-out;
`;

export default ContactStyled;
