import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiLaravel,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiCanva,
  SiPostman,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJavascript,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiLinux,
  SiApple,
} from "react-icons/si";
import {
  FaComments,
  FaUsers,
  FaSearch,
  FaLanguage,
  FaFlag,
  FaWindows,
} from "react-icons/fa";
import { MdCode } from "react-icons/md";
import { VscCode } from "react-icons/vsc";

const cards = [
  {
    id: "01",
    title: "Frontend",
    desc: "Crafting beautiful and responsive user interfaces with modern web technologies",
    shapes: "frontend", // Triangle, Circle, Square for UI elements
    // Essential technologies for center display
    essentialTechs: [
      {
        name: "React",
        icon: <SiReact className="w-8 h-8 text-[#61DAFB]" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-8 h-8 text-[#3178C6]" />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" />,
      },
    ],
  },
  {
    id: "02",
    title: "Backend",
    desc: "Building robust server-side applications and APIs for scalable web solutions",
    shapes: "backend", // Server-like shapes
    // Essential technologies for center display
    essentialTechs: [
      {
        name: "Laravel",
        icon: <SiLaravel className="w-8 h-8 text-[#FF2D20]" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="w-8 h-8 text-[#000000]" />,
      },
    ],
  },
  {
    id: "03",
    title: "Database",
    desc: "Designing and managing efficient data storage solutions for optimal performance",
    shapes: "database", // Data storage shapes
    // Essential technologies for center display
    essentialTechs: [
      {
        name: "MySQL",
        icon: <SiMysql className="w-8 h-8 text-[#4479A1]" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-8 h-8 text-[#47A248]" />,
      },
    ],
  },
  {
    id: "04",
    title: "Tools & Others",
    desc: "Leveraging powerful development tools and platforms for efficient workflow",
    shapes: "tools", // Tool-like shapes
    // Essential technologies for center display
    essentialTechs: [
      {
        name: "VSCode",
        icon: <VscCode className="w-8 h-8 text-[#007ACC]" />,
      },
      {
        name: "Cursor",
        icon: <MdCode className="w-8 h-8 text-[#000000]" />,
      },
      {
        name: "UML",
        icon: <SiFigma className="w-8 h-8 text-[#F24E1E]" />,
      },
      {
        name: "Figma",
        icon: <SiFigma className="w-8 h-8 text-[#F24E1E]" />,
      },
      {
        name: "Git",
        icon: <SiGit className="w-8 h-8 text-[#F05032]" />,
      },
      {
        name: "GitHub",
        icon: <SiGithub className="w-8 h-8 text-[#181717]" />,
      },
      {
        name: "Canva",
        icon: <SiCanva className="w-8 h-8 text-[#00C4CC]" />,
      },
      {
        name: "Docker",
        icon: <SiDocker className="w-8 h-8 text-[#2496ED]" />,
      },
    ],
  },
  {
    id: "05",
    title: "Soft Skills",
    desc: "Collaborating effectively and solving complex problems through strong communication",
    shapes: "skills", // People and communication shapes
    // Essential technologies for center display
    essentialTechs: [
      {
        name: "Communication",
        icon: <FaComments className="w-8 h-8 text-[#4CAF50]" />,
      },
      {
        name: "Team Work",
        icon: <FaUsers className="w-8 h-8 text-[#2196F3]" />,
      },
      {
        name: "Problem Solving",
        icon: <FaSearch className="w-8 h-8 text-[#FF9800]" />,
      },
    ],
  },
];

// Function to render different shapes based on card type
const renderShapes = (shapeType) => {
  switch (shapeType) {
    case "frontend":
      return (
        <div className="flex flex-col gap-2">
          {/* UI Triangle */}
          <div className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-[#ff734d]"></div>
          {/* UI Circle */}
          <div className="w-4 h-4 bg-[#ff734d] rounded-full"></div>
          {/* UI Square */}
          <div className="w-3 h-3 bg-[#ff734d] rotate-45"></div>
        </div>
      );
    case "backend":
      return (
        <div className="flex flex-col gap-2">
          {/* Server Rectangle */}
          <div className="w-5 h-3 bg-[#ff734d] rounded-sm"></div>
          {/* Server Lines */}
          <div className="flex gap-1">
            <div className="w-1 h-2 bg-[#ff734d]"></div>
            <div className="w-1 h-2 bg-[#ff734d]"></div>
            <div className="w-1 h-2 bg-[#ff734d]"></div>
          </div>
          {/* Server Circle */}
          <div className="w-3 h-3 bg-[#ff734d] rounded-full"></div>
        </div>
      );
    case "database":
      return (
        <div className="flex flex-col gap-2">
          {/* Database Cylinder */}
          <div className="w-4 h-3 bg-[#ff734d] rounded-t-full rounded-b-full"></div>
          {/* Data Lines */}
          <div className="flex flex-col gap-1">
            <div className="w-4 h-0.5 bg-[#ff734d]"></div>
            <div className="w-4 h-0.5 bg-[#ff734d]"></div>
          </div>
          {/* Data Square */}
          <div className="w-3 h-2 bg-[#ff734d] rounded-sm"></div>
        </div>
      );
    case "tools":
      return (
        <div className="flex flex-col gap-2">
          {/* Tool Wrench */}
          <div className="w-4 h-1 bg-[#ff734d] rounded-full"></div>
          {/* Tool Square */}
          <div className="w-3 h-3 bg-[#ff734d] rotate-45"></div>
          {/* Tool Circle */}
          <div className="w-3 h-3 bg-[#ff734d] rounded-full"></div>
          {/* Tool Triangle */}
          <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[10px] border-l-transparent border-r-transparent border-b-[#ff734d]"></div>
        </div>
      );
    case "skills":
      return (
        <div className="flex flex-col gap-2">
          {/* People Circle */}
          <div className="w-4 h-4 bg-[#ff734d] rounded-full"></div>
          {/* Communication Lines */}
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-[#ff734d] rounded-full"></div>
            <div className="w-1 h-1 bg-[#ff734d] rounded-full"></div>
            <div className="w-1 h-1 bg-[#ff734d] rounded-full"></div>
          </div>
          {/* Language Symbol */}
          <div className="w-3 h-2 bg-[#ff734d] rounded-sm"></div>
        </div>
      );
    default:
      return null;
  }
};

const Main = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [clickedCard, setClickedCard] = useState(null);

  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
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
      {cards.map((card, index) => (
        <div
          key={index}
          className={`group relative border h-48 sm:h-56 lg:h-60 rounded-2xl p-4 sm:p-6 transition-all duration-300 bg-transparent flex flex-col justify-between hover:border-[#ff734d] hover:shadow-[#ff734d]/20 hover:shadow-lg cursor-pointer ${
            clickedCard === index
              ? "border-[#ff734d] shadow-[#ff734d]/20 shadow-lg"
              : "border-white"
          } ${card.id === "04" ? "sm:col-span-2 lg:col-span-2" : ""}`}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => {
            if (window.innerWidth < 1024) {
              // Toggle click effect for mobile and tablet
              setClickedCard(clickedCard === index ? null : index);
            }
          }}
        >
          {/* ID Number */}
          <span
            className={`font-bold text-2xl sm:text-3xl transition-colors duration-300 ${
              hoveredCard === index || clickedCard === index
                ? "text-[#ff734d]"
                : "text-gray-300"
            }`}
          >
            {card.id}
          </span>

          {/* Decorative Shapes - Top Right */}
          <div
            className={`absolute top-4 right-4 transition-all duration-500 ${
              hoveredCard === index || clickedCard === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-75"
            }`}
          >
            {renderShapes(card.shapes)}
          </div>

          {/* Title and Description */}
          <div
            className={`mt-4 transition-all duration-500 ${
              hoveredCard === index || clickedCard === index
                ? "transform -translate-y-3"
                : ""
            }`}
          >
            <h3
              className={`font-bold text-base sm:text-lg transition-colors duration-300 ${
                hoveredCard === index || clickedCard === index
                  ? "text-[#ff734d]"
                  : "text-white"
              }`}
            >
              {card.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              <span className="block xl:hidden">
                {card.id === "01"
                  ? "Building modern user interfaces"
                  : card.id === "02"
                  ? "Creating robust server applications"
                  : card.id === "03"
                  ? "Managing data efficiently"
                  : card.id === "04"
                  ? "Using powerful development tools"
                  : card.id === "05"
                  ? "Working well with teams"
                  : card.desc}
              </span>
              <span className="hidden xl:block">{card.desc}</span>
            </p>
          </div>

          {/* Essential Technologies - Center Display */}
          <div
            className={`flex justify-center items-end flex-1 transition-all duration-500 pb-4 ${
              hoveredCard === index || clickedCard === index
                ? "transform -translate-y-3"
                : ""
            }`}
          >
            <div className="flex flex-wrap justify-center items-center gap-3">
              {card.essentialTechs.map((tech, techIndex) => (
                <div
                  key={`essential-${tech.name}-${techIndex}`}
                  className={`flex items-center justify-center ${
                    card.id === "04" &&
                    (tech.name === "GitHub" ||
                      tech.name === "Canva" ||
                      tech.name === "Docker")
                      ? "hidden sm:flex"
                      : card.id === "05" && tech.name === "Problem Solving"
                      ? "hidden lg:flex"
                      : ""
                  }`}
                >
                  <span className="text-sm text-white font-medium text-center px-3 py-1 bg-white/10 rounded-full transition-all duration-300 hover:text-[#ff734d] hover:bg-[#ff734d]/20 hover:scale-110 cursor-pointer">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Click me text for mobile and tablet */}
          <div className="absolute bottom-2 right-2 lg:hidden">
            <span className="text-xs text-gray-400 opacity-60">click me</span>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default Main;
