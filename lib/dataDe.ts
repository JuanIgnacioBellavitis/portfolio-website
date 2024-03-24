import React, { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import quizApp from "@/public/QuizApp.png";
import AdminDashboard from "@/public/AdminDashboard.png";
import carHub from "@/public/CarHub.png";

export const linksDe = [
  {
    name: "Startseite",
    hash: "#home",
  },
  {
    name: "Über",
    hash: "#about",
  },
  {
    name: "Projekte",
    hash: "#projects",
  },
  {
    name: "Fähigkeiten",
    hash: "#skills",
  },
  {
    name: "Erfahrung",
    hash: "#experience",
  },
  {
    name: "Kontaktiere ",
    hash: "#contact",
  },
] as const;

export const experiencesDataDe = [
  {
    title: "Abschluss als Universitätstechniker für Computersysteme",
    location: "Buenos Aires, Argentinien",
    description:
      "Ich habe meinen Abschluss nach 3 Jahren Studium gemacht und meinen ersten Job als FullStack-Entwickler gefunden.",
    icon: createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack-Softwareentwicklungspraktikum bei GOIAR",
    location: "Buenos Aires, Argentinien",
    description:
      "In meinem ersten Job war ich an der strategischen Entwicklung von Qavant beteiligt, einer leistungsfähigen HR-Verwaltungslösung für interne und externe Kunden; optimierte Datenbankdatenladungen, betonte Benutzererfahrung und passte das Erscheinungsbild und die Zugriffsmerkmale des Tools an, um die Benutzerzufriedenheit und -benutzerfreundlichkeit zu verbessern, während ich studierte.",
    icon: createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Full-Stack-Softwareentwickler bei Grupo Multi",
    location: "Buenos Aires, Argentinien",
    description:
      "Leitete die Erstellung fortschrittlicher Logistik-Webanwendungen für die Lagerhäuser von Grupo Multi, unter Verwendung von C#, .NET Framework für robuste Backend-Lösungen sowie HTML, CSS, JavaScript und Bootstrap für benutzerfreundliche Frontend-Erlebnisse.",
    icon: createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Front-Stack-Softwareentwickler bei Identity on Field",
    location: "Buenos Aires, Argentinien",
    description:
      "Ich arbeite immer noch als Full-Stack-Entwickler, während ich einen Abschluss in Informationssystemen mache.",
    icon: createElement(FaReact),
    date: "2023 - gegenwärtig",
  },
];

export const projectsDataDe = [
  {
    id: 1,
    title: "Quiz App",
    description:
      "Dies ist mein erstes Projekt. Ich habe als Full-Stack-Entwickler daran gearbeitet. Benutzer können die Kategorie, Schwierigkeit, Typ und Anzahl der Fragen wählen.",
    tags: ["React", "Axios", "Redux"],
    imageUrl: quizApp,
    projectUrl: "https://github.com/JuanIgnacioBellavitis/quiz-app",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description: "Admin-Dashboard auf Unternehmensebene.",
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
      "Benutzerfreundliche Entdeckung, Reservierung und Vermietung von Autos online. Entdecken Sie nahtlos verschiedene Fahrzeugoptionen, vereinfachen Sie die Buchung und erleben Sie außergewöhnlichen Service - alles auf einer Plattform.",
    tags: ["React", "Typescript", "Next.js", "Tailwind"],
    imageUrl: carHub,
    projectUrl: "https://github.com/JuanIgnacioBellavitis/CarHub-Project",
  },
] as const;
