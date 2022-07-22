import React from "react";
import ContactStyled from "./Contact.styled";
import { useContext } from "react";
import { Context } from "../../context/Context";
import Form from "../../components/form/Form";

const Contact = () => {
  const { isMinimized } = useContext(Context);
  return (
    <ContactStyled isMinimized={isMinimized}>
      <h1 className="heading">Contact Me</h1>
      <p className="paragraph">You can send me an email.</p>
      <Form />
      <p className="paragraph">or reach me from.</p>
    </ContactStyled>
  );
};

export default Contact;
