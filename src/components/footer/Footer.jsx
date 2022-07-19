import FooterStyled from "./Footer.styled";

const Footer = () => {
  return (
    <FooterStyled>
      created by{" "}
      <span
        style={{
          color: "hotpink",
        }}
      >
        0xkiichiro
      </span>
      <br />
      copyright {new Date().getFullYear()}
    </FooterStyled>
  );
};

export default Footer;
