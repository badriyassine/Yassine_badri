// src/components/Projects.jsx
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    name: "Hotel Reservation App",
    images: [
      "/projects/hotel1.png",
      "/projects/hotel2.png",
      "/projects/hotel3.png",
    ],
    description:
      "A hotel reservation system built with React and PHP, featuring dynamic room availability, admin dashboard, and user booking flow.",
    technologies: ["React", "TailwindCSS", "PHP", "MySQL"],
    github: "https://github.com/yourusername/hotel-app",
  },
  {
    name: "Inventory Management",
    images: [
      "/projects/inventory1.png",
      "/projects/inventory2.png",
      "/projects/inventory3.png",
    ],
    description:
      "A product management dashboard where each user can add, edit, and track their products with real-time stats.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/inventory-app",
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Projects = () => {
  return (
    <div className="flex flex-col items-center mt-20 px-4 w-full">
      {/* Section Title */}
      <h2 className="text-5xl font-bold mb-1 text-white text-center">
        Projects
      </h2>
      <p className="text-gray-400 text-center mt-2 max-w-2xl">
        A selection of my featured projects showcasing skills in frontend,
        backend, and full-stack development.
      </p>

      {/* Project Cards */}
      <div className="w-full max-w-5xl mt-10 flex flex-col gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-2xl p-8 glowing-card relative z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Project Title */}
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-300 via-gray-500 to-black bg-clip-text text-transparent animate-gradient-x">
              {project.name}
            </h3>

            {/* Image Slider */}
            <Slider {...sliderSettings} className="rounded-xl overflow-hidden">
              {project.images.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="w-full h-64 object-cover rounded-xl"
                  />
                </div>
              ))}
            </Slider>

            {/* Description */}
            <p className="text-gray-300 mt-6">{project.description}</p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-3 mt-4">
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
              <FaGithub className="text-xl" /> View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
