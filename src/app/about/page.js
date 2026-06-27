"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="p-8 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-blue-400 text-center mb-8">About Me</h2>
      <motion.div
        className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="text-gray-300 leading-relaxed text-lg">
          Web Developer with expertise in JavaScript, specializing in React, Next.js, and Angular.
          Proficient in managing databases with MongoDB and SQL, and building scalable backends using Node.js.
          Skilled in creating responsive interfaces, designing RESTful APIs, and implementing real-time,
          dynamic user experiences.
        </p>
      </motion.div>
    </section>
  );
}
