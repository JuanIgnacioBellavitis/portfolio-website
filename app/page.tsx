import {
  Intro,
  SectionDivider,
  About,
  Projects,
  Skills,
  Experience,
  Contact,
} from "@/components/index";
import { SITE_URL } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Juan Ignacio Bellavitis",
  jobTitle: "Senior Full Stack Software Engineer",
  url: SITE_URL,
  sameAs: [
    "https://www.linkedin.com/in/juan-ignacio-bellavitis/",
    "https://github.com/JuanIgnacioBellavitis",
  ],
  knowsAbout: [
    "React",
    "NestJS",
    "Java",
    "TypeScript",
    "AWS",
    "PostgreSQL",
    "Microfrontends",
    "Distributed Systems",
    "Apache Kafka",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Intramed",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Madrid",
    addressCountry: "ES",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
