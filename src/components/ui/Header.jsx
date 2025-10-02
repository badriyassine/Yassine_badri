import React, { useState, useEffect, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo/Logo.png";

const Header = ({ activeSection: propActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState(
    propActiveSection || "home"
  );

  // Update nav labels: Projects -> Work, Skills -> Tech, remove Contact
  const navLinks = ["Home", "Work", "Tech", "About"];

  // Detect screen width for mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1067);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update activeSection when prop changes
  useEffect(() => {
    if (propActiveSection) {
      setActiveSection(propActiveSection);
    }
  }, [propActiveSection]);

  const scrollToSection = useCallback((id) => {
    // Handle home section - scroll to top
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setMenuOpen(false);
      return;
    }

    let targetId = id;
    if (id === "work") targetId = "projects";
    if (id === "tech") targetId = "skills";

    const el = document.getElementById(targetId);
    if (el) {
      // Get header height to offset the scroll position
      const headerHeight = 80; // Approximate header height in pixels
      const elementPosition = el.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setMenuOpen(false); // close mobile menu
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-26 py-3 sm:py-4 backdrop-blur-md bg-transparent z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: 0.1,
      }}
    >
      {/* Logo */}
      <motion.button
        onClick={() => scrollToSection("home")}
        aria-label="Go to home"
        className="flex items-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.1,
        }}
      >
        <motion.img
          src={logo}
          alt="Logo"
          className="h-12 sm:h-14 lg:h-16 object-contain cursor-pointer"
          animate={{ y: [0, -8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.button>

      {/* Desktop Navigation */}
      {!isMobile && (
        <motion.div
          className="flex items-center gap-4 sm:gap-6 lg:gap-8"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1,
          }}
        >
          <nav className="flex gap-4 sm:gap-6 lg:gap-8 font-medium tracking-wide text-sm sm:text-base">
            {navLinks.map((item, index) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? "text-[#ff734d] cursor-pointer"
                    : "text-gray-300 hover:text-[#ff734d] cursor-pointer"
                }`}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.1,
                }}
              >
                {item}
              </motion.button>
            ))}
          </nav>

          {/* "Let's chat" button — scrolls to contact section */}
          <motion.button
            onClick={() => scrollToSection("contact")}
            className="px-4 sm:px-6 lg:px-8 py-2 cursor-pointer rounded-4xl border border-[#ff734d]/50 bg-[#ff734d] backdrop-blur-lg text-white font-semibold hover:bg-[#ff734d]/80 shadow-lg text-sm sm:text-base"
            initial={{ y: -20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.1,
            }}
          >
            Let's chat
          </motion.button>
        </motion.div>
      )}

      {/* Mobile Menu */}
      {isMobile && (
        <motion.div
          className="relative z-50"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.1,
          }}
        >
          {!menuOpen && (
            <motion.button
              onClick={() => setMenuOpen(true)}
              className="text-white text-2xl focus:outline-none"
              aria-label="Open menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: 0.1,
              }}
            >
              <FaBars />
            </motion.button>
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
                  aria-label="Close menu"
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

                {/* "Let's chat" button in mobile: full width, scrolls to contact */}
                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="px-5 py-2 rounded-4xl border border-[#ff734d]/50 bg-[#ff734d] text-white font-semibold hover:bg-[#ff734d]/80 w-full text-center shadow-md"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Let's chat
                </motion.button>
              </motion.nav>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.header>
  );
};

export default memo(Header);
