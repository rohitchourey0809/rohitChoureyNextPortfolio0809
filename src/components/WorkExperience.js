"use client";
import { motion } from "framer-motion";

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
      "Collaborated with cross-functional teams using Git and Agile methodologies."
    ]
  },
  {
    company: "Ziptrrip.com",
    duration: "July 2024 - May 2026",
    location: "Mumbai",
    responsibilities: [
      "Developed and maintained responsive web applications using React.js, JavaScript, HTML5, CSS3, and Bootstrap.",
      "Built booking modules for airline, hotel, and cab services with real-time inventory, pricing, and availability updates.",
      "Integrated RESTful APIs to display live booking data, search results, fare details, and reservation information.",
      "Developed reusable React components and managed application state using Redux Toolkit for better scalability and maintainability.",
      "Optimized application performance by implementing lazy loading, code splitting, memoization, and efficient API handling.",
      "Collaborated with backend, QA, and product teams to deliver new features, resolve production issues, and enhance the user experience."
    ],
  },
  {
    company: "Indus Net Technologies",
    duration: "Sep 2022 - Mar 2024",
    location: "Kolkata",
    responsibilities: [
      "Developed and maintained front-end components and user interfaces.",
      "Implemented state management using React hooks for handling dynamic data.",
      "Integrated React components with RESTful APIs for smooth data flow.",
      "Created dynamic pages using Next.js dynamic routes.",
      "Worked on multilingual pages with file-based routing in Next.js.",
      "Collaborated in an Agile team with UX/UI designers, backend developers, and QA teams.",
      "Used Next.js and React.js to enhance web performance and scalability.",
    ],
  },
];

export default function WorkExperience() {
  return (
    <section id="work-experience" className="p-8 bg-gray-900 text-white">
      <motion.h2
        className="text-4xl font-bold text-blue-400 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>

      <div className="space-y-8">
        {workExperienceData.map((job, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold">{job.company}</h3>
            <p className="text-gray-400">
              {job.duration} | {job.location}
            </p>
            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              {job.responsibilities.map((task, i) => (
                <li key={i} className="leading-relaxed">
                  {task}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
