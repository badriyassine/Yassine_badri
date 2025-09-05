import React from "react";
import { motion } from "framer-motion";
import Github from "./components/Github";
import Tech from "./components/Tech";

const Skills = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="flex flex-col items-center px-4 w-full">
      {/* Section Title */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-5xl font-bold mb-1 text-white text-center">
          Technologies & GitHub Work
        </h2>
        <p className="text-gray-400 text-center mt-2 mb-6 max-w-2xl">
          Showcasing my tech expertise and GitHub projects, delivering clean,
          <br />
          efficient, and modern solutions
        </p>
      </motion.div>

      {/* Tech Card */}
      <motion.div
        className="w-full max-w-6xl mb-10 mt-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="bg-white/5 border border-white/20 rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-300">
          <h3
            className="text-2xl font-bold text-center"
            style={{ color: "#ff734d" }}
          >
            Tech Stack
          </h3>
        </div>
        <div>
          <Tech />
        </div>
      </motion.div>

      {/* GitHub Card (with delay) */}
      <motion.div
        className="w-full max-w-6xl mt-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.5 }} // Delay makes it appear after Tech
      >
        <div className="bg-white/5 border border-white/20 rounded-2xl p-4 mb-4 shadow-md hover:shadow-lg transition-all duration-300">
          <h3
            className="text-2xl font-bold text-center"
            style={{ color: "#ff734d" }}
          >
            GitHub Projects
          </h3>
        </div>
        <div className="bg-white/5 border border-white/20 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <Github />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;


