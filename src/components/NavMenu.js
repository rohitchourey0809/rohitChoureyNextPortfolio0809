"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import Link from "next/link";

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });

      setIsOpen(false);
    }
  }, []);


  const navLinks = [
    {
      id: "profile",
      label: "About",
    },
    {
      id: "skills",
      label: "Skills",
    },
    {
      id: "work-experience",
      label: "Experience",
    },
    {
      id: "projects",
      label: "Projects",
    },
  ];


  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}

      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      backdrop-blur-xl
      bg-black/40
      border-b
      border-white/10
      "
    >

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        "
      >


        {/* Logo */}
        <Link
          href="/"
          className="
          flex
          items-center
          gap-3
          group
          "
        >

          <div
            className="
            w-11
            h-11
            rounded-2xl
            bg-gradient-to-br
            from-cyan-400
            via-blue-500
            to-purple-600
            flex
            items-center
            justify-center
            text-black
            font-black
            text-lg
            shadow-lg
            group-hover:scale-110
            transition
            "
          >
            RC
          </div>


          <div>
            <h1
              className="
              text-white
              font-bold
              text-lg
              "
            >
              Rohit Chourey
            </h1>

            <p
              className="
              text-xs
              text-gray-400
              "
            >
              Full Stack Developer
            </p>
          </div>

        </Link>



        {/* Desktop Menu */}
        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          "
        >

          <ul
            className="
            flex
            gap-7
            "
          >
            {navLinks.map((item) => (

              <li key={item.id}>

                <button
                  onClick={() =>
                    scrollToSection(item.id)
                  }

                  className="
                  relative
                  text-gray-300
                  hover:text-white
                  transition
                  group
                  "
                >

                  {item.label}


                  <span
                    className="
                    absolute
                    left-0
                    -bottom-2
                    w-0
                    h-[2px]
                    bg-gradient-to-r
                    from-cyan-400
                    to-blue-500
                    group-hover:w-full
                    transition-all
                    duration-300
                    "
                  />

                </button>

              </li>

            ))}
          </ul>



          {/* Resume */}
          <a
            href="https://drive.google.com/drive/folders/1ZHSPndp_fxwurkL9sL87q8Qqop3lWUF6?usp=drive_link"
            target="_blank"

            className="
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-xl
            border
            border-white/20
            text-gray-200
            hover:bg-white
            hover:text-black
            transition
            "
          >

            <FaDownload />

            Resume

          </a>



          {/* Hire Button */}
          <button

            onClick={() =>
              scrollToSection("contact")
            }

            className="
            flex
            items-center
            gap-2
            px-5
            py-2.5
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

            Hire Me

            <FaArrowRight />

          </button>


        </div>



        {/* Mobile Button */}
        <button

          onClick={() =>
            setIsOpen(!isOpen)
          }

          className="
          md:hidden
          text-white
          text-2xl
          "

        >

          {isOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}

        </button>


      </div>



      {/* Mobile Menu */}

      <AnimatePresence>

      {isOpen && (

        <motion.div

          initial={{
            opacity:0,
            x:100,
          }}

          animate={{
            opacity:1,
            x:0,
          }}

          exit={{
            opacity:0,
            x:100,
          }}

          className="
          md:hidden
          absolute
          right-0
          top-full
          w-72
          min-h-screen
          bg-black/90
          backdrop-blur-xl
          border-l
          border-white/10
          p-6
          "

        >

          <ul
            className="
            flex
            flex-col
            gap-6
            "
          >

          {navLinks.map((item)=>(

            <li key={item.id}>

              <button

                onClick={() =>
                  scrollToSection(item.id)
                }

                className="
                text-gray-300
                text-lg
                hover:text-cyan-400
                transition
                "

              >

                {item.label}

              </button>

            </li>

          ))}

          </ul>



          <div
            className="
            mt-10
            flex
            flex-col
            gap-4
            "
          >

          <a
            href="/resume.pdf"
            className="
            flex
            justify-center
            items-center
            gap-2
            py-3
            rounded-xl
            border
            border-white/20
            text-white
            "
          >

            <FaDownload />

            Resume

          </a>



          <button

            onClick={() =>
              scrollToSection("contact")
            }

            className="
            py-3
            rounded-xl
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            text-black
            font-bold
            "
          >

            Hire Me

          </button>


          </div>


        </motion.div>

      )}

      </AnimatePresence>


    </motion.nav>
  );
};


export default NavMenu;