import React from "react";
import ContactStyled from "./Contact.styled";
import { useContext } from "react";
import { Context } from "../../context/Context";
import Form from "../../components/form/Form";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./contact.css";

const Contact = () => {
  const { isMinimized } = useContext(Context);
  return (
    <ContactStyled isMinimized={isMinimized}>
      <h1 className="heading">Contact Me</h1>
      <p className="paragraph">You can send me an email.</p>
      <Form />
      <p className="paragraph">or reach me from..</p>
      <div className="contact-icons-container">
        <a
          className="contact-link"
          href="https://github.com/0xkiichiro"
          target="_blank"
        >
          <AiFillGithub className="contact-icon" />
        </a>
        <a
          className="contact-link"
          href="https://www.linkedin.com/in/barisaytimur/"
          target="_blank"
        >
          <AiFillLinkedin className="contact-icon" />
        </a>
        <a
          className="contact-link"
          href="https://twitter.com/0xkiichiro"
          target="_blank"
        >
          <AiOutlineTwitter className="contact-icon" />
        </a>
      </div>
    </ContactStyled>
  );
};

export default Contact;
