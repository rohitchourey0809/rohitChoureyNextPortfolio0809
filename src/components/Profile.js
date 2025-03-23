"use client";

import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImage from "../utils/ResumeProfilePhotos.png";

const home = {
  name: "Rohit Chourey",
  role: "Full Stack Developer",
  resume: "https://drive.google.com/uc?id=1GBUXE__uh-8ca3UH-BJPZne1HlK0rRst",
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
    <section
      id="profile"
      className="flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-20 md:py-24 relative"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] bg-blue-500 opacity-30 blur-3xl"></div>

      {/* Glassmorphic Card */}
      <div className="relative bg-gray-800/40 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-gray-700 flex flex-col items-center">
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
          <button
            onClick={handleResumeClick}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Resume 📄
          </button>

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
      </div>
    </section>
  );
}
