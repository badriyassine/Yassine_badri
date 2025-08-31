import React from "react";
import { FaReact, FaNodeJs, FaLaravel, FaGithub } from "react-icons/fa";
import { SiExpress, SiFigma } from "react-icons/si";
import { VscCode } from "react-icons/vsc"; // Correct VS Code icon from VSC package

const skills = [
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "Laravel", icon: <FaLaravel className="text-red-600" /> },
  { name: "VS Code", icon: <VscCode className="text-blue-500" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-white bg-black/30"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">My Skills</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          These are the tools and technologies I use to build modern web applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center gap-2 p-6 bg-white/5 rounded-xl shadow-md hover:scale-110 transition-transform duration-300"
          >
            <div className="text-6xl">{skill.icon}</div>
            <span className="text-lg font-medium text-gray-200">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;





