import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaInfo, FaTimes } from "react-icons/fa";

const allProjects = [
  {
    id: 1,
    title: "Goldbike E-commerce",
    description:
      "A full-stack e-commerce platform for bike sales with user authentication, payment integration, and admin dashboard.",
    image: "/images/projects/Goldbike.png",
    githubUrl: "https://github.com/badriyassine/goldbike",
    demoUrl: "https://goldbike-demo.com",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    id: 2,
    title: "InventoryPro Management",
    description:
      "A comprehensive inventory management system with real-time tracking, reporting, and analytics features.",
    image: "/images/projects/InventoryPro.png",
    githubUrl: "https://github.com/badriyassine/inventorypro",
    demoUrl: "https://inventorypro-demo.com",
    tech: ["Laravel", "Vue.js", "MySQL", "Chart.js"],
  },
  {
    id: 3,
    title: "Motary Dashboard",
    description:
      "A modern dashboard application for monitoring and managing various business metrics and KPIs.",
    image: "/images/projects/Motary.png",
    githubUrl: "https://github.com/badriyassine/motary",
    demoUrl: "https://motary-demo.com",
    tech: ["React", "TypeScript", "Tailwind", "D3.js"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing projects, skills, and contact information with smooth animations.",
    image: "/images/projects/Portfolio.png",
    githubUrl: "https://github.com/badriyassine/portfolio",
    demoUrl: "https://yassinebadri.dev",
    tech: ["React", "Framer Motion", "Tailwind", "Vite"],
  },
  {
    id: 5,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team collaboration, and project tracking.",
    image: "/images/projects/TaskApp.png",
    githubUrl: "https://github.com/badriyassine/taskapp",
    demoUrl: "https://taskapp-demo.com",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
  },
  {
    id: 6,
    title: "Weather Dashboard",
    description:
      "A beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/images/projects/WeatherApp.png",
    githubUrl: "https://github.com/badriyassine/weather",
    demoUrl: "https://weather-demo.com",
    tech: ["React", "OpenWeather API", "Leaflet", "Styled Components"],
  },
];

const Main = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const projects = allProjects.slice(0, 4);

  const toggleProjectInfo = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="group relative bg-white/5 border-2 border-white rounded-[15px] overflow-hidden transition-all duration-500 hover:border-[#ff734d] hover:shadow-[0_0_30px_rgba(255,115,77,0.3)] cursor-pointer"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Project Image */}
            <div className="relative h-80 sm:h-96 lg:h-[28rem] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Mobile Info Button */}
              <button
                onClick={() => toggleProjectInfo(project.id)}
                className="absolute top-3 right-3 md:hidden bg-[#ff734d] hover:bg-[#ff734d]/80 text-white p-2 rounded-full shadow-lg transition-all duration-300 z-10 hover:scale-110 active:scale-95"
              >
                <motion.div
                  animate={{ rotate: activeProject === project.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeProject === project.id ? (
                    <FaTimes className="w-4 h-4" />
                  ) : (
                    <FaInfo className="w-4 h-4" />
                  )}
                </motion.div>
              </button>

              {/* Desktop Hover Overlay */}
              {hoveredProject === project.id && (
                <div className="absolute inset-0 bg-black/85 items-center justify-center z-20 hidden md:flex">
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-4 text-sm leading-relaxed max-w-xs">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-[#ff734d]/20 text-[#ff734d] text-xs rounded-full border border-[#ff734d]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3 justify-center">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#ff734d] hover:bg-[#ff734d]/80 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 active:scale-95"
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium border border-white/30 hover:scale-105 active:scale-95"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile/Tablet Info Overlay */}
            <AnimatePresence>
              {activeProject === project.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden absolute inset-0 bg-black/95 flex items-center justify-center p-4 z-20"
                  onClick={() => toggleProjectInfo(project.id)}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="text-center relative"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Close Button */}
                    <button
                      onClick={() => toggleProjectInfo(project.id)}
                      className="absolute -top-2 -right-2 bg-[#ff734d] hover:bg-[#ff734d]/80 text-white p-2 rounded-full shadow-lg transition-all duration-300 z-30 hover:scale-110 active:scale-95"
                    >
                      <FaTimes className="w-3 h-3" />
                    </button>

                    <h3 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-200 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 justify-center mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-[#ff734d]/20 text-[#ff734d] text-xs rounded-full border border-[#ff734d]/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#ff734d] hover:bg-[#ff734d]/80 text-white px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105 active:scale-95"
                      >
                        <FaGithub className="w-4 h-4" />
                        View Code
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium border border-white/30 hover:scale-105 active:scale-95"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>

                    {/* Tap to close hint */}
                    <p className="text-gray-400 text-xs mt-4 opacity-70">
                      Tap outside to close
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Main;
