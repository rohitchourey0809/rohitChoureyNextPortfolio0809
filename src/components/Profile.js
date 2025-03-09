"use client"
export default function Profile() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-5xl font-bold">Hello, I'm Rohit Choure</h1>
      <p className="mt-4 text-lg text-gray-400">
        A Full-Stack Developer | Next.js & React
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700">
        <a href="/projects">View My Work</a>
      </button>
    </section>
  );
}
