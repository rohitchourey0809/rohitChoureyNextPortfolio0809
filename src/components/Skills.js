"use client"
export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "NextJS",
    "Redux Toolkit",
    "Express",
    "MongoDB",
    "Material UI",
    "Chakra UI",
    "TailwindCSS",
    "Node.js",
    "Git",
    "GitHub",
    "JSON-server",
    "Angular",
    "SQL",
    "MySQL",
    "Redux-Saga",
  ];

  return (
    <section className="p-8 text-center">
      <h2 className="text-4xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-800 px-4 py-2 rounded-lg text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
