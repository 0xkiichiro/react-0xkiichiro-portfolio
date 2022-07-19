import Footer from "./components/footer/Footer";
import Aside from "./components/aside/Aside";
import Home from "./pages/home/Home";
import "./app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import AboutMe from "./pages/about-me/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
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
    </BrowserRouter>
  );
}

export default App;
