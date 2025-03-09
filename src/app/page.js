
// import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
// import About from "@/components/About"
import Skills from "@/components/Skills";




export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* <Profile /> */}
      {/* <About/> */}
      <Skills/>
      <WorkExperience/>
      <Projects />
    </main>
  );
}
