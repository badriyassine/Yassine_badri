import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowDown, FaGithub } from "react-icons/fa";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Cycle roles
  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % roles.length),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-4 sm:px-6 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="max-w-2xl mt-6 z-10"
      >
        {/* Glass-style section above title */}
        <div className="mx-auto mb-6 sm:mb-10 rounded-4xl border border-[#ff734d] backdrop-blur-xl px-4 sm:px-6 py-2 sm:py-3 inline-flex items-center gap-3 shadow-md">
          <div className="w-2 h-2 rounded-full bg-[#ff734d]"></div>
          <h3 className="font-medium relative overflow-hidden text-sm sm:text-base">
            <span className="bg-gradient-to-r from-white via-[#ff734d] to-white bg-clip-text text-transparent animate-gradientSlide">
              Crafting unique brand identities
            </span>
          </h3>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6">
          Hi, I'm <span className="text-[#ff734d]">Yassine Badri</span>
        </h1>

        {/* Animated Role Switching */}
        <div className="h-10 sm:h-12 mb-4 sm:mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="text-xl sm:text-4xl font-semibold text-gray-300"
            >
              {roles[index]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Short paragraph */}
        <p className="text-gray-400 mb-6 sm:mb-10 text-sm sm:text-base px-2 sm:px-0">
          I’m passionate about creating web applications that are both visually
          appealing and highly functional.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="bg-[#ff734d] hover:bg-[#ff734d]/80 text-white font-semibold px-12 py-3 rounded-full shadow-lg transition-all duration-300 text-base flex items-center justify-center gap-2 hover:scale-105 active:scale-95 w-full sm:w-auto min-w-[200px]"
          >
            My Work <FaArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/badriyassine"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/20 hover:bg-white/30 text-white font-semibold px-12 py-3 rounded-full shadow-lg transition-all duration-300 text-base flex items-center justify-center gap-2 border border-white/30 hover:scale-105 active:scale-95 w-full sm:w-auto min-w-[200px]"
          >
            <FaGithub className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </motion.div>

      {/* Scroll to explore */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center text-gray-300 text-sm z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <FaArrowDown className="mt-2" />
      </motion.div>

      {/* Keyframes */}
      <style>
        {`
           @keyframes gradientSlide {
             0% { background-position: 0% 50%; }
             50% { background-position: 100% 50%; }
             100% { background-position: 0% 50%; }
           }
           .animate-gradientSlide {
             background-size: 200% 200%;
             animation: gradientSlide 5s ease-in-out infinite;
           }
         `}
      </style>
    </motion.section>
  );
};

export default Hero;
