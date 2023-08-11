import Intro from "@/components/Intro";
import About from "@/components/About";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
        <Skills />
        <Experience/>
        <Contact/>
    </main>
  )
}
