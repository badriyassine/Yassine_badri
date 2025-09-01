import React from "react";
import Github from "./components/Github";
import Tech from "./components/Tech";

const Skills = () => {
  return (
    <div className="flex flex-col items-center mt-20 px-4 w-full">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-white text-center">
        My Skills & Work
      </h2>
      <p className="text-gray-400 text-center mt-2 max-w-2xl">
        Here’s an overview of the technologies I use and my GitHub projects. I focus on building clean, efficient, and modern solutions.
      </p>

      {/* Tech on top */}
      <div className="w-full max-w-6xl mt-10 transition-all duration-500">
        <Tech />
      </div>

      {/* GitHub below */}
      <div className="w-full max-w-6xl mt-10 transition-all duration-500">
        <Github />
      </div>
    </div>
  );
};

export default Skills;















