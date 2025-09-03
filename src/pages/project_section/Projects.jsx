import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Hotel Reservation App",
    images: ["/projects/hotel1.png", "/projects/hotel2.png", "/projects/hotel3.png"],
    description:
      "A hotel reservation system built with React and PHP, featuring dynamic room availability, admin dashboard, and user booking flow.",
    technologies: ["React", "TailwindCSS", "PHP", "MySQL"],
    github: "https://github.com/yourusername/hotel-app",
  },
  {
    name: "Inventory Management",
    images: ["/src/assets/images/projects/Capture d’écran 2025-07-20 202354.png", "/src/assets/images/projects/Capture d’écran 2025-07-13 035015.png"],
    description:
      "A product management dashboard where each user can add, edit, and track their products with real-time stats.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/inventory-app",
  },
  {
    name: "Portfolio Website",
    images: ["/projects/portfolio1.png", "/projects/portfolio2.png"],
    description:
      "A modern personal portfolio built with React and TailwindCSS showcasing my skills and projects.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () =>
    setCurrentIndex((prev) => (prev + 1) % projects.length);

  const prevProject = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );

  const project = projects[currentIndex];

  return (
    <motion.div
      className="flex flex-col items-center mt-20 px-4 w-full"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <h2 className="text-5xl font-bold mb-1 text-white text-center">
        Projects
      </h2>
      <p className="text-gray-400 text-center mt-2 mb-16 max-w-3xl">
        Explore my featured work — each project highlights unique challenges,
        clean design, and powerful solutions.
      </p>

      {/* Project Card */}
      <div className="relative w-full max-w-6xl mt-10">
        {/* Title */}
        <div className="absolute -top-8 z-30 left-1/2 -translate-x-1/2 bg-gradient-to-b from-black/60 to-black/30 px-8 py-3 rounded-xl border border-white/20 backdrop-blur-lg shadow-lg">
          <h3 className="text-2xl font-bold text-white">{project.name}</h3>
        </div>

        {/* Image */}
        <div className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden">
          <img
            src={project.images[0]}
            alt="project screenshot"
            className="w-full h-[550px] object-cover"
          />
          {/* Controls */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition"
          >
            <FaChevronLeft size={22} />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition"
          >
            <FaChevronRight size={22} />
          </button>
        </div>

        {/* Description */}
        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 bg-gradient-to-b from-black/60 to-black/30 px-10 py-8 rounded-xl border border-white/20 backdrop-blur-lg w-[85%] text-center shadow-xl">
          <p className="text-white text-lg">{project.description}</p>
          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mt-5 justify-center">
            {project.technologies.map((tech, t) => (
              <span
                key={t}
                className="px-4 py-2 bg-white/10 text-white rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          {/* GitHub Button */}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-xl text-white transition-all duration-300"
          >
            <FaGithub size={20} /> View on GitHub
          </a>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-4 mt-36">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-4 h-4 rounded-full transition ${
              idx === currentIndex ? "bg-white scale-110" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;



