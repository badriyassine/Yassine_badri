import React from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Background from "../components/Background";

const allProjects = [
  {
    id: 1,
    title: "Motary",
    image: "/images/projects/Motary2.png",
    description:
      "A car store platform concept designed to showcase vehicles available for sale, with a clean and user-friendly interface.",
    tech: ["React", "TypeScript", "Tailwind", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/badriyassine/Motary",
    demoUrl: "https://github.com/badriyassine/Motary",
  },
  {
    id: 2,
    title: "InventoryPro",
    image: "/images/projects/InventoryPro2.png",
    description:
      "A powerful web application to manage products, sales, and stock, with a visual dashboard for tracking activity.",
    tech: ["React", "Tailwind", "php", "MySQL"],
    githubUrl: "https://github.com/badriyassine/InventoryPro",
    demoUrl: "https://github.com/badriyassine/InventoryPro",
  },
  {
    id: 3,
    title: "My first portfolio",
    image: "/images/projects/Portfolio.png",
    description:
      "This is my first portfolio built with React, where I share my projects and skills as I start my journey in web development.",
    tech: ["React", "Tailwind"],
    githubUrl: "https://github.com/badriyassine/Portfolio",
    demoUrl: "https://github.com/badriyassine/Portfolio",
  },
  {
    id: 4,
    title: "Goldbike",
    image: "/images/projects/Goldbike2.png",
    description:
      "home page of motorcycles store modern design created using html & css only.",
    tech: ["Html", "Css"],
    githubUrl: "https://github.com/badriyassine/Goldbike_store",
    demoUrl: "https://github.com/badriyassine/Goldbike_store",
  },
  {
    id: 5,
    title: "Dashboard design",
    image: "/images/projects/Dashboard.png",
    description: "A simple yet functional dashboard built using only HTML and CSS to practice layout and design.",
    tech: ["Html", "Css"],
    githubUrl: "https://github.com/badriyassine/Dashboard-design",
    demoUrl: "https://github.com/badriyassine/Dashboard-design",
  },
];

const AllProjects = () => {
  return (
    <div className="relative min-h-screen text-white">
      <Background />

      {/* Header */}
      <header className="z-50 bg-black/20 backdrop-blur-sm sticky top-0">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-6">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-3 text-white hover:text-[#ff734d] transition-colors duration-300"
            >
              <FaArrowLeft className="w-5 h-5" />
              <span className="text-lg font-semibold">Back</span>
            </Link>
            <h1 className="text-2xl font-bold">
              All My <span className="text-[#ff734d]">Projects</span>
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-32 py-12">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white/5 border border-white/20 rounded-[15px] overflow-hidden transition-all duration-500 hover:border-[#ff734d] hover:shadow-[0_0_30px_rgba(255,115,77,0.3)] cursor-pointer flex flex-col h-full"
            >
              {/* Project Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
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
          ))}
        </div>

        {/* Back to Portfolio Button */}
        <div className="text-center mt-16">
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-[#ff734d] hover:bg-[#ff734d]/80 text-white px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 font-semibold shadow-lg hover:shadow-[#ff734d]/20"
          >
            <FaArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </main>
    </div>
  );
};

export default AllProjects;
