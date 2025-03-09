"use client";
import { motion } from "framer-motion";

export default function Profile() {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-900 text-white text-center px-6 py-16">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hello, I&apos;m Rohit Chourey
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        A Full-Stack Developer | Next.js & React
      </motion.p>

      {/* CTA Button */}
      <motion.a
        href="/projects"
        className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 text-white font-semibold"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}
