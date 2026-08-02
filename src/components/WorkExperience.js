"use client";

import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";


const workExperienceData = [
  {
    company: "Aizen Algo Pvt. Ltd.",
    duration: "June 2026 – Present",
    location: "Hyderabad",
    responsibilities: [
      "Developed responsive web applications using React.js, JavaScript, HTML, CSS, and Bootstrap.",
      "Built and maintained RESTful APIs using ASP.NET Core and C#.",
      "Integrated React frontend with .NET backend and optimized API performance.",
      "Worked with SQL Server for database design, queries, and stored procedures.",
      "Implemented JWT authentication and role-based authorization.",
      "Collaborated with cross-functional teams using Git and Agile methodologies.",
    ],
  },

  {
    company: "Ziptrrip.com",
    duration: "July 2024 - May 2026",
    location: "Mumbai",
    responsibilities: [
      "Developed responsive travel booking applications using React.js, JavaScript, HTML5, CSS3, and Bootstrap.",
      "Built airline, hotel, and cab booking modules with real-time inventory and pricing updates.",
      "Integrated REST APIs for live booking data, search results, and reservation workflows.",
      "Created reusable React components and managed state using Redux Toolkit.",
      "Improved performance using lazy loading, code splitting, memoization, and optimized API handling.",
      "Worked closely with backend, QA, and product teams in Agile environments.",
    ],
  },

  {
    company: "Indus Net Technologies",
    duration: "Sep 2022 - Mar 2024",
    location: "Kolkata",
    responsibilities: [
      "Developed reusable frontend components and responsive user interfaces.",
      "Implemented React Hooks for efficient state and data management.",
      "Integrated RESTful APIs for dynamic application workflows.",
      "Built dynamic pages using Next.js routing and server-side features.",
      "Developed multilingual pages using Next.js file-based routing.",
      "Collaborated with UX designers, backend developers, and QA teams.",
    ],
  },
];


export default function WorkExperience() {

  return (

    <section
      id="work-experience"
      className="
      relative
      py-24
      px-6
      overflow-hidden
      "
    >

      {/* Background Glow */}
      <div
        className="
        absolute
        top-40
        left-1/2
        -translate-x-1/2
        w-96
        h-96
        bg-blue-500/20
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
        relative
        text-center
        mb-16
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
          Work Experience
        </h2>


        <p
          className="
          text-gray-400
          mt-4
          "
        >
          My professional journey building scalable web applications.
        </p>


      </motion.div>



      {/* Timeline */}

      <div
        className="
        relative
        max-w-5xl
        mx-auto
        "
      >


        {/* Vertical Line */}

        <div
          className="
          absolute
          left-5
          md:left-1/2
          top-0
          bottom-0
          w-[2px]
          bg-gradient-to-b
          from-cyan-400
          via-blue-500
          to-purple-500
          "
        />



        <div
          className="
          space-y-12
          "
        >


          {workExperienceData.map((job, index) => (

            <motion.div

              key={index}

              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              viewport={{
                once: true,
                amount: .2
              }}

              transition={{
                duration: .6
              }}


              className={`
            relative
            md:flex
            ${index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
                }
            `}

            >


              {/* Timeline Dot */}

              <div
                className="
              absolute
              left-3
              md:left-1/2
              md:-translate-x-1/2
              top-8
              w-5
              h-5
              rounded-full
              bg-gradient-to-r
              from-cyan-400
              to-blue-500
              border-4
              border-[#050816]
              "
              />



              {/* Card */}

              <div
                className="
              ml-14
              md:ml-0
              md:w-[46%]
              group
              rounded-3xl
              p-7
              bg-white/5
              backdrop-blur-xl
              border
              border-white/10
              hover:border-cyan-400/40
              transition
              shadow-xl
              "
              >


                <div
                  className="
                flex
                items-center
                gap-3
                mb-4
                "
                >

                  <div
                    className="
                  p-3
                  rounded-xl
                  bg-cyan-500/10
                  text-cyan-400
                  "
                  >
                    <FaBriefcase />
                  </div>


                  <h3
                    className="
                  text-xl
                  font-bold
                  text-white
                  group-hover:text-cyan-400
                  transition
                  "
                  >
                    {job.company}
                  </h3>

                </div>



                <div
                  className="
                flex
                flex-wrap
                gap-4
                text-sm
                text-gray-400
                mb-5
                "
                >

                  <span className="flex items-center gap-2">
                    <FaCalendarAlt />
                    {job.duration}
                  </span>


                  <span className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    {job.location}
                  </span>


                </div>



                <ul
                  className="
                space-y-3
                text-gray-300
                text-sm
                "
                >

                  {job.responsibilities.map((task, i) => (

                    <li
                      key={i}
                      className="
                    flex
                    gap-3
                    leading-relaxed
                    "
                    >

                      <span
                        className="
                      mt-2
                      w-2
                      h-2
                      rounded-full
                      bg-cyan-400
                      flex-shrink-0
                      "
                      />

                      {task}

                    </li>

                  ))}


                </ul>


              </div>


            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}