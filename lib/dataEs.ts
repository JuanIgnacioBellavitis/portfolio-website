import React, { createElement } from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const linksEs = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Sobre mí",
    hash: "#about",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  {
    name: "Habilidades",
    hash: "#skills",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesDataEs = [
  {
    title: "Técnico Universitario en Programación",
    location: "Universidad Tecnológica Nacional (UTN), Argentina",
    description:
      "Inicio de mi formación formal en desarrollo de software, en paralelo con mis primeros pasos como desarrollador profesional.",
    icon: createElement(LuGraduationCap),
    date: "2019 - 2021",
  },
  {
    title: "Software Developer en GOIAR S.A.S.",
    location: "Buenos Aires, Argentina",
    description:
      "Desarrollo y evolución de Qavant, una plataforma de gestión de personal. Adaptación de la interfaz a requerimientos de clientes y optimizaciones para usuarios internos y externos, con C#, .NET, SQL Server y JavaScript.",
    icon: createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Técnico Universitario en Sistemas de Información",
    location: "Universidad Tecnológica Nacional (UTN), Argentina",
    description:
      "Segundo título técnico con foco en análisis y diseño de sistemas, complementando la formación en programación.",
    icon: createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Software Developer en Multiradio",
    location: "Buenos Aires, Argentina",
    description:
      "Responsable de la aplicación de control y gestión logística de la empresa. Análisis de feedback de clientes e implementación de mejoras que optimizaron la operatoria del depósito, con C#, .NET, SQL Server y JavaScript.",
    icon: createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Software Developer en SiloReal",
    location: "Buenos Aires, Argentina",
    description:
      "Desarrollo de aplicaciones web y mobile AgTech para gestión de cultivos, con monitoreo satelital de silobolsas y captura de datos en tiempo real vía sensores de suelo y clima con sistema de alertas automatizado. React, React Native, Node.js con Express, MySQL y AWS.",
    icon: createElement(CgWorkAlt),
    date: "2023 - 2025",
  },
  {
    title: "Licenciatura en Sistemas de Información",
    location: "Universidad de Palermo, Argentina",
    description:
      "Finalización de la carrera en sistemas de información en paralelo al trabajo como desarrollador a tiempo completo.",
    icon: createElement(LuGraduationCap),
    date: "2023 - 2025",
  },
  {
    title: "Software Engineer en Mercado Libre",
    location: "Buenos Aires, Argentina",
    description:
      "Trabajo en pricing logístico y configuración de tarifas de carriers en múltiples mercados de América Latina. Participación en la migración e integración del sistema de pricing de Kangu en la arquitectura de Mercado Libre y en una plataforma centralizada de contratos logísticos como fuente de verdad entre acuerdos comerciales y configuración operativa. React en frontend, Java en servicios backend distribuidos de alto tráfico.",
    icon: createElement(CgWorkAlt),
    date: "2025 - 2026",
  },
  {
    title: "Senior Full Stack Software Engineer en Intramed",
    location: "Remoto desde Madrid, España",
    description:
      "Desarrollo de features full-stack para una de las plataformas líderes para profesionales de la salud en América Latina. Interfaces modulares en React con arquitectura microfrontend, REST microservicios en NestJS detrás de un gateway, PostgreSQL con TypeORM, comunicación asíncrona vía Apache Kafka y caché con Redis en AWS. También responsable del SEO técnico — estrategia de indexación, metadatos y datos estructurados — y participación en code reviews y decisiones de arquitectura.",
    icon: createElement(CgWorkAlt),
    date: "2026 - presente",
  },
] as const;
