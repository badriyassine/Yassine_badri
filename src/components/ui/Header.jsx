import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/logo/Logo.png"; // put your logo inside src/assets

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 backdrop-blur-md bg-transparent z-50">
      {/* Logo with slow jump animation */}
      <motion.img
        src={logo}
        alt="Logo"
        className=" h-16 object-contain"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Navigation + Button */}
      <div className="flex items-center gap-8">
        {/* Nav Links */}
        <nav className="flex gap-6 text-gray-300 font-medium tracking-wide">
          {["Home", "Skills", "Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-white hover:opacity-50 transition duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Glass-style Button */}
        <a
          href="/cv.pdf" // replace with your CV path
          download
          className="px-5 py-2 rounded-4xl border border-white/20 bg-white/10 backdrop-blur-lg text-white font-semibold hover:bg-white/20 transition duration-300 shadow-lg"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
