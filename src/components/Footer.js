"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa";


export default function Footer() {

  return (

    <footer
      className="
      relative
      bg-[#050816]
      text-white
      border-t
      border-white/10
      overflow-hidden
      "
    >


      {/* Glow */}

      <div
        className="
        absolute
        left-1/2
        -translate-x-1/2
        bottom-0
        w-72
        h-72
        bg-blue-500/20
        blur-[100px]
        "
      />



      <motion.div

        initial={{
          opacity: 0,
          y: 20
        }}

        whileInView={{
          opacity: 1,
          y: 0
        }}

        viewport={{
          once: true
        }}

        className="
        relative
        max-w-7xl
        mx-auto
        px-6
        py-10
        text-center
        "

      >


        <h2

          className="
          text-2xl
          font-bold
          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-purple-500
          bg-clip-text
          text-transparent
          "

        >

          Rohit Chourey

        </h2>



        <p
          className="
          text-gray-400
          mt-2
          "
        >

          Full Stack Developer | React.js | Next.js | Node.js

        </p>




        {/* Social Links */}

        <div

          className="
          flex
          justify-center
          gap-6
          mt-6
          "

        >

          <a

            href="https://github.com/rohitchourey0809"

            target="_blank"

            rel="noopener noreferrer"

            className="
            text-gray-400
            hover:text-white
            text-2xl
            transition
            hover:scale-110
            "

          >

            <FaGithub />

          </a>




          <a

            href="https://www.linkedin.com/in/rohitchourey0809/"

            target="_blank"

            rel="noopener noreferrer"

            className="
            text-blue-400
            hover:text-blue-500
            text-2xl
            transition
            hover:scale-110
            "

          >

            <FaLinkedin />

          </a>


        </div>





        <div

          className="
          mt-8
          pt-5
          border-t
          border-white/10
          text-sm
          text-gray-500
          "

        >

          <p>

            © {new Date().getFullYear()} Rohit Chourey.
            All rights reserved.

          </p>


          <p

            className="
            flex
            justify-center
            items-center
            gap-2
            mt-2
            "

          >

            Built with

            <FaHeart className="text-red-500" />

            using Next.js & React


          </p>


        </div>



      </motion.div>



    </footer>

  );

}