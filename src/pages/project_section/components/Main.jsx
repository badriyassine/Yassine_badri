import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaInfo,
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
} from "react-icons/fa";

const allProjects = [
  {
    id: 1,
    title: "InventoryPro",
    description:
      "A comprehensive inventory management system with real-time tracking, reporting, and analytics features.",
    image: "/images/projects/InventoryPro.png",
    githubUrl: "https://github.com/badriyassine/inventorypro",
    demoUrl: "https://inventorypro-demo.com",
    tech: ["React", "Tailwind", "php", "MySQL"],
  },
  {
    id: 2,
    title: "Motary",
    description:
      "A modern dashboard application for monitoring and managing various business metrics and KPIs.",
    image: "/images/projects/Motary.png",
    githubUrl: "https://github.com/badriyassine/motary",
    demoUrl: "https://motary-demo.com",
    tech: ["React", "TypeScript", "Tailwind", "Express.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Goldbike",
    description:
      "A full-stack e-commerce platform for bike sales with user authentication, payment integration, and admin dashboard.",
    image: "/images/projects/Goldbike.png",
    githubUrl: "https://github.com/badriyassine/goldbike",
    demoUrl: "https://goldbike-demo.com",
    tech: ["Html", "Css"],
  },
  {
    id: 1,
    title: "InventoryPro",
    description:
      "A comprehensive inventory management system with real-time tracking, reporting, and analytics features.",
    image: "/images/projects/InventoryPro.png",
    githubUrl: "https://github.com/badriyassine/inventorypro",
    demoUrl: "https://inventorypro-demo.com",
    tech: ["React", "Tailwind", "php", "MySQL"],
  },
  {
    id: 2,
    title: "Motary",
    description:
      "A modern dashboard application for monitoring and managing various business metrics and KPIs.",
    image: "/images/projects/Motary.png",
    githubUrl: "https://github.com/badriyassine/motary",
    demoUrl: "https://motary-demo.com",
    tech: ["React", "TypeScript", "Tailwind", "Express.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Goldbike",
    description:
      "A full-stack e-commerce platform for bike sales with user authentication, payment integration, and admin dashboard.",
    image: "/images/projects/Goldbike.png",
    githubUrl: "https://github.com/badriyassine/goldbike",
    demoUrl: "https://goldbike-demo.com",
    tech: ["Html", "Css"],
  },
];

const Main = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [projectsPerView, setProjectsPerView] = useState(3);
  const projects = allProjects.slice(0, 6);

  // Update projects per view based on screen size
  useEffect(() => {
    const updateProjectsPerView = () => {
      if (window.innerWidth < 640) {
        setProjectsPerView(1); // Mobile: 1 project
      } else if (window.innerWidth < 900) {
        setProjectsPerView(2); // Tablet: 2 projects
      } else {
        setProjectsPerView(3); // Desktop: 3 projects
      }
    };

    updateProjectsPerView();
    window.addEventListener("resize", updateProjectsPerView);
    return () => window.removeEventListener("resize", updateProjectsPerView);
  }, []);

  // Reset current slide when projects per view changes
  useEffect(() => {
    const maxSlide = projects.length - projectsPerView;
    if (currentSlide > maxSlide) {
      setCurrentSlide(maxSlide);
    }
  }, [projectsPerView, currentSlide, projects.length]);

  const toggleProjectInfo = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          const maxSlide = projects.length - projectsPerView;
          return prev >= maxSlide ? 0 : prev + 1;
        });
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, projects.length, projectsPerView]);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = projects.length - projectsPerView;
      return prev >= maxSlide ? 0 : prev + 1;
    });
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const maxSlide = projects.length - projectsPerView;
      return prev <= 0 ? maxSlide : prev - 1;
    });
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
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
      {/* Modern Carousel Container */}
      <div className="relative group">
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={`absolute left-4 z-50 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer hidden md:block ${
            isAutoPlaying ? "opacity-0" : "opacity-100"
          }`}
          style={{ top: "calc(40% + 10px)", transform: "translateY(-50%)" }}
        >
          <FaChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={nextSlide}
          className={`absolute right-4 z-50 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 cursor-pointer hidden md:block ${
            isAutoPlaying ? "opacity-0" : "opacity-100"
          }`}
          style={{ top: "calc(40% + 10px)", transform: "translateY(-50%)" }}
        >
          <FaChevronRight className="w-4 h-4" />
        </button>

        {/* Carousel Track */}
        <div className="overflow-hidden relative">
          {/* Desktop Blur Overlays */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

          {/* Mobile Layout - Grid Cards */}
          <div className="sm:hidden px-4">
            <div className="grid grid-cols-1 gap-4">
              {projects.slice(0, 3).map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-[24px] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-[#ff734d]/30 hover:border-[#ff734d] transition-all duration-500 backdrop-blur-sm"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Mobile Header */}
                  <div className="px-6 py-4 border-b border-white/10">
                    <h3 className="text-white text-lg font-bold">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#ff734d]/20 text-[#ff734d] text-xs rounded-full border border-[#ff734d]/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 4 && (
                        <span className="px-3 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full font-medium">
                          +{project.tech.length - 4}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#ff734d] hover:bg-[#ff734d]/80 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-4 h-4" />
                        Code
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-transparent border-2 border-[#ff734d] text-[#ff734d] hover:bg-[#ff734d] hover:text-white px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tablet Layout - Grid Cards */}
          <div className="hidden sm:block lg:hidden px-6">
            <div className="grid grid-cols-2 gap-6">
              {projects.slice(0, 4).map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-white/8 to-white/3 border border-white/30 rounded-[20px] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-[#ff734d]/25 hover:border-[#ff734d] transition-all duration-500 backdrop-blur-sm"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Tablet Header */}
                  <div className="px-5 py-4 border-b border-white/10">
                    <h3 className="text-white text-base font-bold truncate">
                      {project.title}
                    </h3>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>

                  {/* Project Info */}
                  <div className="p-5">
                    <p className="text-gray-300 text-xs mb-3 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-[#ff734d]/20 text-[#ff734d] text-xs rounded-full border border-[#ff734d]/30 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full font-medium">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#ff734d] hover:bg-[#ff734d]/80 text-white px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 hover:scale-105 active:scale-95 shadow-lg"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="w-3 h-3" />
                        Code
                      </a>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-transparent border-2 border-[#ff734d] text-[#ff734d] hover:bg-[#ff734d] hover:text-white px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 hover:scale-105 active:scale-95"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="w-3 h-3" />
                        Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Three Cards */}
          <div className="hidden lg:block">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `-${currentSlide * (100 / projectsPerView)}%`,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              style={{
                width: `${(projects.length / projectsPerView) * 100}%`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-white/5 border-2 border-white rounded-[15px] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-[#ff734d]/20 hover:border-[#ff734d] transition-all duration-500 flex-shrink-0"
                  style={{ width: `${100 / projectsPerView}%` }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Browser Window Bar */}
                  <div className="bg-gray-800/90 px-4 py-2 flex items-center gap-2 border-b border-gray-600 group-hover:bg-gray-700/90 transition-colors duration-300">
                    <div className="flex gap-2">
                      <motion.div
                        className="w-3 h-3 rounded-full bg-red-500"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      ></motion.div>
                      <motion.div
                        className="w-3 h-3 rounded-full bg-yellow-500"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      ></motion.div>
                      <motion.div
                        className="w-3 h-3 rounded-full bg-green-500"
                        whileHover={{ scale: 1.2 }}
                        transition={{ duration: 0.2 }}
                      ></motion.div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-gray-300 text-xs font-medium truncate group-hover:text-white transition-colors duration-300">
                        {project.title}
                      </span>
                    </div>

                    {/* Mobile Info Button */}
                    <button
                      onClick={() => toggleProjectInfo(project.id)}
                      className="md:hidden bg-[#ff734d] hover:bg-[#ff734d]/80 text-white p-1.5 rounded-full shadow-lg transition-all duration-300 z-30 hover:scale-110 active:scale-95"
                    >
                      <motion.div
                        animate={{
                          rotate: activeProject === project.id ? 180 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {activeProject === project.id ? (
                          <FaTimes className="w-3 h-3" />
                        ) : (
                          <FaInfo className="w-3 h-3" />
                        )}
                      </motion.div>
                    </button>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-[26.25rem] sm:h-[30rem] lg:h-[34rem] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />

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
                              className="flex items-center gap-2 bg-[#ff734d] hover:bg-[#ff734d]/80 text-white px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium hover:scale-105 active:scale-95"
                            >
                              <FaGithub className="w-4 h-4" />
                              Code
                            </a>
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium border border-white/30 hover:scale-105 active:scale-95"
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
                              className="flex items-center justify-center gap-2 bg-[#ff734d] hover:bg-[#ff734d]/80 text-white px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium hover:scale-105 active:scale-95"
                            >
                              <FaGithub className="w-4 h-4" />
                              View Code
                            </a>
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium border border-white/30 hover:scale-105 active:scale-95"
                            >
                              <FaExternalLinkAlt className="w-4 h-4" />
                              Live Demo
                            </a>
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Carousel Indicators - Desktop Only */}
        <div className="hidden lg:flex justify-center gap-2 mt-8">
          {Array.from({
            length: projects.length - projectsPerView + 1,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#ff734d] w-8"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Auto-play Toggle - Desktop Only */}
        <div className="hidden lg:flex justify-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="bg-[#ff734d]/20 backdrop-blur-sm hover:bg-[#ff734d]/30 text-[#ff734d] px-4 py-2 rounded-full text-sm transition-all duration-300 border border-[#ff734d]/30 hover:border-[#ff734d]/50 hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            {isAutoPlaying ? (
              <>
                <FaPause className="w-3 h-3" />
                Pause
              </>
            ) : (
              <>
                <FaPlay className="w-3 h-3" />
                Play
              </>
            )}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
