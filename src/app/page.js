
import Projects from "@/components/Projects";
import WorkExperience from "@/components/WorkExperience";
import Skills from "@/components/Skills";
import Profile from "@/components/Profile";
import Contact from "@/components/ContactForm";
import GitHub from "@/components/Github";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      {/* <NavMenu /> */}
      <Profile />
      <Skills />
      <WorkExperience />
      <Projects />
      <GitHub/>
      <Contact />
    </main>
  );
}
