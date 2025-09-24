import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-between w-full items-start sm:items-center mb-20 gap-4 sm:gap-0"
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
          What I Use to Build in <br />{" "}
          <span className="text-[#ff734d] text-3xl">Tech.</span>
        </h2>
      </div>
      <div className=" flex space-x-3">
        <a
          href="https://github.com/badriyassine"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center  bg-[#ff734d] hover:bg-[#ff734d]/50 text-white font-medium px-6 py-2 rounded-full transition"
        >
          GitHub
        </a>
        <a
          href="https://github.com/badriyassine"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center  bg-[#ff734d] hover:bg-[#ff734d]/50 text-white font-medium px-3 py-2 rounded-full transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12a12 12 0 008.207 11.385c.6.113.793-.26.793-.577v-2.234c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.757-1.333-1.757-1.09-.746.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.494.997.107-.775.419-1.305.762-1.606-2.665-.304-5.467-1.332-5.467-5.93 0-1.31.469-2.38 1.237-3.22-.124-.303-.536-1.527.117-3.183 0 0 1.008-.323 3.301 1.23a11.49 11.49 0 016.002 0c2.293-1.553 3.3-1.23 3.3-1.23.655 1.656.243 2.88.119 3.183.77.84 1.236 1.91 1.236 3.22 0 4.61-2.806 5.624-5.478 5.921.43.371.815 1.102.815 2.222v3.293c0 .32.192.694.8.576A12.004 12.004 0 0024 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Header;
