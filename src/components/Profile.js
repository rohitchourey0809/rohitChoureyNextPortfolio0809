"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../utils/ResumeProfilePhotos.png";

const home = {
  name: "Rohit Chourey",
  role: "Full Stack Developer",
  resume: "https://drive.google.com/uc?id=1rQTVvJKRvHpbCehrBxjDa8CYHOQcpka1",
  social: {
    github: "https://github.com/rohitchourey0809",
    linkedin: "https://www.linkedin.com/in/rohitchourey0809/",
  },
};

export default function Profile() {
  const { name, role, resume, social } = home;

  const handleResumeClick = () => {
    window.open(resume, "_blank");
  };

  return (
    <motion.section
      id="profile"
      className="flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-20 md:py-24 relative"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Background Glow Effect */}
      <motion.div
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-blue-500 opacity-30 blur-3xl"
        aria-hidden
        animate={{ scale: [0.98, 1.05, 0.98], opacity: [0.25, 0.35, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glassmorphic Card */}
      <motion.div
        className="relative bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Profile Image */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-blue-400 shadow-md">
          <Image
            src={profileImage}
            alt="Profile"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* Introduction */}
        <h1 className="text-3xl md:text-4xl font-extrabold mt-4 text-white">
          Hello! <span className="text-blue-400">{name}</span>
        </h1>
        <h2 className="text-lg md:text-xl mt-1 text-gray-300">{role}</h2>

        {/* Buttons & Social Icons */}
        <div className="flex items-center gap-6 mt-5">
          {/* Resume Button */}
          <motion.button
            onClick={handleResumeClick}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-lg font-semibold transition-all duration-300 shadow-md"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Resume 📄
          </motion.button>

          {/* Social Links */}
          <div className="flex gap-4">
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl transition-transform transform hover:scale-110"
              >
                <FaGithub />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 text-2xl transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
