import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarFile from "./components/NavbarFile";

import "./App.css";
import Hero from "./pages/Home/Hero";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import CareerPage from "./pages/Career/CareerPage";
import ServicesPage from "./pages/Services/ServicesPage";
import ProjectsPage from "./pages/Projects/ProjectsPage";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="overflow-hidden">
        <NavbarFile />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Career" element={<CareerPage />} />
          <Route path="/Services" element={<ServicesPage />} />
          <Route path="/Projects" element={<ProjectsPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
