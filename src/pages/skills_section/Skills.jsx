import React from 'react';
import Github from './components/Github';
import Tech from './components/Tech';

const Skills = () => {
  return (
    <div className="flex flex-col items-center mt-20 px-4">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white text-center">
        My Skills & Work
      </h2>
      <p className="text-gray-400 text-center mt-2 max-w-2xl">
        Here’s an overview of the technologies I use and my GitHub projects. I focus on building clean, efficient, and modern solutions.
      </p>

      {/* Tech & GitHub side by side */}
      <div className="mt-10 flex flex-col md:flex-row items-start justify-center gap-10 w-full max-w-6xl">
        {/* Tech on left */}
        <div className="md:w-1/2 w-full">
          <Tech />
        </div>

        {/* GitHub on right */}
        <div className="md:w-1/2 w-full">
          <Github />
        </div>
      </div>
    </div>
  );
};

export default Skills;















