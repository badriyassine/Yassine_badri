import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "freelance",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! I will get back to you soon.");
    setFormData({ name: "", email: "", type: "freelance", message: "" });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-transparent"
    >
      {/* Available for work title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-6"
      >
        <span className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></span>
        <h4 className="text-green-500 font-semibold text-lg">
          Available for Work
        </h4>
      </motion.div>

      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-5xl font-bold text-white mb-3"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="text-gray-400 text-center mt-2 mb-12 max-w-3xl"
      >
        Whether you’re a client looking for freelance work or a company looking
        to hire, I’m open to discussing your project or career opportunity.
        Let’s connect!
      </motion.p>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-5 mb-12 max-w-4xl w-full justify-around"
      >
        {/* Left - Email */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-2 ">
          <div className="flex flex-col items-center text-white gap-2 ">
            <FaEnvelope className="text-white hover:text-[#ff734d] transition text-xl cursor-pointer" />
            <span className="text-sm md:text-base ">
              yassine.badrii18@gmail.com
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-500"></div>

        {/* Mid - Location */}
        <div className="flex-1 flex flex-col items-center gap-2">
          <div className="flex flex-col items-center text-white gap-2">
            <FaMapMarkerAlt className="text-white hover:text-[#ff734d] transition text-xl cursor-pointer" />
            <span className="text-sm md:text-base">Morocco</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-500"></div>

        {/* Right - Phone */}
        <div className="flex-1 flex flex-col items-center md:items-start gap-2">
          <div className="flex flex-col items-center text-white gap-2">
            <FaPhoneAlt className="text-white hover:text-[#ff734d] transition text-xl cursor-pointer" />
            <span className="text-sm md:text-base">+212 723 509 769</span>
          </div>
        </div>
      </motion.div>

      {/* Social Media Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex gap-6 mb-12 text-white text-2xl"
      >
        <a
          href="https://www.linkedin.com/in/yassine-badri-0279a7342/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff734d] transition-colors"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/yassinebadri_dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff734d] transition-colors"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/yassine_o2"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff734d] transition-colors"
        >
          <FaXTwitter />
        </a>
        <a
          href="https://github.com/badriyassine"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff734d] transition-colors"
        >
          <FaGithub />
        </a>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-3xl bg-white/5 border border-white/20 rounded-2xl p-8 flex flex-col gap-6 shadow-lg"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff734d]"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff734d]"
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
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
          rows={6}
          required
          className="w-full p-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff734d]"
        />

        <button
          type="submit"
          className="w-full py-4 bg-[#ff734d] text-white font-semibold rounded-lg shadow-lg hover:bg-[#ff734d]/80 transition-all duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
