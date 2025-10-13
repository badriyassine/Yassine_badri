import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import logo from "../../assets/logo/Logo.png"; 

const Footer = () => {
  return (
    <footer className="bg-black/50 text-white pt-8 sm:pt-10 pb-4 sm:pb-6 px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto flex flex-col items-center gap-4 sm:gap-5"
      >
        {/* Logo */}
        <a href="#home" className="mb-3">
          <img src={logo} alt="Logo" className="h-16 object-contain" />
        </a>

        {/* Paragraph */}
        <p className="text-gray-400 text-center text-xs sm:text-sm max-w-md">
          I'm ready for hiring or job opportunities. Even if you want to ask me
          for advice, feel free to contact me. Let's connect and create
          something amazing together!
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 sm:gap-5 mt-3 sm:mt-4">
          <a
            href="https://www.linkedin.com/in/yassine-badri-0279a7342/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-xl sm:text-2xl text-white hover:text-[#ff734d] transition" />
          </a>
          <a
            href="https://www.instagram.com/badriyassine.dev"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="text-xl sm:text-2xl text-white hover:text-[#ff734d] transition" />
          </a>
          <a
            href="https://github.com/badriyassine"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="text-xl sm:text-2xl text-white hover:text-[#ff734d] transition" />
          </a>
          <a href="https://x.com/yassine_o2" target="_blank" rel="noreferrer">
            <FaXTwitter className="text-xl sm:text-2xl text-white hover:text-[#ff734d] transition" />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-4 sm:mt-6 pt-3 sm:pt-4 text-center text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} Created by{" "}
          <span className="text-[#ff734d] font-medium">Yassine Badri</span>, All
          rights reserved.
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
