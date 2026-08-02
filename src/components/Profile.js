"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import profileImage from "../utils/ResumeProfilePhotos.png";


const home = {
  name: "Rohit Chourey",
  role: "Full Stack Developer",
  resume:
    "https://drive.google.com/drive/folders/1ZHSPndp_fxwurkL9sL87q8Qqop3lWUF6?usp=drive_link",

  social: {
    github: "https://github.com/rohitchourey0809",
    linkedin:
      "https://www.linkedin.com/in/rohitchourey0809/",
  },
};


export default function Profile() {

  const {
    name,
    role,
    resume,
    social
  } = home;


  return (

    <section
      id="profile"
      className="
      relative
      min-h-screen
      flex
      items-center
      overflow-hidden
      px-6
      py-24
      bg-[#050816]
      text-white
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


      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        items-center
        relative
        "
      >



        {/* LEFT CONTENT */}

        <motion.div

          initial={{
            opacity:0,
            x:-50
          }}

          whileInView={{
            opacity:1,
            x:0
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.6
          }}

        >


          <p
            className="
            text-cyan-400
            font-semibold
            mb-4
            "
          >
            Hello, I'm 👋
          </p>


          <h1
            className="
            text-5xl
            md:text-6xl
            font-black
            leading-tight
            "
          >

            Rohit

            <span
              className="
              block
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >
              Chourey
            </span>

          </h1>



          <h2
            className="
            text-2xl
            md:text-3xl
            mt-5
            text-gray-300
            "
          >

            {role}

          </h2>



          <p
            className="
            mt-6
            text-gray-400
            max-w-xl
            leading-relaxed
            text-lg
            "
          >

            I build scalable and high-performance web
            applications using React, Next.js, Node.js,
            and modern backend technologies.
            Passionate about creating clean,
            user-focused digital experiences.

          </p>




          {/* Buttons */}

          <div
            className="
            flex
            flex-wrap
            gap-4
            mt-8
            "
          >


            <a

              href="#projects"

              className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              text-black
              font-bold
              hover:scale-105
              transition
              "

            >

              View Projects

              <FaArrowRight/>

            </a>



            <a

              href={resume}

              target="_blank"

              className="
              flex
              items-center
              gap-2
              px-6
              py-3
              rounded-xl
              border
              border-white/20
              hover:bg-white
              hover:text-black
              transition
              "

            >

              <FaDownload/>

              Resume

            </a>


          </div>




          {/* Social */}

          <div
            className="
            flex
            gap-5
            mt-8
            text-2xl
            "
          >

            <a
              href={social.github}
              target="_blank"
              className="
              text-gray-400
              hover:text-white
              transition
              "
            >
              <FaGithub/>
            </a>


            <a
              href={social.linkedin}
              target="_blank"
              className="
              text-blue-400
              hover:text-blue-500
              transition
              "
            >
              <FaLinkedin/>
            </a>

          </div>



          {/* Stats */}

          <div
            className="
            flex
            gap-8
            mt-10
            "
          >

            {[
              ["4+","Years Experience"],
              ["15+","Projects"],
              ["10+","Technologies"]
            ].map((item,index)=>(

              <div key={index}>

                <h3
                  className="
                  text-3xl
                  font-bold
                  text-cyan-400
                  "
                >
                  {item[0]}
                </h3>

                <p
                  className="
                  text-sm
                  text-gray-400
                  "
                >
                  {item[1]}
                </p>

              </div>

            ))}


          </div>


        </motion.div>





        {/* RIGHT IMAGE */}

        <motion.div

          initial={{
            opacity:0,
            scale:.8
          }}

          whileInView={{
            opacity:1,
            scale:1
          }}

          viewport={{
            once:true
          }}

          transition={{
            duration:.7
          }}

          className="
          flex
          justify-center
          relative
          "

        >



          {/* Floating Skills */}

          <motion.div

            animate={{
              y:[0,-15,0]
            }}

            transition={{
              duration:4,
              repeat:Infinity
            }}

            className="
            absolute
            top-10
            left-0
            px-4
            py-2
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            "
          >

            React ⚛️

          </motion.div>



          <motion.div

            animate={{
              y:[0,15,0]
            }}

            transition={{
              duration:5,
              repeat:Infinity
            }}

            className="
            absolute
            bottom-20
            right-0
            px-4
            py-2
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            "
          >

            Next.js ▲

          </motion.div>




          {/* Profile Image */}

          <div
            className="
            relative
            w-72
            h-72
            md:w-96
            md:h-96
            rounded-full
            overflow-hidden
            border-4
            border-cyan-400/40
            shadow-[0_0_80px_rgba(34,211,238,.25)]
            "
          >

            <Image

              src={profileImage}

              alt={name}

              fill

              className="
              object-cover
              "

            />

          </div>



        </motion.div>


      </div>


    </section>

  );
}