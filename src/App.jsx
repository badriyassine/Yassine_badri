import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/Background";
import Header from "./components/ui/Header";
import Hero from "./pages/hero_section/Hero";
import Skills from "./pages/skills_section/Skills";
import Projects from "./pages/project_section/Projects";
import About from "./pages/about_section/About";
import Contact from "./pages/contact_section/Contact";
import AllProjects from "./pages/AllProjects";
import Footer from "./components/ui/Footer";
import { FaArrowUp } from "react-icons/fa";

// HomePage component moved outside to prevent recreation on every render
const HomePage = () => {
  const [showButton, setShowButton] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(id);
          }
        }
      }

      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic browser tab title
  useEffect(() => {
    const sectionTitles = {
      home: "Home - Yassine Badri",
      about: "About - Yassine Badri",
      skills: "Tech - Yassine Badri",
      projects: "Work - Yassine Badri",
      contact: "Contact - Yassine Badri",
    };

    document.title = sectionTitles[activeSection] || "Yassine Badri";
  }, [activeSection]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen gap-20 sm:gap-32 lg:gap-40 flex flex-col text-white">
      <Background />
      <Header activeSection={activeSection} />
      <Hero />
      <Projects id="projects" />
      <Skills id="skills" />
      <About id="about" />
      <Contact id="contact" />
      <Footer />

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 p-2 sm:p-3 rounded-full bg-[#ff734d] backdrop-blur-lg text-white shadow-lg cursor-pointer hover:scale-110 transition-all duration-500 z-50
          ${
            showButton
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }
        `}
      >
        <FaArrowUp size={16} className="sm:w-[18px] sm:h-[18px]" />
      </button>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </Router>
  );
};

export default App;
