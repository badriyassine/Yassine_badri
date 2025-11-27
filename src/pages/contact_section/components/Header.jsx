import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

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
          Are you interested, <br />{" "}
          <span className="text-[#ff734d] text-3xl">Let's chat.</span>
        </h2>
      </div>
      <div className="flex space-x-3">
        <div className="flex items-center gap-2 bg-[#ff734d]  text-white font-light px-6 py-2 rounded-full transition-all duration-300 hover:bg-[#ff734d]/50">
          <div className="text-center">
            <div className="text-medium font-bold">
              {formatTime(currentTime)}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-[#ff734d] text-white font-medium px-4 py-2 rounded-full transition-all duration-300">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
  
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
