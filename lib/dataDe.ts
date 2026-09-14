import React, { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
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
    name: "Erfahrung",
    hash: "#experience",
  },
  {
    name: "Fähigkeiten",
    hash: "#skills",
  },
  {
    name: "Projekte",
    hash: "#projects",
  },
  {
    name: "Kontakt",
    hash: "#contact",
  },
] as const;

export const experiencesDataDe = [
  {
    title: "Universitätstechniker für Programmierung",
    location: "Technische Nationaluniversität (UTN), Argentinien",
    description:
      "Beginn meiner formalen Ausbildung in der Softwareentwicklung, parallel zu meinen ersten Schritten als professioneller Entwickler.",
    icon: createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Software Developer bei GOIAR S.A.S.",
    location: "Buenos Aires, Argentinien",
    description:
      "Entwicklung und Weiterentwicklung von Qavant, einer Plattform für das Personalmanagement. Anpassung der Benutzeroberfläche an Kundenanforderungen und Optimierungen für interne und externe Nutzer, mit C#, .NET, SQL Server und JavaScript.",
    icon: createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Universitätstechniker für Informationssysteme",
    location: "Technische Nationaluniversität (UTN), Argentinien",
    description:
      "Zweiter technischer Abschluss mit Schwerpunkt auf Systemanalyse und -design, aufbauend auf meiner Programmierausbildung.",
    icon: createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Developer bei Multiradio",
    location: "Buenos Aires, Argentinien",
    description:
      "Verantwortung für die Anwendung zur Logistiksteuerung und -verwaltung des Unternehmens. Auswertung von Kundenfeedback und Umsetzung von Verbesserungen, die den Lagerbetrieb effizienter und übersichtlicher gemacht haben, mit C#, .NET, SQL Server und JavaScript.",
    icon: createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Software Developer bei SiloReal",
    location: "Buenos Aires, Argentinien",
    description:
      "Entwicklung von AgTech-Web- und Mobile-Anwendungen für das Pflanzenmanagement, einschließlich Satellitenüberwachung von Silobags und Echtzeit-Datenerfassung über Boden- und Klimasensoren mit automatisiertem Alarmsystem. Umgesetzt mit React, React Native, Node.js mit Express, MySQL und AWS.",
    icon: createElement(CgWorkAlt),
    date: "2023 - 2025",
  },
  {
    title: "Bachelor in Informationssystemen",
    location: "Universidad de Palermo, Argentinien",
    description:
      "Abschluss des Studiums in Informationssystemen parallel zur Vollzeittätigkeit als Entwickler.",
    icon: createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "Software Engineer bei Mercado Libre",
    location: "Buenos Aires, Argentinien",
    description:
      "Arbeit an Logistik-Pricing und der Konfiguration von Carrier-Tarifen in mehreren lateinamerikanischen Märkten. Mitwirkung an der Migration und Integration des Pricing-Systems von Kangu in die Architektur von Mercado Libre sowie an einer zentralen Plattform für Logistikverträge als Single Source of Truth zwischen kommerziellen Vereinbarungen und operativer Konfiguration. React im Frontend, Java in verteilten Backend-Services mit hohem Traffic.",
    icon: createElement(CgWorkAlt),
    date: "2025 - 2026",
  },
  {
    title: "Senior Full Stack Software Engineer bei Intramed",
    location: "Remote aus Madrid, Spanien",
    description:
      "Entwicklung von Full-Stack-Features für eine der führenden Plattformen für medizinische Fachkräfte in Lateinamerika. Modulare Oberflächen in React mit Microfrontend-Architektur, REST-Microservices in NestJS hinter einem Gateway, PostgreSQL mit TypeORM, asynchrone Kommunikation über Apache Kafka und Caching mit Redis auf AWS. Außerdem verantwortlich für technisches SEO — Indexierung, Metadaten und strukturierte Daten — sowie Beteiligung an Code Reviews und Architekturentscheidungen.",
    icon: createElement(CgWorkAlt),
    date: "2026 - gegenwärtig",
  },
] as const;

export const projectsDataDe = [
  {
    id: 1,
    title: "Quiz App",
    description:
      "Konfigurierbare Quiz-Anwendung, in der Kategorie, Schwierigkeit, Fragetyp und Anzahl der Fragen gewählt werden können, angebunden an eine externe Fragen-API.",
    tags: ["React", "Axios", "Redux"],
    imageUrl: quizApp,
    projectUrl: "https://github.com/JuanIgnacioBellavitis/quiz-app",
  },
  {
    id: 2,
    title: "Admin Dashboard",
    description:
      "Admin-Dashboard auf Unternehmensniveau mit Datentabellen, Charts, Kalender und Formularvalidierung.",
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
