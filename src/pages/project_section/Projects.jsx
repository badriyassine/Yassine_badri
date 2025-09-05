import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "InventoryPro – Simple Inventory Tracker",
    image: "/src/assets/images/projects/InventoryPro.png",
    description:
      "InventoryPro is a simple app I built to track products and stock. It keeps everything organized while showing real-time updates.",
    technologies: ["React", "TailwindCSS", "PHP", "MySQL"],
    github: "https://github.com/badriyassine/InventoryPro",
  },
    {
    name: "HealthTracker – Monitor Your Wellness",
    image: "/src/assets/images/projects/Health-tracker.png",
    description:
      "HealthTracker is a web app I built to help users monitor their daily health and fitness activities. It features interactive charts, goal tracking, and a responsive, user-friendly interface.",
    technologies: ["React", "TailwindCSS"],
    github: "https://github.com/badriyassine/health_tracker",
  },
  {
    name: "Motary – Online Car Store",
    image: "/src/assets/images/projects/Motary.png",
    description:
      "Motary is an online car store I built for browsing and buying vehicles. It offers a clean design and smooth user experience to make car shopping easier.",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/badriyassine/Motary",
  },
  {
    name: "Goldbike – Online Bike Store",
    image: "/src/assets/images/projects/Goldbike.png",
    description:
      "Goldbike is a modern bike store UI design I created to showcase clean layouts and smooth shopping flow. It focuses on a stylish look and user-friendly experience.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/badriyassine/Goldbike",
  },
    {
    name: "DashboardPro – Interactive Data Panel",
    image: "/src/assets/images/projects/Dashboard.png",
    description:
      "DashboardPro is a sleek admin panel design I created to showcase data visualization and clean layouts. It focuses on intuitive navigation and modern UI aesthetics.",
    technologies: ["HTML", "CSS",],
    github: "https://github.com/badriyassine/Dashboard-design",
  },
];

const Projects = () => {
  const [[currentIndex, direction], setCurrent] = useState([0, 0]);
  const project = projects[currentIndex];

  const paginate = (dir) => {
    const newIndex =
      (currentIndex + dir + projects.length) % projects.length;
    setCurrent([newIndex, dir]);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  return (
    <div className="flex flex-col items-center mt-20 px-4 w-full">
      <h2 className="text-5xl font-bold mb-3 text-white text-center">
        Featured Work
      </h2>
      <p className="text-gray-400 text-center mt-2 mb-16 max-w-3xl">
        Explore my featured work — each project highlights unique challenges, clean design, and powerful solutions.
      </p>

      <div className="relative w-full max-w-6xl h-[600px] overflow-hidden rounded-2xl shadow-xl">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.6 }}
            className="absolute w-full h-full rounded-2xl overflow-hidden"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover"
            />

            {/* Overlay Info */}
            <motion.div
              className="absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-300"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.name}
              </h3>
              <p className="text-gray-300  max-w-2xl mb-4">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 hover:bg-[#ff734d]/50 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-[#ff734d] rounded-full text-white transition-all hover:bg-[#ff734d]/80 duration-300 shadow-lg"
              >
                <FaGithub size={18} /> View on GitHub
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={() => paginate(-1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition"
        >
          <FaChevronLeft size={22} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition"
        >
          <FaChevronRight size={22} />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-3 mt-6">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() =>
              setCurrent([idx, idx > currentIndex ? 1 : -1])
            }
            className={`w-4 h-2 rounded-full transition ${
              idx === currentIndex ? "bg-[#ff734d] scale-110" : "bg-[#fff]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;








