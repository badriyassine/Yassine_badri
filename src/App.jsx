import React, { useState, useEffect } from "react";
import Background from "./components/Background";
import Header from "./components/ui/Header";
import Hero from "./pages/hero_section/Hero";
import Skills from "./pages/skills_section/Skills";
import { FaArrowUp } from "react-icons/fa";
import Projects from "./pages/project_section/Projects";
import About from "./pages/about_section/About";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative min-h-screen gap-24 flex flex-col text-white">
      <Background />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-[#ff734d] backdrop-blur-lg text-white shadow-lg cursor-pointer hover:scale-110 transition-all duration-500
          ${showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        `}
      >
        <FaArrowUp size={18} />
      </button>
    </div>
  );
};

export default App;


