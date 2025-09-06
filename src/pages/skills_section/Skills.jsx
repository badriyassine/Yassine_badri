import React from "react";
import { motion } from "framer-motion";
import Github from "./components/Github";
import Tech from "./components/Tech";

const Skills = ({ id = "skills" }) => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id={id} className="flex flex-col items-center px-4 w-full">
      {/* Section Title */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-5xl font-bold mb-1 text-white text-center">
          Technologies & GitHub Work
        </h2>
        <p className="text-gray-400 text-center mt-2 max-w-2xl">
          Showcasing my tech expertise and GitHub projects, delivering clean,
          efficient, and modern solutions.
        </p>
      </motion.div>

      {/* Cards wrapper with single animation */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col gap-10 w-full max-w-6xl"
      >
        {/* Tech Card */}
        <div className="bg-white/5 border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-bold text-center text-[#ff734d]">
            Tech Stack
          </h3>
          <div className="mt-4">
            <Tech />
          </div>
        </div>

        {/* GitHub Card */}
        <div className="bg-white/5 border border-white/20 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-2xl font-bold text-center text-[#ff734d]">
            GitHub Projects
          </h3>
          <div className="mt-4">
            <Github />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;




