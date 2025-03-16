"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiChakraui,
  SiMysql,
  SiJson,
  SiAngular,
  SiReduxsaga,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "ReactJS", icon: <FaReact className="text-blue-400" /> },
    { name: "NextJS", icon: <SiNextdotjs className="text-white" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
    { name: "Redux-Saga", icon: <SiReduxsaga className="text-purple-300" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Material UI", icon: <SiChakraui className="text-blue-400" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-blue-300" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Git", icon: <FaGit className="text-orange-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "JSON-server", icon: <SiJson className="text-yellow-500" /> },
    { name: "Angular", icon: <SiAngular className="text-red-500" /> },
    { name: "SQL", icon: <FaDatabase className="text-yellow-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
  ];

  return (
    <section id="skills" className="p-8 text-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="text-4xl sm:text-5xl">{skill.icon}</div>
            <p className="mt-2 text-sm sm:text-base">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
