import React from "react";
import { FaCode, FaDatabase, FaLaptopCode, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const About = () => {
  const cards = [
    {
      title: "Frontend Developer",
      icon: <FaCode size={40} />,
      desc: "I build modern, responsive, and engaging user interfaces using React, TailwindCSS, and other cutting-edge tools.",
    },
    {
      title: "Backend Developer",
      icon: <FaDatabase size={40} />,
      desc: "I design and maintain reliable, scalable server-side applications with PHP, Laravel, Node.js, and Express.",
    },
    {
      title: "Full Stack Developer",
      icon: <FaLaptopCode size={40} />,
      desc: "I merge frontend and backend skills to craft complete web applications from concept to deployment.",
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Teamwork",
    "Adaptability",
    "Communication",
    "Time Management",
  ];

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20 text-center"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-white mb-3"
      >
        About Me
      </motion.h2>

      {/* Question */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl text-gray-300 mb-6"
      >
        Who am I?
      </motion.h3>

      {/* Answer */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl text-gray-400 mb-16"
      >
        I’m <span className="text-[#ff734d] font-semibold">Yassine</span>, a
        passionate{" "}
        <span className="text-[#ff734d] font-semibold">
          Full Stack Developer
        </span>{" "}
        who enjoys creating web experiences that combine clean design, smooth
        user interactions, and robust backend functionality. Curious about new
        technologies and driven by problem-solving, I aim to build digital
        solutions that are not only{" "}
        <span className="text-[#ff734d] font-semibold">efficient</span> and{" "}
        <span className="text-[#ff734d] font-semibold">scalable</span>, but also
        make a meaningful impact for both users and businesses.
      </motion.p>

      {/* Cards (Technical Skills) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mb-20"
      >
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="text-[#ff734d] mb-4">{card.icon}</div>
            <h4 className="text-lg font-semibold text-white mb-2">
              {card.title}
            </h4>
            <p className="text-sm text-gray-400">{card.desc}</p>
          </div>
        ))}
      </motion.div>

      {/* Soft Skills */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl flex flex-wrap justify-center gap-4"
      >
        {softSkills.map((skill, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-sm font-medium transition-all duration-300 hover:scale-110 hover:shadow-lg hover:text-[#ff734d] cursor-pointer"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </section>
  );
};

export default About;
