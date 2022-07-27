import Footer from "../components/footer/Footer";
import Aside from "../components/aside/Aside";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/home/Home";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Contact from "../pages/contact/Contact";
import Projects from "../pages/projects/Projects";
import AboutMe from "../pages/about-me/AboutMe";
import "./appRouter.css";

const AppRouter = () => {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <div className="page-container">
          <Aside />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="about-me" element={<AboutMe />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="projects" element={<Projects />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default AppRouter;
