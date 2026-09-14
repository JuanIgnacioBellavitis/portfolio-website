import React, { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import quizApp from "@/public/QuizApp.png";
import AdminDashboard from "@/public/AdminDashboard.png";
import carHub from "@/public/CarHub.png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "University Technician in Programming",
    location: "National Technological University (UTN), Argentina",
    description: `Started my formal education in software development while taking my first steps
      as a professional developer.`,
    icon: createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Software Developer at GOIAR S.A.S.",
    location: "Buenos Aires, Argentina",
    description: `Built and evolved Qavant, a human resources management platform. Customized the user
      interface to meet client requirements and implemented optimizations for both internal and
      external users, working with C#, .NET, SQL Server and JavaScript.`,
    icon: createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "University Technician in Information Systems",
    location: "National Technological University (UTN), Argentina",
    description: `Second technical degree, deepening systems analysis and design on top of my
      programming background.`,
    icon: createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Developer at Multiradio",
    location: "Buenos Aires, Argentina",
    description: `Owned the company's logistics control and management application. Analysed customer
      feedback to identify weak points and shipped improvements that made warehouse operations more
      organised and efficient, using C#, .NET, SQL Server and JavaScript.`,
    icon: createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Software Developer at SiloReal",
    location: "Buenos Aires, Argentina",
    description: `Developed AgTech web and mobile applications for crop management, including satellite
      monitoring of silo bags and real-time data collection from soil and climate sensors feeding an
      automated alert system. Built with React, React Native, Node.js with Express, MySQL and AWS.`,
    icon: createElement(CgWorkAlt),
    date: "2023 - 2025",
  },
  {
    title: "Bachelor's Degree in Information Systems",
    location: "Universidad de Palermo, Argentina",
    description: `Completed my degree in Information Systems while working full time as a developer.`,
    icon: createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "Software Engineer at Mercado Libre",
    location: "Buenos Aires, Argentina",
    description: `Worked on logistics pricing and carrier rate configuration across several Latin
      American markets. Contributed to migrating and integrating Kangu's pricing management system into
      Mercado Libre's architecture, and to a centralised logistics contracts platform acting as the
      single source of truth between commercial agreements and operational configuration. React on the
      front end, Java on distributed, high-traffic back-end services.`,
    icon: createElement(CgWorkAlt),
    date: "2025 - 2026",
  },
  {
    title: "Senior Full Stack Software Engineer at Intramed",
    location: "Buenos Aires, Argentina",
    description: `Building full-stack features for one of Latin America's leading platforms for
      healthcare professionals. Modular interfaces in React using a microfrontend architecture, REST
      microservices in NestJS behind a gateway, PostgreSQL with TypeORM, async messaging with Apache
      Kafka and caching with Redis on AWS. I also drive technical SEO work — indexing, metadata and
      structured data — and take part in code reviews and architectural decisions.`,
    icon: createElement(CgWorkAlt),
    date: "2026 - present",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "Quiz App",
    description:
      "Configurable quiz application where users pick category, difficulty, question type and question count, backed by a remote question API.",
    tags: ["React", "Axios", "Redux"],
    imageUrl: quizApp,
    projectUrl: "https://github.com/JuanIgnacioBellavitis/quiz-app",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description:
      "Enterprise-style admin dashboard with data grids, charts, calendar and form validation.",
    tags: [
      "React",
      "Typescript",
      "Material UI",
      "Nivo Charts",
      "Formik",
      "Yup",
      "FullCalendar",
      "Data Grid",
    ],
    imageUrl: AdminDashboard,
    projectUrl:
      "https://github.com/JuanIgnacioBellavitis/Admin-Dashboard/tree/main/admin-dashboard",
  },
  {
    id: 3,
    title: "CarHub",
    description:
      "Users online effortless car discovery, reservation, and rental. Seamlessly explore diverse vehicle options, simplify booking, and experience exceptional service—all in one platform.",
    tags: ["React", "Typescript", "Next.js", "Tailwind"],
    imageUrl: carHub,
    projectUrl: "https://github.com/JuanIgnacioBellavitis/CarHub-Project",
  },
] as const;

export type SkillGroup = {
  readonly label: string;
  readonly skills: readonly string[];
};

export const skillsData: readonly SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      "React",
      "React Native",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind",
      "Redux",
      "Microfrontends",
      "Astro",
    ],
  },
  {
    label: "Backend",
    skills: [
      "NestJS",
      "Node.js",
      "Java",
      "Express",
      "C#",
      "ASP.NET",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    label: "Data & Storage",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "SQL Server",
      "TypeORM",
      "Prisma",
      "Redis",
      "Apache Kafka",
    ],
  },
  {
    label: "Cloud & Tools",
    skills: ["AWS", "Git"],
  },
] as const;
