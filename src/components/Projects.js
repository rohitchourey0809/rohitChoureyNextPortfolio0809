import { projects } from "@/utils/data";

export default function Projects() {
  return (
    <section className="p-8">
      <h2 className="text-4xl font-bold text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-2xl">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
            <a href={project.link} className="text-blue-400 mt-2 inline-block">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
