import React from "react";
import ContactStyled from "./Contact.styled";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Contact = () => {
  const { isMinimized } = useContext(Context);
  return (
    <ContactStyled isMinimized={isMinimized}>
      <h1>Contact Me</h1>
    </ContactStyled>
  );
};

export default Contact;
