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
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-4 sm:px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="max-w-2xl mt-6 z-10"
      >
        {/* Glass-style section above title */}
        <div className="mx-auto mb-6 sm:mb-10 rounded-4xl border border-[#ff734d] backdrop-blur-xl px-4 sm:px-6 py-2 sm:py-3 flex items-center gap-3 shadow-md inline-flex">
          <div className="w-2 h-2 rounded-full bg-[#ff734d]"></div>
          <h3 className="font-medium relative overflow-hidden text-sm sm:text-base">
            <span className="bg-gradient-to-r from-white via-[#ff734d] to-white bg-clip-text text-transparent animate-gradientSlide">
              Crafting unique brand identities
            </span>
          </h3>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6">
          Hi, I&apos;m Yassine Badri
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

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-2 sm:px-0">
          <a
            href="#projects"
            className="relative inline-flex px-6 sm:px-8 py-3 rounded-full bg-[#ff734d] border border-[#ff734d] text-white font-medium items-center gap-3 overflow-hidden shadow-md group transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">View My Work</span>
            <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-[#ff734d]/40 via-gray-300/30 to-gray-700/20 opacity-50 animate-[shine_6s_linear_infinite] blur-xl group-hover:opacity-70"></span>
          </a>

          <a
            href="https://github.com/badriyassine"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex md:inline-flex relative px-6 py-3 rounded-full border border-[#ff734d] bg-[#05070869] font-medium text-[#ff734d] items-center gap-2 shadow-md overflow-hidden group hover:opacity-80 mt-2 sm:mt-0"
          >
            <FaGithub className="z-10" />
            <span className="relative z-10">Check My GitHub</span>
            <span className="absolute inset-0 rounded-xl border-2 border-transparent animate-[pulse_2s_infinite]"></span>
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
    </section>
  );
};

export default Hero;
