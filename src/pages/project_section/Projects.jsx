import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    name: "Motary – Online Car Store",
    image: "/images/projects/Motary.png",
    mobileImage: "/images/projects/Motary2.png",
    description:
      "Motary is an online car store I built for browsing and buying vehicles. It offers a clean design and smooth user experience to make car shopping easier.",
    technologies: ["React", "TypeScript", "Express", "MongoDB"],
    github: "https://github.com/badriyassine/Motary",
  },
  {
    name: "InventoryPro – Simple Inventory Tracker",
    image: "/images/projects/InventoryPro.png",
    mobileImage: "/images/projects/InventoryPro2.png",
    description:
      "InventoryPro is a simple app I built to track products and stock. It keeps everything organized while showing real-time updates.",
    technologies: ["React", "TailwindCSS", "PHP", "MySQL"],
    github: "https://github.com/badriyassine/InventoryPro",
  },
  {
    name: "Goldbike – Online Bike Store",
    image: "/images/projects/Goldbike.png",
    mobileImage: "/images/projects/Goldbike2.png",
    description:
      "Goldbike is a modern bike store UI design I created to showcase clean layouts and smooth shopping flow. It focuses on a stylish look and user-friendly experience.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/badriyassine/Goldbike",
  },
];

const Projects = ({ id = "projects" }) => {
  // safer init for environments without window (SSR)
  const [[currentIndex, direction], setCurrent] = useState([0, 0]);
  const [tapped, setTapped] = useState(false);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth <= 637 : false
  );

  // Detect screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 637);
    window.addEventListener("resize", handleResize);
    // set initial in case it changed after mount
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const project = projects[currentIndex];
  const displayImage = isMobile ? project.mobileImage : project.image;

  const paginate = (dir) => {
    const newIndex = (currentIndex + dir + projects.length) % projects.length;
    setCurrent([newIndex, dir]);
    setTapped(false);
  };

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir < 0 ? 300 : -300, opacity: 0 }),
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id={id} className="flex flex-col items-center mt-20 px-4 w-full">
      {/* Section Title */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-10"
      >
        <h2 className="text-5xl font-bold mb-3 text-white text-center">
          Featured Work
        </h2>
        <p className="text-gray-400 text-center mt-2 mb-16 max-w-3xl">
          Explore my featured work — each project highlights unique challenges,
          clean design, and powerful solutions.
        </p>
      </motion.div>

      {/* Project Carousel */}
      <div className="relative w-full max-w-6xl h-[500px] md:h-[650px] overflow-hidden  shadow-xl">
        <AnimatePresence custom={direction} initial={false}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "tween", duration: 0.6 }}
            className="absolute w-full h-full rounded-xl overflow-hidden"
          >
            {/* Project Image */}
            <img
              src={displayImage}
              alt={project.name}
              className="w-full h-full object-cover"
              onClick={() => setTapped(!tapped)}
            />

            {/* Overlay Info */}
            <motion.div
              className={`absolute inset-0 bg-black/80 flex flex-col justify-center items-center text-center p-6 transition-opacity duration-300 ${
                tapped ? "opacity-100" : "opacity-0"
              } md:hover:opacity-100`}
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.name}
              </h3>
              <p className="text-gray-300 max-w-2xl mb-4">
                {project.description}
              </p>
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

            {/* Mobile/Tablet Controls */}
            <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10">
              <button
                onClick={() => paginate(-1)}
                className="bg-black/50 p-2 rounded-full text-white  hover:bg-black/70 transition"
              >
                <FaChevronLeft size={18} />
              </button>

              <button
                onClick={() => setTapped(!tapped)}
                className="px-4 py-2 bg-[#f5f5f5] text-[#ff734d] rounded-full shadow-lg transition hover:bg-[#f5f5f5]/80"
              >
                {tapped ? "Hide" : "Show"}
              </button>

              <button
                onClick={() => paginate(1)}
                className="bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition"
              >
                <FaChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Desktop Navigation Buttons */}
        <button
          onClick={() => paginate(-1)}
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full cursor-pointer text-white hover:bg-black/70 transition"
        >
          <FaChevronLeft size={22} />
        </button>
        <button
          onClick={() => paginate(1)}
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full cursor-pointer text-white hover:bg-black/70 transition"
        >
          <FaChevronRight size={22} />
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="flex gap-3 mt-6">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent([idx, idx > currentIndex ? 1 : -1])}
            className={`w-4 h-2 rounded-full transition ${
              idx === currentIndex ? "bg-[#ff734d] scale-110" : "bg-[#fff]"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
