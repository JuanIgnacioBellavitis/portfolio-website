import {
  Intro,
  SectionDivider,
  About,
  Projects,
  Skills,
  Experience,
  Contact,
  ParticlesComponent,
} from "@/components/index";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <ParticlesComponent />
    </main>
  );
}
