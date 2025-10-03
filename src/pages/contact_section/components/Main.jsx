import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Main = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "freelance",
    message: "",
  });

  const [toast, setToast] = useState({
    show: false,
    message: "",
    success: true,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Debug: Check if environment variables are set
    console.log("EmailJS Config:", {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    });

    // Debug: Check form data
    console.log("Form Data:", formData);

    // Check if any required variables are missing
    if (
      !import.meta.env.VITE_EMAILJS_SERVICE_ID ||
      !import.meta.env.VITE_EMAILJS_TEMPLATE_ID ||
      !import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ) {
      setToast({
        show: true,
        message: "EmailJS not configured. Please set up environment variables.",
        success: false,
      });
      setTimeout(
        () => setToast({ show: false, message: "", success: true }),
        4000
      );
      return;
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          project_type: formData.type,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("EmailJS Success:", response);
          setToast({
            show: true,
            message: "Message sent successfully!",
            success: true,
          });
          setFormData({ name: "", email: "", type: "freelance", message: "" });
          setTimeout(
            () => setToast({ show: false, message: "", success: true }),
            4000
          );
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setToast({
            show: true,
            message: `Error: ${
              error.text || error.message || "Something went wrong"
            }`,
            success: false,
          });
          setTimeout(
            () => setToast({ show: false, message: "", success: true }),
            4000
          );
        }
      );
  };

  return (
    <motion.div
      className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-stretch"
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
      {/* Left Side - Info and Social */}
      <div className="flex-1 space-y-6 flex flex-col justify-between h-full">
        {/* Available for work */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-3"
        >
          <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></span>
          <h4 className="text-green-500 font-semibold text-lg">
            Available for Work
          </h4>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-400 text-sm sm:text-base"
        >
          Whether you're a client looking for freelance work or a company
          looking to hire, I'm open to discussing your project or career
          opportunity. Let's connect!
        </motion.p>

        {/* Contact Info - Vertical Layout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {/* Email */}
          <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/20 rounded-xl shadow-lg hover:border-[#ff734d] hover:shadow-[#ff734d]/20 transition-all duration-300">
            <FaEnvelope className="text-white text-2xl" />
            <div>
              <span className="text-sm text-gray-300 block">Email</span>
              <span className="text-sm font-medium text-white">
                yassine.badrii18@gmail.com
              </span>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/20 rounded-xl shadow-lg hover:border-[#ff734d] hover:shadow-[#ff734d]/20 transition-all duration-300">
            <FaMapMarkerAlt className="text-white text-2xl" />
            <div>
              <span className="text-sm text-gray-300 block">Location</span>
              <span className="text-sm font-medium text-white">Morocco</span>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/20 rounded-xl shadow-lg hover:border-[#ff734d] hover:shadow-[#ff734d]/20 transition-all duration-300">
            <FaPhoneAlt className="text-white text-2xl" />
            <div>
              <span className="text-sm text-gray-300 block">Phone</span>
              <span className="text-sm font-medium text-white">
                +212 723 509 769
              </span>
            </div>
          </div>

          {/* Time Zone */}
          <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/20 rounded-xl shadow-lg hover:border-[#ff734d] hover:shadow-[#ff734d]/20 transition-all duration-300">
            <FaClock className="text-white text-2xl" />
            <div>
              <span className="text-sm text-gray-300 block">Time Zone</span>
              <span className="text-sm font-medium text-white">
                GMT+1 (Casablanca)
              </span>
            </div>
          </div>
        </motion.div>

        {/* Follow Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-white">Follow Me</h3>

          {/* Social Media - Horizontal Layout */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/yassine-badri-0279a7342/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/20 rounded-xl shadow-lg hover:border-[#ff734d] hover:shadow-[#ff734d]/20 transition-all duration-300 group"
            >
              <FaLinkedin className="text-white text-xl group-hover:text-[#ff734d] transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com/badriyassine.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/20 rounded-xl shadow-lg hover:border-[#ff734d] hover:shadow-[#ff734d]/20 transition-all duration-300 group"
            >
              <FaInstagram className="text-white text-xl group-hover:text-[#ff734d] transition-colors duration-300" />
            </a>
            <a
              href="https://github.com/badriyassine"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/20 rounded-xl shadow-lg hover:border-[#ff734d] hover:shadow-[#ff734d]/20 transition-all duration-300 group"
            >
              <FaGithub className="text-white text-xl group-hover:text-[#ff734d] transition-colors duration-300" />
            </a>
            <a
              href="https://x.com/yassine_o2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/20 rounded-xl shadow-lg hover:border-[#ff734d] hover:shadow-[#ff734d]/20 transition-all duration-300 group"
            >
              <FaXTwitter className="text-white text-xl group-hover:text-[#ff734d] transition-colors duration-300" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="flex-1 flex">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full bg-white/5 border border-white/20 rounded-2xl p-4 sm:p-6 lg:p-8 flex flex-col gap-4 sm:gap-6 shadow-lg"
        >
          {/* Form Title */}
          <div className="text-center mb-2">
            <h3 className="text-xl font-bold text-white mb-2">Get In Touch</h3>
            <p className="text-gray-400 text-sm">
              Ready to start your next project? Let's work together!
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              autoComplete="name"
              required
              className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff734d]"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              autoComplete="email"
              required
              className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff734d]"
            />
          </div>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            autoComplete="off"
            className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-[#ff734d]"
          >
            <option value="freelance">Freelance Project</option>
            <option value="job">Job Opportunity</option>
          </select>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            autoComplete="off"
            rows={6}
            required
            className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff734d]"
          />

          <button
            type="submit"
            className="w-full py-4 bg-[#ff734d] text-white cursor-pointer font-semibold rounded-lg shadow-lg hover:bg-[#ff734d]/80 transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>

      {/* Toast */}
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg text-white font-semibold text-center ${
            toast.success ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {toast.message}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Main;
