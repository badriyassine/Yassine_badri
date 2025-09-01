import React from "react";
import Github from "./components/Github";
import Tech from "./components/Tech";
import "./styles/Skills.css"; // We'll put our animation CSS here

const Skills = () => {
  return (
    <div className="flex flex-col items-center mt-20 px-4 w-full">
      {/* Section Title */}
      <h2 className="text-5xl font-bold text-white text-center">
        Technologies & GitHub Work
      </h2>
      <p className="text-gray-400 text-center mt-2 max-w-2xl">
        Showcasing my tech expertise and GitHub projects, delivering clean,<br /> efficient, and modern solutions
      </p>

      {/* Tech Card */}
      <div className="w-full max-w-6xl mt-10 relative glowing-card">
        <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 relative z-10">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-gray-500 to-black bg-clip-text text-transparent animate-gradient-x">
            Tech Stack
          </h3>
          <Tech />
        </div>
      </div>

      {/* GitHub Card */}
      <div className="w-full max-w-6xl mt-10 relative glowing-card">
        <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:shadow-lg transition-all duration-500 relative z-10">
          <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-gray-500 to-black bg-clip-text text-transparent animate-gradient-x">
            GitHub Projects
          </h3>
          <Github />
        </div>
      </div>
    </div>
  );
};

export default Skills;

















