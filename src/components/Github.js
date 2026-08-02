"use client";

// import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";


const githubStats = [
  {
    title: "GitHub Streak",
    image:
      "https://github-readme-streak-stats.herokuapp.com?user=rohitchourey0809&theme=github-dark-blue&date_format=j%20M%5B%20Y%5D",
  },

  {
    title: "Top Languages",
    image:
      "https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=rohitchourey0809&layout=compact&langs_count=8&theme=algolia",
  },

  {
    title: "GitHub Statistics",
    image:
      "https://github-readme-stats-eight-theta.vercel.app/api?username=rohitchourey0809&show_icons=true&theme=algolia&include_all_commits=true&count_private=true",
  },
];


export default function GitHub() {


  return (

    <section
      id="github"
      className="
      relative
      py-24
      px-6
      bg-[#050816]
      text-white
      overflow-hidden
      "
    >


      {/* Background */}

      <div
        className="
        absolute
        top-10
        left-1/2
        -translate-x-1/2
        w-[450px]
        h-[450px]
        bg-purple-500/20
        blur-[120px]
        "
      />



      {/* Header */}

      <motion.div

        initial={{
          opacity: 0,
          y: -20
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

          GitHub Activity

        </h2>


        <p
          className="
          text-gray-400
          mt-4
          max-w-xl
          mx-auto
          "
        >

          Coding activity, repositories,
          contributions and technology usage.

        </p>


      </motion.div>





      {/* Stats */}

      <div

        className="
        relative
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        xl:grid-cols-3
        gap-8
        "

      >


        {
          githubStats.map((stat, index) => (


            <motion.div

              key={stat.title}

              initial={{
                opacity: 0,
                y: 30
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: .5,
                delay: index * 0.15
              }}


              whileHover={{
                y: -8
              }}


              className="
              rounded-3xl
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              hover:border-cyan-400/40
              p-5
              transition
              "

            >


              <h3
                className="
                text-lg
                font-bold
                text-cyan-400
                mb-5
                "
              >

                {stat.title}

              </h3>




              <div
                className="
                relative
                w-full
                min-h-[180px]
                "
              >

                <img
                  src={stat.image}
                  alt={stat.title}
                  loading="lazy"
                  className="
              w-full
              h-auto
              rounded-xl
              object-contain
              "
                />


              </div>



            </motion.div>


          ))
        }


      </div>






      {/* GitHub Profile Button */}

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
        flex
        justify-center
        mt-12
        "

      >

        <a

          href="https://github.com/rohitchourey0809"

          target="_blank"

          rel="noopener noreferrer"

          className="
          flex
          items-center
          gap-3
          px-7
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

          <FaGithub />

          Visit GitHub

          <FaExternalLinkAlt />

        </a>


      </motion.div>



    </section>

  );
}