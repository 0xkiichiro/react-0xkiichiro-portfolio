import Footer from '../components/footer/Footer';
import Aside from '../components/aside/Aside';
import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Contact from '../pages/contact/Contact';
import Projects from '../pages/projects/Projects';
import AboutMe from '../pages/about-me/AboutMe';
import './appRouter.css';
import { Blog } from '../pages/blog/Blog';

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
            <Route path="blog" element={<Blog />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default AppRouter;
