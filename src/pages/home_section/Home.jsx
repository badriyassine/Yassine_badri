import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowDown, FaGithub } from "react-icons/fa";

const roles = [
  "Web Designer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  // cycle through roles
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="max-w-2xl mt-6"
      >
        {/* Glass-style section above title */}
    
        <div className="mx-auto mb-10 rounded-4xl border  border-gray-700 bg-white/5 backdrop-blur-xl px-6 py-3 flex items-center gap-4 shadow-md inline-flex">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <h3 className="font-medium relative overflow-hidden">
            <span className="bg-gradient-to-r from-gray-800 via-gray-400 to-gray-900 bg-clip-text text-transparent animate-gradientSlide">
              Crafting unique brand identities
            </span>
          </h3>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl font-bold mb-6">Hi, I&apos;m Yassine Badri</h1>

        {/* Animated Role Switching */}
        <div className="h-12 mb-6 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.h2
              key={roles[index]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1 }}
              className="text-4xl font-semibold text-gray-300"
            >
              {roles[index]}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Short paragraph */}
        <p className="text-gray-400 mb-10">
          Passionate about building clean, modern web applications that combine
          beautiful design with powerful functionality.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          {/* View My Work */}
          <a
            href="#projects"
            className="relative px-8 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-medium flex items-center gap-3 overflow-hidden shadow-md group"
          >
            <span className="relative z-10">View My Work</span>
            <FaArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />

            {/* Linear dynamic grey gradient overlay */}
            <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-black via-gray-300 to-gray-700 opacity-50 animate-[shine_6s_linear_infinite] blur-xl"></span>
          </a>

          {/* Check My GitHub */}
          <a
            href="https://github.com/YassineBadri"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 py-3 rounded-xl border border-[#050708] bg-[#050708] font-medium text-white flex items-center gap-2 shadow-md overflow-hidden group"
          >
            <FaGithub className="z-10" />
            <span className="relative z-10">Check My GitHub</span>
            <span className="absolute inset-0 rounded-xl border-2 border-transparent animate-[pulse_2s_infinite]"></span>
          </a>
        </div>
      </motion.div>

      {/* Scroll to explore */}
      <motion.div
        className="absolute bottom-8 flex flex-col items-center text-gray-300 text-sm"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <FaArrowDown className="mt-2" />
      </motion.div>

      {/* Keyframes for linear gradient animation */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes gradientSlide {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradientSlide {
          background-size: 200% 200%;
          animation: gradientSlide 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;





