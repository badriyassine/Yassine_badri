import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/Logo.png"; // put your logo inside src/assets

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  // Detect screen width for mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1067);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full  flex items-center justify-between px-8 py-4 backdrop-blur-md bg-transparent z-50">
      {/* Logo with slow jump animation */}
      <motion.img
        src={logo}
        alt="Logo"
        className="h-16 object-contain"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Desktop Navigation */}
      {!isMobile && (
        <div className="flex items-center gap-8">
          <nav className="flex gap-6 font-medium tracking-wide">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-[#ff734d] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="/cv.pdf"
            download
            className="px-5 py-2 rounded-4xl border border-[#ff734d]/50 bg-[#ff734d] backdrop-blur-lg text-white font-semibold hover:bg-[#ff734d]/80 transition duration-300 shadow-lg"
          >
            Download CV
          </a>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <div className="relative z-50">
          {/* Hamburger Button */}
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
                {/* Close Button inside menu */}
                <button
                  onClick={() => setMenuOpen(false)}
                  className="self-end text-white text-2xl mb-6 focus:outline-none"
                >
                  <FaTimes />
                </button>

                {/* Menu Links */}
                {navLinks.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-lg hover:text-[#ff734d] transition-colors duration-300"
                  >
                    {item}
                  </a>
                ))}

                {/* CV Button */}
                <a
                  href="/cv.pdf"
                  download
                  className="mt-auto px-5 py-2 rounded-4xl border border-[#ff734d]/50 bg-[#ff734d] text-white font-semibold hover:bg-[#ff734d]/80 transition duration-300 w-full text-center"
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
