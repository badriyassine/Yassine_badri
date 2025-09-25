import React from "react";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import Background from "../components/Background";

const allProjects = [
  {
    id: 1,
    title: "Goldbike E-commerce",
    image: "/images/projects/Goldbike.png",
    description:
      "A full-stack e-commerce platform for bicycle sales with modern UI and secure payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/yassinebadri/goldbike",
    demoUrl: "https://goldbike-demo.com",
  },
  {
    id: 2,
    title: "InventoryPro Management",
    image: "/images/projects/InventoryPro.png",
    description:
      "Comprehensive inventory management system with real-time tracking and analytics dashboard.",
    tech: ["Laravel", "MySQL", "Vue.js", "Chart.js", "Bootstrap"],
    githubUrl: "https://github.com/yassinebadri/inventorypro",
    demoUrl: "https://inventorypro-demo.com",
  },
  {
    id: 3,
    title: "Motary Car Rental",
    image: "/images/projects/Motary.png",
    description:
      "Car rental platform with booking system, user authentication, and admin panel.",
    tech: ["React", "Express.js", "PostgreSQL", "JWT", "Material-UI"],
    githubUrl: "https://github.com/yassinebadri/motary",
    demoUrl: "https://motary-demo.com",
  },
  {
    id: 4,
    title: "TaskFlow Productivity",
    image: "/images/projects/Goldbike2.png",
    description:
      "Project management tool with team collaboration features and deadline tracking.",
    tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Framer Motion"],
    githubUrl: "https://github.com/yassinebadri/taskflow",
    demoUrl: "https://taskflow-demo.com",
  },
  {
    id: 5,
    title: "EduLearn Platform",
    image: "/images/projects/InventoryPro2.png",
    description:
      "Online learning management system with video streaming and progress tracking.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    githubUrl: "https://github.com/yassinebadri/edulearn",
    demoUrl: "https://edulearn-demo.com",
  },
  {
    id: 6,
    title: "HealthTracker App",
    image: "/images/projects/Motary2.png",
    description:
      "Personal health monitoring app with data visualization and goal setting.",
    tech: ["React Native", "Firebase", "Chart.js", "Expo", "Redux"],
    githubUrl: "https://github.com/yassinebadri/healthtracker",
    demoUrl: "https://healthtracker-demo.com",
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
              <span className="text-lg font-semibold">Back to Portfolio</span>
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
              className="group bg-white/5 border border-white/20 rounded-[15px] overflow-hidden transition-all duration-500 hover:border-[#ff734d] hover:shadow-[0_0_30px_rgba(255,115,77,0.3)] cursor-pointer"
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
              <div className="p-6">
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
                <div className="flex gap-3">
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
