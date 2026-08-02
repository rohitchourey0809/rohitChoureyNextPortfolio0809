"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaRocket,
  FaDatabase,
  FaLaptopCode,
} from "react-icons/fa";


export default function About() {

  const highlights = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "Building modern, responsive interfaces using React, Next.js, TypeScript and Tailwind CSS.",
    },

    {
      icon: <FaDatabase />,
      title: "Backend Development",
      description:
        "Creating scalable APIs and backend services using Node.js, Express, ASP.NET Core and databases.",
    },

    {
      icon: <FaRocket />,
      title: "Performance Focus",
      description:
        "Optimizing applications with clean architecture, reusable components and efficient data handling.",
    },

    {
      icon: <FaLaptopCode />,
      title: "Problem Solving",
      description:
        "Transforming business requirements into reliable and user-friendly digital solutions.",
    },
  ];


  return (

    <section
      id="about"
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
        right-0
        w-96
        h-96
        bg-purple-500/20
        blur-[120px]
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
        text-center
        mb-14
        "

      >

        <h2
          className="
          text-4xl
          md:text-5xl
          font-extrabold
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          "
        >
          About Me
        </h2>


        <p
          className="
          text-gray-400
          mt-4
          "
        >
          A passionate developer creating scalable web experiences.
        </p>


      </motion.div>





      {/* Main About Card */}

      <motion.div

        initial={{
          opacity:0,
          y:30
        }}

        whileInView={{
          opacity:1,
          y:0
        }}

        viewport={{
          once:true
        }}

        transition={{
          duration:.6
        }}

        className="
        relative
        max-w-5xl
        mx-auto
        p-8
        md:p-10
        rounded-3xl
        bg-white/5
        backdrop-blur-xl
        border
        border-white/10
        shadow-xl
        "

      >

        <p
          className="
          text-gray-300
          text-lg
          leading-relaxed
          "
        >

          I am a Full Stack Developer with 4+ years of experience
          building modern, scalable, and high-performance web
          applications. I specialize in React.js, Next.js,
          JavaScript, TypeScript, Node.js, and backend API
          development.

          <br/>
          <br/>

          I enjoy creating clean user interfaces, designing
          efficient backend systems, integrating APIs, and
          solving complex technical challenges with maintainable
          solutions.

          <br/>
          <br/>

          My goal is to build products that provide excellent
          user experiences while following best practices in
          performance, scalability, and code quality.

        </p>


      </motion.div>





      {/* Highlight Cards */}

      <motion.div

        initial="hidden"

        whileInView="show"

        viewport={{
          once:true
        }}

        variants={{
          hidden:{},

          show:{
            transition:{
              staggerChildren:.12
            }
          }
        }}

        className="
        max-w-6xl
        mx-auto
        mt-12
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        "

      >

        {highlights.map((item,index)=>(


          <motion.div

            key={index}

            variants={{
              hidden:{
                opacity:0,
                y:30
              },

              show:{
                opacity:1,
                y:0
              }
            }}

            whileHover={{
              y:-8
            }}

            className="
            p-6
            rounded-2xl
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            hover:border-cyan-400/40
            transition
            "

          >

            <div
              className="
              w-12
              h-12
              flex
              items-center
              justify-center
              rounded-xl
              bg-cyan-500/10
              text-cyan-400
              text-xl
              mb-5
              "
            >

              {item.icon}

            </div>



            <h3
              className="
              font-bold
              text-lg
              mb-2
              "
            >

              {item.title}

            </h3>



            <p
              className="
              text-gray-400
              text-sm
              leading-relaxed
              "
            >

              {item.description}

            </p>


          </motion.div>


        ))}


      </motion.div>



    </section>

  );
}