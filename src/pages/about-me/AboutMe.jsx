import AboutMeStyled from "./AboutMe.styled";
import { useContext } from "react";
import { Context } from "../../context/Context";
import DivStyled from "../../components/div/Div.styled";
import "./aboutMe.css";

const AboutMe = () => {
  const { isMinimized } = useContext(Context);

  return (
    <AboutMeStyled isMinimized={isMinimized}>
      <h1 className="heading">About me</h1>
      <DivStyled>
        <main>
          <p>👋</p>
          <br />
          <p>
            I'm Baris Aytimur, also known as 0xkiichiro, a structural engineer
            that dipped his toes in business development and product engineering
            before starting a career in tech.
          </p>
          <br />
          <p>
            I'm a self-taught frontend developer. I've started my journey in
            early 22'.
          </p>
          <br />
          <p>
            I have working proficiency in GIT, HTML5, CSS3 and JS. Currently
            focused on learning React.
          </p>
          <br />
          <p>Born in 95', citizen of the 🌎, pronouns: he/him.</p>
        </main>
      </DivStyled>
      <h2 className="heading">Previous Experiences</h2>

      <DivStyled className="job-container">
        <h4>Product Engineer - Team Leader</h4>
        <h5>Neustrukt · Full-time</h5>
        <h6>Apr 2020 - Jul 2022</h6>
        <ul className="list">
          <li className="list-item">
            Designing prototypes for conceptualized new product ideas utilizing
            softwares such as Solidworks, Revit, AutoCAD.
          </li>
          <li className="list-item">
            Fabricating prototypes for testing. Testing products throughout the
            design process to troubleshoot any potential problems.
          </li>
          <li className="list-item">
            Manage project deadlines to achieve on-time documentation of product
            specifications and customer approval of sample submission.
          </li>
          <li className="list-item">
            Acting as technical advisor on different layers of the company
          </li>
        </ul>
      </DivStyled>
      <DivStyled className="job-container">
        <h4>Business Development Specialist</h4>
        <h5>Arma Global Trade · Full-time</h5>
        <h6>Oct 2018 - Apr 2020</h6>
        <ul className="list">
          <li className="list-item">
            Forming short, medium and long-term strategic plans regarding the
            company’s foreign expanding strategy with the GM and other managers.
          </li>
          <li className="list-item">
            Doing data analysis and creating reports reflecting supply and
            demand of certain goods in different areas.Correlating this
            information with the existing data the company has, to decide on the
            product and the market to penetrate.
          </li>
          <li className="list-item">
            Visiting different cities and meeting with sector leading suppliers
            to form a reliable supply chain. Using the prices and specification
            of different goods to acquire know-how to the company and writing
            reports to transfer this newly generated know-how to related bodies.
          </li>
          <li className="list-item">
            Becoming the representative of the company with different suppliers
            and managing the relations and on-going businesses with them.
            Visiting different countries (focused in Africa and Middle-East) for
            Business Intelligence.
          </li>
        </ul>
      </DivStyled>
      <h2 className="heading">Hobbies</h2>
      <DivStyled>
        I love trying new things! I enjoy challenging my mind and body in
        different activities.
        <br />
        <br />
        I feel myself best when listening and DJying music. I can listen
        anything from classical music to techno.
        <br />
        <br />
        I live with my 3 year old dog, Milou🐶. We take long walks around the
        city and try to do weekend getaways to the nearest beach.
        <br />
        <br />I enjoy following the latest trends in crypto and learning
        Solidity on the side for my hobby projects. Check out my nft project
        from{" "}
        <a
          className="link"
          href="https://opensea.io/collection/untitled-collection-72400436"
          target="_blank"
        >
          here
        </a>
      </DivStyled>
    </AboutMeStyled>
  );
};

export default AboutMe;
