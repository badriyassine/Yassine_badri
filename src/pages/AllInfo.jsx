import React, { useState, useMemo, useEffect, memo, useCallback } from "react";
import {
  FaArrowLeft,
  FaGraduationCap,
  FaCertificate,
  FaBriefcase,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Background from "../components/Background";

const allInfo = [
  // EDUCATION 
  {
    id: 1,
    title: "Specialized Technician in Full-Stack Web Development",
    type: "diploma",
    institution:
      "Institut Spécialisé de Technologie Appliquée_Al Oubour Tantan",
    location: "Tan-Tan, Morocco",
    date: "2024 - Present",
    description:
      "Currently studying full-stack web development with a focus on both front-end and back-end technologies, databases, and modern web frameworks.",
    status: "current",
    category: "education",
  },
  {
    id: 2,
    title: "Bachelor's Degree in Physical Sciences",
    type: "degree",
    institution: "Ibn Batouta High School",
    location: "Tan-Tan, Morocco",
    date: "2022 - 2023",
    description:
      "Completed a degree in Physical Sciences with core studies in physics and mathematics.",
    status: "completed",
    category: "education",
  },


];

const AllInfo = () => {
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

  // Filter info based on active filter
  const filteredInfo = useMemo(() => {
    if (activeFilter === "all") {
      return allInfo;
    }
    return allInfo.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const filterOptions = [
    {
      value: "all",
      label: "All Information",
      mobileLabel: "All",
      count: allInfo.length,
    },
    {
      value: "experience",
      label: "Experience",
      mobileLabel: "Exp",
      count: allInfo.filter((item) => item.category === "experience").length,
    },
    {
      value: "education",
      label: "Education",
      mobileLabel: "Education",
      count: allInfo.filter((item) => item.category === "education").length,
    },
    {
      value: "certification",
      label: "Certifications",
      mobileLabel: "Certs",
      count: allInfo.filter((item) => item.category === "certification").length,
    },
  ];

  const getIcon = (type) => {
    switch (type) {
      case "diploma":
        return <FaGraduationCap className="w-6 h-6" />;
      case "degree":
        return <FaGraduationCap className="w-6 h-6" />;
      case "certificate":
        return <FaCertificate className="w-6 h-6" />;
      case "experience":
        return <FaBriefcase className="w-6 h-6" />;
      default:
        return <FaGraduationCap className="w-6 h-6" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "current":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "completed":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

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
              All About <span className="text-[#ff734d]">Me</span>
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
              {filteredInfo.length}
            </span>{" "}
            of{" "}
            <span className="text-white font-semibold">{allInfo.length}</span>{" "}
            items
          </p>
        </motion.div>

        {/* Info Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {filteredInfo.length > 0 ? (
            filteredInfo.map((item) => (
              <div
                key={item.id}
                className="group bg-white/5 border border-white/20 rounded-[15px] overflow-hidden transition-all duration-500 hover:border-[#ff734d] hover:shadow-[0_0_30px_rgba(255,115,77,0.3)] cursor-pointer flex flex-col h-full hover:scale-105"
              >
                {/* Item Header */}
                <div className="p-6 pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-[#ff734d] group-hover:text-white transition-colors duration-300">
                      {getIcon(item.type)}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status === "current" ? "Current" : "Completed"}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff734d] transition-colors duration-300">
                    {item.title}
                  </h3>

                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">
                        {item.institution || item.company}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="w-3 h-3" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                {/* Item Description */}
                <div className="px-6 pb-6 flex-grow">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
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
                  No Information Found
                </h3>
                <p className="text-gray-400 mb-6">
                  No items match the current filter. Try selecting a different
                  filter option.
                </p>
                <button
                  onClick={() => setActiveFilter("all")}
                  className="bg-[#ff734d] hover:bg-[#ff734d]/80 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 cursor-pointer"
                >
                  Show All Information
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

export default memo(AllInfo);
