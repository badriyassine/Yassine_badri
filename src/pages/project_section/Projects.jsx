import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";

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
    images: ["/projects/inventory1.png", "/projects/inventory2.png"],
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
    <div className="flex flex-col items-center mt-20 px-4 w-full">
      {/* Section Title */}
      <h2 className="text-5xl font-bold mb-1 text-white text-center">
        Projects
      </h2>
      <p className="text-gray-400 text-center mt-2 mb-16 max-w-2xl">
        Explore my featured work — each project highlights unique challenges,
        clean design, and powerful solutions.
      </p>

      {/* Project Card (Cross Layout) */}
      <div className="relative w-full max-w-4xl mt-10">
        {/* Title */}
        <div className="absolute -top-13 left-1/2 -translate-x-1/2 bg-white/10 px-6 py-2  rounded-xl border border-white/20 backdrop-blur-lg">
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
        </div>

        {/* Slider */}
        <div className="relative bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden">
          <img
            src={project.images[0]} // always show first image of project
            alt="project screenshot"
            className="w-full h-[500px] object-cover" // <-- taller slider
          />
          {/* Controls */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
          >
            <FaChevronRight />
          </button>
        </div>

        {/* Description */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 bg-white/10 px-8 py-6 rounded-xl border border-white/20 backdrop-blur-lg w-3/4 text-center">
          <p className="text-gray-300">{project.description}</p>
          {/* Technologies */}
          <div className="flex flex-wrap gap-3 mt-4 justify-center">
            {project.technologies.map((tech, t) => (
              <span
                key={t}
                className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm"
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
            className="mt-6 inline-flex items-center gap-2 px-5 py-2 bg-gray-800 hover:bg-gray-700 rounded-xl text-white transition-all duration-300"
          >
            <FaGithub /> View on GitHub
          </a>
        </div>
      </div>

      {/* Switch Projects Dots */}
      <div className="flex gap-4 mt-32">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

