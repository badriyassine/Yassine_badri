import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo/Logo.png"; // Update path if needed

const Footer = () => {
  return (
    <footer className="bg-black/50 text-white pt-10 pb-6 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex flex-col items-center gap-5"
      >
        {/* Logo */}
        <a href="#home" className="mb-3">
          <img src={logo} alt="Logo" className="h-16 object-contain" />
        </a>

        {/* Paragraph */}
        <p className="text-gray-400 text-center text-sm max-w-md">
          I’m ready for hiring or job opportunities. Even if you want to ask me
          for advice, feel free to contact me. Let’s connect and create something
          amazing together!
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-5 mt-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl text-white hover:text-[#ff734d] transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl text-white hover:text-[#ff734d] transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="text-2xl text-white hover:text-[#ff734d] transition" />
          </a>
          <a href="https://x.com" target="_blank" rel="noreferrer">
            <FaXTwitter className="text-2xl text-white hover:text-[#ff734d] transition" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Created by{" "}
          <span className="text-[#ff734d] font-medium">Yassine Badri</span> with ❤️
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;




