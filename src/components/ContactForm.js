"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";


const contactInfo = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "tech.rohitchourey@gmail.com",
    link: "mailto:tech.rohitchourey@gmail.com",
  },

  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/rohitchourey0809",
    link: "https://github.com/rohitchourey0809",
  },

  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/rohitchourey0809",
    link: "https://www.linkedin.com/in/rohitchourey0809/",
  },
];


export default function Contact() {


  return (

    <section

      id="contact"

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
          Contact Me
        </h2>


        <p
          className="
          text-gray-400
          mt-4
          "
        >
          Have a project or opportunity? Let's connect.
        </p>


      </motion.div>





      <div

        className="
        relative
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-2
        gap-10
        "

      >



        {/* Contact Info */}

        <motion.div

          initial={{
            opacity: 0,
            x: -30
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          viewport={{
            once: true
          }}

          className="
          space-y-5
          "

        >


          {
            contactInfo.map((item, index) => (


              <a

                key={index}

                href={item.link}

                target="_blank"

                rel="noopener noreferrer"

                className="
                flex
                items-center
                gap-5
                p-5
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
                  text-2xl
                  text-cyan-400
                  "

                >

                  {item.icon}

                </div>



                <div>

                  <h3
                    className="
                    font-bold
                    "
                  >

                    {item.title}

                  </h3>


                  <p
                    className="
                    text-gray-400
                    text-sm
                    "
                  >

                    {item.value}

                  </p>


                </div>


              </a>


            ))
          }


        </motion.div>






        {/* Contact Form */}

        <motion.form

          action="https://formspree.io/f/myyobnrq"

          method="POST"


          initial={{
            opacity: 0,
            x: 30
          }}

          whileInView={{
            opacity: 1,
            x: 0
          }}

          viewport={{
            once: true
          }}


          className="
          p-8
          rounded-3xl
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          shadow-xl
          "

        >


          <h3
            className="
            text-2xl
            font-bold
            mb-6
            "
          >

            Send Message

          </h3>




          <input

            type="text"

            name="name"

            placeholder="Your Name"

            required

            className="
            w-full
            mb-4
            p-3
            rounded-xl
            bg-black/20
            border
            border-white/10
            focus:border-cyan-400
            outline-none
            "

          />





          <input

            type="email"

            name="email"

            placeholder="Your Email"

            required

            className="
            w-full
            mb-4
            p-3
            rounded-xl
            bg-black/20
            border
            border-white/10
            focus:border-cyan-400
            outline-none
            "

          />





          <textarea

            name="message"

            rows="5"

            placeholder="Your Message"

            required

            className="
            w-full
            mb-5
            p-3
            rounded-xl
            bg-black/20
            border
            border-white/10
            focus:border-cyan-400
            outline-none
            "

          />





          <button

            type="submit"

            className="
            flex
            justify-center
            items-center
            gap-3
            w-full
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

            <FaPaperPlane />

            Send Message

          </button>



        </motion.form>



      </div>



    </section>

  );

}