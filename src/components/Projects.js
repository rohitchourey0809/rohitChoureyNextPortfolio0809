"use client";
import { projects } from "@/utils/data";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import {
  SiReact,
  SiMongodb,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiRedux,
} from "react-icons/si";

const techIcons = {
  React: <SiReact className="text-blue-400" />,
  Nextjs: <SiNextdotjs className="text-white" />,
  Node: <FaCode className="text-green-400" />,
  Express: <SiExpress className="text-gray-300" />,
  MongoDB: <SiMongodb className="text-green-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  Typescript: <SiTypescript className="text-blue-500" />,
  Tailwindcss: <SiTailwindcss className="text-teal-400" />,
  Html: <SiHtml5 className="text-orange-500" />,
  Css: <SiCss3 className="text-blue-500" />,
  ReduxToolkit: <SiRedux className="text-purple-500" />,
};

export default function Projects() {
  return (
    <section id="projects" className="p-8">
      <h2 className="text-4xl font-bold text-center text-blue-400">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2"
          >
            {/* Project Image */}
            <img
              src={project.Imgproject}
              alt={project.name}
              className="w-full h-40 object-cover rounded-md"
            />

            {/* Project Title */}
            <h3 className="text-2xl font-semibold mt-4">{project.name}</h3>

            {/* Project Description */}
            <p className="text-gray-400 mt-2">{project.description}</p>

            {/* Tech Stack with Icons */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="flex items-center gap-1 bg-gray-700 px-2 py-1 rounded text-sm"
                >
                  {techIcons[tech] || <FaCode />} {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-4 flex space-x-4">
              <a
                href={project.sourceCode}
                target="_blank"
                className="flex items-center text-blue-400 hover:underline"
              >
                <FaCode className="mr-1" /> Source Code
              </a>
              <a
                href={project.livePreview}
                target="_blank"
                className="flex items-center text-green-400 hover:underline"
              >
                <FaExternalLinkAlt className="mr-1" /> Live Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
