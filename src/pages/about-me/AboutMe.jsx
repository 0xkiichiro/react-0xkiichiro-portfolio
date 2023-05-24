import AboutMeStyled from './AboutMe.styled';
import { useContext } from 'react';
import { Context } from '../../context/Context';
import DivStyled from '../../components/div/Div.styled';
import './aboutMe.css';

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
            I'm Baris Aytimur, I make magic with code. Also known as 0xkiichiro,
            I'm a structural engineer that dipped his toes in business
            development and product engineering before starting a career in
            tech.
          </p>
          <br />
          <p>
            I'm a self-taught fullstack developer. I've started my journey in
            early 20'.
          </p>
          <br />
          <p>
            I have working proficiency with
            <ul style={{ marginLeft: '1.5rem' }}>
              <li>GIT</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li>React</li>
              <li>Vue</li>
              <li>SQL</li>
              <li>Python</li>
              <li>Django</li>
              <li>Docker</li>
            </ul>
          </p>
          <br />
          <p>Born in 95', citizen of the 🌎, pronouns: he/him.</p>
        </main>
      </DivStyled>
      <h2 className="heading">Current Position</h2>
      <DivStyled className="job-container">
        <h4>Project Manager</h4>
        <h5>innoscripta AG · Full-time</h5>
        <h6>Nov 2022 - Present · 7 mos</h6>
        <ul className="list">
          <li className="list-item">
            Managed a team of professionals, overseeing their tasks and ensuring
            project milestones were met.
          </li>
          <li className="list-item">
            Led data science projects, involving parsing, labeling, and
            extracting data for analysis and modeling.
          </li>
          <li className="list-item">
            Utilized Gephi & Tableau for data visualization and creating
            interactive dashboards.
          </li>
          <li className="list-item">
            Coordinated web scraping initiatives to gather relevant data from
            various online sources.
          </li>
          <li className="list-item">
            Implemented effective team management strategies to optimize
            productivity and collaboration.
          </li>
          <li className="list-item">
            Collaborated with cross-functional teams to define project scope,
            objectives, and deliverables.
          </li>
          <li className="list-item">
            Developed and monitored project schedules, ensuring timely
            completion of tasks and adherence to deadlines.
          </li>
          <li className="list-item">
            Managed project budgets, tracking expenses and allocating resources
            efficiently.
          </li>
          <li className="list-item">
            Identified and mitigated risks, proactively addressing potential
            issues to minimize project disruptions.
          </li>
          <li className="list-item">
            Facilitated effective communication among team members,
            stakeholders, and clients.
          </li>
          <li className="list-item">
            Ensured compliance with project requirements and quality standards.
          </li>
        </ul>
      </DivStyled>

      <h2 className="heading">Previous Experiences</h2>

      <DivStyled className="job-container">
        <h4>Frontend Developer</h4>
        <h5>Roket Works · Full-time</h5>
        <h6>Jun 2022 - Nov 2022 · 6 mos</h6>
        <ul className="list">
          <li className="list-item">
            Developing and maintaining mobile FOREX modules for multiple banks
            using Vue & React frameworks.
          </li>
          <li className="list-item">
            Maintaining swift and secure connection with the back services
            (TradeSurf).
          </li>
          <li className="list-item">
            Attending technical and business meetings with our partners,
            creating tasks and flows with respect to their demands on Jira.
          </li>
          <li className="list-item">
            Utilizing Django & mongoDB to create back services.
          </li>
          <li className="list-item">Used Flask to create standalone APIs.</li>
          <li className="list-item">
            Used Swift to create mobile testing environments.
          </li>
          <li className="list-item">
            Created detailed product documentations and code reviews.
          </li>
        </ul>
      </DivStyled>

      <DivStyled className="job-container">
        <h4>Full-stack Developer</h4>
        <h5>Clarusway · Full-time</h5>
        <h6>Feb 2022 - Jul 2022 · 6 mos</h6>
        <ul className="list">
          <li className="list-item">
            Developed interactive, responsive, and scalable frontends utilizing
            HTML5, CSS3, JavaScript ES6, React.
          </li>
          <li className="list-item">
            Designed a website with HTML, CSS, SASS(SCSS), Bootstrap5, MUI
            codes.
          </li>
          <li className="list-item">
            Supported HTML and CSS projects using JS DOM manipulation and event
            listeners.
          </li>
          <li className="list-item">
            Developed the payment page of the e-commerce website with JS
            functions using DOM, iterator, callback functions, string array
            functions, and events.
          </li>
          <li className="list-item">
            Requested APIs using Async, Await, and Fetch structures to view data
            from various platforms.
          </li>
          <li className="list-item">
            Enabled customers to make transactions on their websites using JSON,
            local storage, and array methods.
          </li>
          <li className="list-item">
            Used state hook and component structures in various projects.
          </li>
          <li className="list-item">
            Worked with React Router, Bootstrap, MUI, Axios, Formik & Yup
            libraries for user-friendly preparation of prepared websites.
          </li>
          <li className="list-item">
            Combined Material UI and Semantic UI libraries to achieve a better
            UI experience.
          </li>
          <li className="list-item">
            Applied state management using React States (useContext, useReducer)
            and Redux.
          </li>
          <li className="list-item">
            Built a Dashboard page showing data related to users integrated with
            Database utilizing Firebase Realtime Databases and Firebase
            Authentication.
          </li>
          <li className="list-item">
            Experienced in writing modular and reusable codes, using build tools
            and package managers.
          </li>
          <li className="list-item">
            Studied Computational Thinking, Operating Systems, Linux, Version
            Control Systems (Git & Github), Software Development Life Cycle
            (SDLC).
          </li>
          <li className="list-item">
            Used SCRUM & Agile methodologies and JIRA while working on
            individual & group projects.
          </li>
        </ul>
        <h6>
          Skills: Git · HTML5 · Cascading Style Sheets (CSS) · SASS · scss ·
          Bootstrap · JavaScript · Material-UI · React.js · REST APIs
        </h6>
      </DivStyled>

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

      <h2 className="heading">Education</h2>
      <DivStyled>
        Ozyegin University - Civil Engineering B.S.E.
        <h6>2013-2018</h6>
        Nisantasi Nuri Akın Highschool
        <h6>2009-2013</h6>
        Terakki Foundation Sisli Terakki Primary & Middle School
        <h6>2000-2009</h6>
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
        from{' '}
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
