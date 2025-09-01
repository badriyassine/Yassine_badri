import React from "react";
import Github from "./components/Github";
import Tech from "./components/Tech";

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















