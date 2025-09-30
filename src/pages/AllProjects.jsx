import React, { useState, useMemo, useEffect, memo, useCallback } from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Background from "../components/Background";

const allProjects = [
  {
    id: 1,
    title: "DarBooking",
    image: "/images/projects/DarBooking.png",
    description:
      "A hotel booking app with real-time reservations and admin management, built using React, Tailwind, PHP, and MySQL.",
    tech: ["React", "Tailwind", "php", "MySQL"],
    githubUrl: "https://github.com/badriyassine/DarBooking",
    demoUrl: "https://github.com/badriyassine/DarBooking",
    category: "new",
    status: "in progress",
  },
  {
    id: 2,
    title: "Motary",
    image: "/images/projects/Motary2.png",
    description:
      "A car store platform concept designed to showcase vehicles available for sale, with a clean and user-friendly interface.",
    tech: ["React", "TypeScript", "Tailwind", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/badriyassine/Motary",
    demoUrl: "https://github.com/badriyassine/Motary",
    category: "new",
    status: "completed",
  },
  {
    id: 3,
    title: "InventoryPro",
    image: "/images/projects/InventoryPro2.png",
    description:
      "A powerful web application to manage products, sales, and stock, with a visual dashboard for tracking activity.",
    tech: ["React", "Tailwind", "php", "MySQL"],
    githubUrl: "https://github.com/badriyassine/InventoryPro",
    demoUrl: "https://github.com/badriyassine/InventoryPro",
    category: "new",
    status: "completed",
  },
  {
    id: 4,
    title: "First Portfolio",
    image: "/images/projects/Portfolio.png",
    description:
      "This is my first portfolio built with React, where I share my projects and skills as I start my journey in web development.",
    tech: ["React", "Tailwind"],
    githubUrl: "https://github.com/badriyassine/Portfolio",
    demoUrl: "https://badriyassine.github.io/Portfolio/",
    category: "new",
    status: "completed",
  },
  {
    id: 5,
    title: "Goldbike",
    image: "/images/projects/Goldbike2.png",
    description:
      "home page of motorcycles store modern design created using html & css only.",
    tech: ["Html", "Css"],
    githubUrl: "https://github.com/badriyassine/Goldbike_store",
    demoUrl: "https://badriyassine.github.io/Goldbike_store/",
    category: "old",
    status: "completed",
  },
  {
    id: 6,
    title: "Dashboard design",
    image: "/images/projects/Dashboard.png",
    description:
      "A simple yet functional dashboard built using only HTML and CSS to practice layout and design.",
    tech: ["Html", "Css"],
    githubUrl: "https://github.com/badriyassine/Dashboard-design",
    demoUrl: "https://badriyassine.github.io/Dashboard-design/",
    category: "old",
    status: "completed",
  },
];

const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const location = useLocation();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  // Function to handle back navigation with scroll position restoration
  const handleBackToPortfolio = useCallback(() => {
    // Get the saved scroll position from location state
    const savedScrollPosition = location.state?.scrollPosition || 0;

    // Navigate back and restore scroll position
    window.history.back();

    // Restore scroll position after navigation
    setTimeout(() => {
      window.scrollTo({
        top: savedScrollPosition,
        left: 0,
        behavior: "smooth",
      });
    }, 100);
  }, [location.state?.scrollPosition]);

  // Filter projects based on active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return allProjects;
    }
    return allProjects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const filterOptions = [
    {
      value: "all",
      label: "All Projects",
      mobileLabel: "All",
      count: allProjects.length,
    },
    {
      value: "new",
      label: "New Projects",
      mobileLabel: "New",
      count: allProjects.filter((p) => p.category === "new").length,
    },
    {
      value: "old",
      label: "Old Projects",
      mobileLabel: "Old",
      count: allProjects.filter((p) => p.category === "old").length,
    },
  ];

  return (
    <motion.div
      className="relative min-h-screen text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Background />

      {/* Header */}
      <motion.header
        className="z-50 bg-black/20 backdrop-blur-sm sticky top-0"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBackToPortfolio}
              className="flex items-center gap-3 text-white hover:text-[#ff734d] transition-colors duration-300 cursor-pointer"
            >
              <FaArrowLeft className="w-5 h-5" />
              <span className="text-lg font-semibold">Back</span>
            </button>
            <h1 className="text-2xl font-bold">
              All My <span className="text-[#ff734d]">Projects</span>
            </h1>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <motion.main
        className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Filter Section */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setActiveFilter(option.value)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer ${
                  activeFilter === option.value
                    ? "bg-[#ff734d] text-white shadow-lg shadow-[#ff734d]/30"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20"
                }`}
              >
                <span className="text-sm sm:text-base">
                  <span className="sm:hidden">{option.mobileLabel}</span>
                  <span className="hidden sm:inline">{option.label}</span>
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-bold ${
                    activeFilter === option.value
                      ? "bg-white/20 text-white"
                      : "bg-[#ff734d]/20 text-[#ff734d]"
                  }`}
                >
                  {option.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Results Count */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-gray-300">
            Showing{" "}
            <span className="text-[#ff734d] font-semibold">
              {filteredProjects.length}
            </span>{" "}
            of{" "}
            <span className="text-white font-semibold">
              {allProjects.length}
            </span>{" "}
            projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white/5 border border-white/20 rounded-[15px] overflow-hidden transition-all duration-500 hover:border-[#ff734d] hover:shadow-[0_0_30px_rgba(255,115,77,0.3)] cursor-pointer flex flex-col h-full hover:scale-105"
              >
                {/* Project Image */}
                <div className="relative h-64 sm:h-80 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                        project.status === "completed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-[#ff734d]/20 text-[#ff734d] border border-[#ff734d]/30"
                      }`}
                    >
                      {project.status === "completed"
                        ? "Completed"
                        : "In Progress"}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff734d] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-[#ff734d]/20 text-[#ff734d] text-xs rounded-full border border-[#ff734d]/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-[#ff734d] hover:bg-[#ff734d]/80 text-white px-4 py-3 rounded-full transition-all duration-300 text-sm font-medium hover:scale-105 active:scale-95"
                    >
                      <FaGithub className="w-4 h-4" />
                      View Code
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-full transition-all duration-300 text-sm font-medium border border-white/30 hover:scale-105 active:scale-95"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="bg-white/5 border border-white/20 rounded-[15px] p-12">
                <div className="w-16 h-16 bg-gray-400/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No Projects Found
                </h3>
                <p className="text-gray-400 mb-6">
                  No projects match the current filter. Try selecting a
                  different filter option.
                </p>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="bg-[#ff734d] hover:bg-[#ff734d]/80 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Show All Projects
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Back to Portfolio Button */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <button
            onClick={handleBackToPortfolio}
            className="inline-flex items-center gap-3 bg-[#ff734d] hover:bg-[#ff734d]/80 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 font-semibold shadow-lg hover:shadow-[#ff734d]/20 cursor-pointer"
          >
            <FaArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </button>
        </motion.div>
      </motion.main>
    </motion.div>
  );
};

export default memo(AllProjects);
