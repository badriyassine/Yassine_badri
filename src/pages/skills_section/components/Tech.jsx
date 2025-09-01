import React from "react";

const Tech = () => {
  const techStack = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
    Backend: ["PHP", "Laravel", "Node.js", "Express.js"],
    Database: ["MySQL", "MongoDB"],
    Tools: ["VSCode", "Figma", "Git", "GitHub", "Postman", "Canva"],
  };

  return (
    <div className="flex flex-col items-center mt-16 px-4 w-full">
      {/* Tech Categories */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-5xl">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category} className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-semibold text-white">{category}</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {items.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-4 py-2 
                    bg-white/10 
                    border border-white/20 
                    rounded-full 
                    text-white text-base
                    font-medium
                    transition-all duration-300
                    hover:bg-white/20 hover:scale-110 hover:shadow-lg
                  "
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

