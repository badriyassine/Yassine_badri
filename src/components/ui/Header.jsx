import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = ["Home","Projects", "Skills", "About", "Contact"];

  // Detect screen width for mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1067);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.toLowerCase())
      );
      const scrollPos = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(navLinks[index].toLowerCase());
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // close mobile menu
  };

  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 backdrop-blur-md bg-transparent z-50">
      {/* Logo */}
      <a href="#home" onClick={() => scrollToSection("home")}>
        <motion.img
          src={logo}
          alt="Logo"
          className="h-16 object-contain"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </a>

      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="flex items-center gap-8">
          <nav className="flex gap-6 font-medium tracking-wide">
            {navLinks.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? "text-[#ff734d] cursor-pointer"
                    : "text-gray-300 hover:text-[#ff734d] cursor-pointer"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
          <a
            href={`${import.meta.env.BASE_URL}YASSINE_BADRI_CV.pdf`}
            download="Yassine_Badri_CV.pdf"
            className="px-5 py-2 rounded-4xl border border-[#ff734d]/50 bg-[#ff734d] backdrop-blur-lg text-white font-semibold hover:bg-[#ff734d]/80 transition duration-300 shadow-lg"
          >
            Download CV
          </a>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div className="relative z-50">
          {!menuOpen && (
            <button
              onClick={() => setMenuOpen(true)}
              className="text-white text-2xl focus:outline-none"
            >
              <FaBars />
            </button>
          )}

          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed top-0 right-0 w-64 h-screen bg-[#0a0a0a]/95 backdrop-blur-md flex flex-col items-start p-8 gap-6 shadow-lg z-50"
              >
                <button
                  onClick={() => setMenuOpen(false)}
                  className="self-end text-white text-2xl mb-6 focus:outline-none"
                >
                  <FaTimes />
                </button>

                {navLinks.map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-lg w-full text-left transition-colors duration-300 ${
                      activeSection === item.toLowerCase()
                        ? "text-[#ff734d]"
                        : "text-white hover:text-[#ff734d]"
                    }`}
                  >
                    {item}
                  </button>
                ))}

                {/* CV Button placed right under links */}
                <a
                  href={`${import.meta.env.BASE_URL}YASSINE_BADRI_CV.pdf`}
                  download="Yassine_Badri_CV.pdf"
                  className="px-5 py-2 rounded-4xl border border-[#ff734d]/50 bg-[#ff734d] text-white font-semibold hover:bg-[#ff734d]/80 transition duration-300 w-full text-center shadow-md"
                >
                  Download CV
                </a>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      )}
    </header>
  );
};

export default Header;
