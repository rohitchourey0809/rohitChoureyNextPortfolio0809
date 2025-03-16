"use client";

export default function GitHub() {
  return (
    <section
      id="github"
      className="p-8 text-center bg-gray-900 rounded-xl shadow-xl"
    >
      <h2 className="text-4xl font-bold text-blue-400 mb-8">GitHub Status</h2>

      <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6">
        {/* GitHub Streak Stats */}
        <a
          href="https://github.com/rohitchourey0809"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-105"
        >
          <img
            alt="GitHub Streak"
            className="rounded-lg shadow-lg border border-gray-700"
            src="https://github-readme-streak-stats.herokuapp.com?user=rohitchourey0809&theme=github-dark-blue&date_format=j%20M%5B%20Y%5D"
          />
        </a>

        {/* Top Languages */}
        <img
          alt="Top Languages"
          className="rounded-lg shadow-lg border border-gray-700 transition-transform transform hover:scale-105"
          src="https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=rohitchourey0809&layout=compact&langs_count=8&theme=algolia"
        />

        {/* GitHub Stats */}
        <img
          alt="GitHub Stats"
          className="rounded-lg shadow-lg border border-gray-700 transition-transform transform hover:scale-105"
          src="https://github-readme-stats-eight-theta.vercel.app/api?username=rohitchourey0809&show_icons=true&theme=algolia&include_all_commits=true&count_private=true"
        />
      </div>
    </section>
  );
}
