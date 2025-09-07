const Tech = () => {
  const techStack = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS"],
    Backend: ["PHP", "Laravel", "Node.js", "Express.js"],
    Database: ["MySQL", "MongoDB"],
    Tools: ["VSCode", "Figma", "Git", "GitHub", "Postman", "Canva"],
  };

  const techColors = {
    HTML: "#E34F26",
    CSS: "#1572B6",
    JavaScript: "#F7DF1E",
    React: "#61DAFB",
    TailwindCSS: "#38B2AC",
    PHP: "#777BB4",
    Laravel: "#FF2D20",
    "Node.js": "#339933",
    "Express.js": "#000000",
    MySQL: "#4479A1",
    MongoDB: "#47A248",
    VSCode: "#007ACC",
    Figma: "#F24E1E",
    Git: "#F05032",
    GitHub: "#181717",
    Postman: "#FF6C37",
    Canva: "#00C4CC",
  };

  return (
    <div className="flex flex-col items-center px-4 w-full">
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-6xl">
        {Object.entries(techStack).map(([category, items]) => (
          <div
            key={category}
            className="flex flex-col items-center gap-4 
                       bg-white/5 border border-white/10 rounded-2xl 
                       p-6 shadow-md 
                       transition-transform duration-300 ease-out
                       hover:scale-105 hover:shadow-xl
                       w-full h-full"
          >
            <h3 className="text-2xl font-semibold" style={{ color: "#fff" }}>
              {category}
            </h3>
            <div className="bg-[#ff734d] h-1 mb-2 w-full rounded-full max-w-5"></div>
            <div className="flex flex-wrap justify-center gap-3">
              {items.map((tech) => (
                <span
                  key={tech}
                  style={{ cursor: "pointer" }}
                  className={`
                    px-4 py-2 
                    bg-white/10 
                    border border-white/20 
                    rounded-full 
                    text-white text-sm
                    font-medium
                    transition-all duration-300
                    hover:scale-110 hover:shadow-lg
                  `}
                  onMouseEnter={(e) => (e.currentTarget.style.color = techColors[tech])}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
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


