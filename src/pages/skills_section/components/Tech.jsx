import React from "react";

const Tech = () => {
  const techStack = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "TailwindCSS"],
    Backend: ["PHP", "Laravel", "Node.js", "Express.js"],
    Database: ["MySQL", "MongoDB"],
    Tools: ["VSCode", "Figma", "Git", "GitHub", "Postman", "Canva"],
  };

  return (
    <div className="flex flex-col items-center mt-16 px-4">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-white text-center">
        My Tech Stack
      </h2>
      <p className="text-gray-400 text-center mt-2 max-w-xl">
        These are the technologies and tools I use regularly in my projects.
      </p>

      {/* Tech Categories */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-5xl">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category} className="flex flex-col items-center gap-4">
            <h3 className="text-xl font-semibold text-white">{category}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {items.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-white text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tech;
