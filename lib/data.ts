import React, { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import quizApp from "@/public/QuizApp.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated University Technician in Computer Systems.",
    location: "Buenos Aires, Argentina",
    description:
      `I graduated after 3 years of studying and found my first job as a FullStack developer.`,
    icon: createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Software Developer Trainee in GOIAR",
    location: "Buenos Aires, Argentina",
    description:
      `In my first job, I was involved in the strategic development of Qavant, a potent HR administration solution for
      internal and external clients; streamlined database data loads, emphasized user experience,
      and tailored the tool's appearance and access features to enhance user satisfaction and usability while I was studying`,
    icon: createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack Software Developer in Grupo Multi",
    location: "Buenos Aires, Argentina",
    description:
    `Led the creation of advanced logistics web applications for Grupo Multi's warehouses, employing C#, 
    .NET Framework for robust back-end solutions, and HTML, CSS, JavaScript, and Bootstrap for user-friendly front-end experiences..`,
    icon: createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Front-Stack Software Developer in Identity on Field",
    location: "Buenos Aires, Argentina",
    description:
      `I'm still working as a full-stack developer while studying for a degree in Information Systems.`,
    icon: createElement(FaReact),
    date: "2023 - present",
  }
] as const;

export const projectsData = [
  {
    id: 1,
    title: "Quiz App",
    description:
      "This is my first project. I worked as a full-stack developer on it. Users can choose the category, difficulty, type, and amount of questions.",
    tags: ["React", "Axios", "Redux"],
    imageUrl: quizApp,
    projectUrl: "https://github.com/JuanIgnacioBellavitis/quiz-app",
   },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "C#",
  "ASP.NET",
  ".NET MVC",
  "Java",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "SQL Server",
  "Redux",
  "PostgreSQL",
] as const;