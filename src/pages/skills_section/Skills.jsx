import React from "react";
import Github from "./components/Github";
import Tech from "./components/Tech";

const Skills = () => {
  return (
    <div className="flex flex-col items-center mt-20 px-4 w-full">
      {/* Section Title */}
      <h2 className="text-5xl font-bold mb-1 text-white text-center">
        Technologies & GitHub Work
      </h2>
      <p className="text-gray-400 text-center mt-2 mb-6 max-w-2xl">
        Showcasing my tech expertise and GitHub projects, delivering clean,
        <br />
        efficient, and modern solutions
      </p>

      {/* Tech Card */}
      <div className="w-full max-w-6xl mb-10 mt-10 ">
        <div className="bg-white/5 border border-white/20 rounded-2xl p-4  shadow-md hover:shadow-lg transition-all duration-300">
          <h3
            className="text-2xl font-bold  text-center"
            style={{ color: "#ff734d" }}
          >
            Tech Stack
          </h3>
        </div>
        <div>
          <Tech />
        </div>
      </div>

      {/* GitHub Card */}
      <div className="w-full max-w-6xl mt-10">
        <div className="bg-white/5 border border-white/20 rounded-2xl p-4 mb-4 shadow-md hover:shadow-lg transition-all duration-300">
          <h3
            className="text-2xl font-bold  text-center"
            style={{ color: "#ff734d" }}
          >
            GitHub Projects
          </h3>
        </div>
        <div className="bg-white/5 border border-white/20 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300">
          <Github />
        </div>
      </div>
    </div>
  );
};

export default Skills;
