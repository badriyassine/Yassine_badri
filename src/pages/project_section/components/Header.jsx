import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = ({ onShowAll, showAll }) => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center mb-15 gap-4 sm:gap-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div>
        <h2 className="text-2xl font-bold">
          Selection of recent <br />{" "}
          <span className="text-[#ff734d] text-3xl">Work.</span>
        </h2>
      </div>
      <div className="flex space-x-3">
        <Link
          to="/projects"
          className="flex items-center gap-2 bg-[#ff734d] hover:bg-[#ff734d]/50 text-white font-medium px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95"
        >
          All Projects
        </Link>
        <Link to="/projects" className="flex items-center gap-2 bg-[#ff734d] hover:bg-[#ff734d]/50 text-white font-medium px-3 py-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5 transition-transform duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default Header;
