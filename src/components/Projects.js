"use client";

import Image from "next/image";
import { projects } from "@/utils/data";
import {
  FaCode,
  FaExternalLinkAlt,
  FaGithub,
  FaStar,
} from "react-icons/fa";

import { motion } from "framer-motion";

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
  React: <SiReact />,
  Nextjs: <SiNextdotjs />,
  Node: <FaCode />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  JavaScript: <SiJavascript />,
  Typescript: <SiTypescript />,
  Tailwindcss: <SiTailwindcss />,
  Html: <SiHtml5 />,
  Css: <SiCss3 />,
  ReduxToolkit: <SiRedux />,
};



export default function Projects() {


  return (

    <section
      id="projects"
      className="
      relative
      py-24
      px-6
      bg-[#050816]
      text-white
      overflow-hidden
      "
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-cyan-500/20
        blur-[140px]
        "
      />



      {/* Heading */}

      <motion.div

        initial={{
          opacity:0,
          y:-20
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        className="
        relative
        text-center
        mb-16
        "

      >

        <h2
          className="
          text-4xl
          md:text-5xl
          font-black
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          Featured Projects
        </h2>


        <p
          className="
          mt-4
          text-gray-400
          max-w-xl
          mx-auto
          "
        >
          Real-world applications built with modern frontend,
          backend and database technologies.
        </p>


      </motion.div>





      {/* Cards */}

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        sm:grid-cols-2
        xl:grid-cols-3
        gap-8
        "
      >


      {projects.map((project,index)=>(


        <motion.article

          key={index}

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            delay:index*.12
          }}


          whileHover={{
            y:-12
          }}


          className="
          group
          relative
          rounded-3xl
          overflow-hidden
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          hover:border-cyan-400/40
          transition
          "

        >



          {/* Glow */}

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-cyan-500/10
            to-purple-500/10
            opacity-0
            group-hover:opacity-100
            transition
            "
          />




          {/* Image */}

          <div
            className="
            relative
            h-60
            overflow-hidden
            "
          >

            <Image

              src={project.Imgproject}

              alt={project.name}

              fill

              className="
              object-cover
              transition
              duration-700
              group-hover:scale-110
              "

            />


            <div
              className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/20
              to-transparent
              "
            />



            {/* Badge */}

            <span
              className="
              absolute
              top-4
              left-4
              flex
              items-center
              gap-2
              px-3
              py-1
              rounded-full
              bg-black/50
              backdrop-blur
              text-xs
              text-yellow-300
              "
            >

              <FaStar/>

              Featured

            </span>



            <span
              className="
              absolute
              top-4
              right-5
              text-5xl
              font-black
              text-white/20
              "
            >

              0{index+1}

            </span>


          </div>





          {/* Content */}

          <div
            className="
            relative
            p-6
            "
          >


            <h3

              className="
              text-2xl
              font-bold
              group-hover:text-cyan-400
              transition
              "

            >

              {project.name}

            </h3>



            <p
              className="
              mt-3
              text-sm
              text-gray-400
              leading-relaxed
              "
            >

              {project.description}

            </p>





            {/* Tech */}

            <div
              className="
              flex
              flex-wrap
              gap-2
              mt-5
              "
            >

            {project.stack.map((tech,i)=>(


              <span

                key={i}

                className="
                flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                text-xs
                bg-cyan-400/10
                border
                border-cyan-400/20
                text-cyan-300
                "

              >

                {techIcons[tech] || <FaCode/>}

                {tech}

              </span>


            ))}


            </div>





            {/* Actions */}

            <div
              className="
              flex
              gap-4
              mt-7
              "
            >


              <a

                href={project.sourceCode}

                target="_blank"

                rel="noopener noreferrer"

                className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                border
                border-white/20
                hover:bg-white
                hover:text-black
                transition
                "

              >

                <FaGithub/>

                GitHub

              </a>



              <a

                href={project.livePreview}

                target="_blank"

                rel="noopener noreferrer"

                className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-xl
                bg-gradient-to-r
                from-cyan-400
                to-blue-500
                text-black
                font-semibold
                hover:scale-105
                transition
                "

              >

                <FaExternalLinkAlt/>

                Live

              </a>


            </div>


          </div>


        </motion.article>


      ))}


      </div>


    </section>

  );

}