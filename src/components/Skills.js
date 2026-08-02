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
  SiTypescript,
} from "react-icons/si";


const skillGroups = [

  {
    title: "Frontend Development",

    skills: [
      {
        name: "HTML5",
        icon: <FaHtml5 />
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />
      },
      {
        name: "JavaScript",
        icon: <FaJs />
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />
      },
      {
        name: "React.js",
        icon: <FaReact />
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />
      },
      {
        name: "Angular",
        icon: <SiAngular />
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />
      },
      {
        name: "Material UI",
        icon: <SiChakraui />
      },
    ]
  },


  {
    title: "State Management",

    skills: [
      {
        name: "Redux Toolkit",
        icon: <SiRedux />
      },
      {
        name: "Redux Saga",
        icon: <SiReduxsaga />
      }
    ]

  },


  {
    title: "Backend & Database",

    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />
      },
      {
        name: "Express.js",
        icon: <SiExpress />
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />
      },
      {
        name: "MySQL",
        icon: <SiMysql />
      },
      {
        name: "SQL",
        icon: <FaDatabase />
      }
    ]

  },


  {
    title: "Tools & Others",

    skills: [
      {
        name: "Git",
        icon: <FaGit />
      },
      {
        name: "GitHub",
        icon: <FaGithub />
      },
      {
        name: "JSON Server",
        icon: <SiJson />
      }
    ]

  }

];



export default function Skills() {

  return (

    <section

      id="skills"

      className="
relative
py-24
px-6
bg-[#050816]
text-white
overflow-hidden
"

    >


      {/* Glow */}

      <div

        className="
absolute
top-20
left-1/2
-translate-x-1/2
w-96
h-96
bg-cyan-500/20
blur-[120px]
"

      />



      {/* Heading */}

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

          Technical Skills

        </h2>


        <p

          className="
text-gray-400
mt-4
"

        >

          Technologies I use to build scalable applications.

        </p>


      </motion.div>





      {/* Skill Categories */}


      <div

        className="
max-w-6xl
mx-auto
space-y-12
"

      >


        {
          skillGroups.map((group, index) => (


            <motion.div

              key={index}

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
                duration: .5
              }}

            >


              <h3

                className="
text-xl
font-bold
mb-6
text-cyan-400
"

              >

                {group.title}

              </h3>




              <div

                className="
grid
grid-cols-2
sm:grid-cols-3
md:grid-cols-4
lg:grid-cols-5
gap-5
"

              >


                {
                  group.skills.map((skill, i) => (


                    <motion.div

                      key={i}

                      whileHover={{
                        y: -8,
                        scale: 1.05
                      }}

                      transition={{
                        type: "spring",
                        stiffness: 250
                      }}

                      className="
group
h-32
flex
flex-col
items-center
justify-center
rounded-2xl
bg-white/5
backdrop-blur-xl
border
border-white/10
hover:border-cyan-400/40
shadow-lg
transition
"

                    >


                      <div

                        className="
text-5xl
text-cyan-400
group-hover:scale-110
transition
"

                      >

                        {skill.icon}

                      </div>



                      <p

                        className="
mt-3
text-sm
text-gray-300
"

                      >

                        {skill.name}

                      </p>


                    </motion.div>


                  ))

                }


              </div>


            </motion.div>


          ))

        }


      </div>


    </section>

  );

}