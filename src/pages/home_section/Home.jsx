import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaArrowDown, FaGithub, FaPlay, FaStop } from "react-icons/fa";

const roles = [
  "Web Designer",
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
];

const projectImages = [
  "/src/assets/images/1.png",
  "/src/assets/images/2.png",
  "/src/assets/images/3.png",
  "/src/assets/images/4.png",
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const [slideshowActive, setSlideshowActive] = useState(true);
  const [showOnScroll, setShowOnScroll] = useState(true);
  const slideshowRef = useRef(null);

  // Cycle roles
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Cycle background images
  useEffect(() => {
    if (slideshowActive) {
      slideshowRef.current = setInterval(() => {
        setBgIndex((prev) => (prev + 1) % projectImages.length);
      }, 5000);
    } else {
      clearInterval(slideshowRef.current);
    }
    return () => clearInterval(slideshowRef.current);
  }, [slideshowActive]);

  // Detect scroll to hide slideshow and button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowOnScroll(false);
      } else {
        setShowOnScroll(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-center text-white px-6 overflow-hidden"
    >
      {/* Background Slideshow */}
      <AnimatePresence mode="wait">
        {slideshowActive && showOnScroll && (
          <motion.img
            key={bgIndex}
            src={projectImages[bgIndex]}
            alt="Project background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="max-w-2xl mt-6 z-10"
      >
        {/* Glass-style section above title */}
        <div className="mx-auto mb-10 rounded-4xl border border-gray-700 bg-white/5 backdrop-blur-xl px-6 py-3 flex items-center gap-4 shadow-md inline-flex">
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
          <a
            href="#projects"
            className="relative px-8 py-3 rounded-xl bg-white/10 backdrop-blur-xl border border-2 border-white/20 text-white font-medium flex items-center gap-3 overflow-hidden shadow-md group transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">View My Work</span>
            <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
            <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-black via-gray-300 to-gray-700 opacity-50 animate-[shine_6s_linear_infinite] blur-xl group-hover:opacity-70"></span>
          </a>

          <a
            href="https://github.com/YassineBadri"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 py-3 rounded-xl border border-[#050708] bg-[#050708] font-medium text-white flex items-center gap-2 shadow-md overflow-hidden group hover:opacity-80"
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
        transition={{ duration: 3, repeat: Infinity }}
      >
        <span>Scroll to explore</span>
        <FaArrowDown className="mt-2" />
      </motion.div>

      {/* Start/Stop Slideshow Button (icon only) */}
      {showOnScroll && (
        <button
          onClick={() => setSlideshowActive((prev) => !prev)}
          className="absolute bottom-8 left-8 p-3 rounded-full bg-[#797979b9] text-white shadow-md hover:opacity-80 transition-colors z-10 cursor-pointer"
        >
          {slideshowActive ? <FaStop size={18} /> : <FaPlay size={18} />}
        </button>
      )}

      {/* Keyframes */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes gradientSlide {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
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








