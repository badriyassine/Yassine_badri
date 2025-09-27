import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full mb-20 gap-4 sm:gap-0"
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
          From Ideas to Reality
          <br /> <span className="text-[#ff734d] text-3xl">About.</span>
        </h2>
      </div>
      <div className="flex space-x-3">
        <a
          href="/YASSINE_BADRI_CV.pdf"
          download="Yassine_Badri_CV.pdf"
          className="bg-[#ff734d] text-white cursor-pointer font-medium px-6 py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-[#ff734d]/50 transition"
        >
          Resume
        </a>
        <a
          className="bg-[#ff734d] text-white cursor-pointer font-medium px-3 py-2 rounded-full flex items-center gap-2 shadow-md hover:bg-[#ff734d]/50 transition"
          href="/YASSINE_BADRI_CV.pdf"
          download="Yassine_Badri_CV.pdf"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
