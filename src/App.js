import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavbarFile from "./components/NavbarFile";
// import Nav from "./components/Nav";
import "./App.css";
import Hero from "./components/Hero";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import CareerPage from "./components/CareerPage";
import ServicesPage from "./components/ServicesPage";

function App() {
  return (
    <>
      <NavbarFile />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Career" element={<CareerPage />} />
          <Route path="/Services" element={<ServicesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
