"use client";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en", // always "en" on first render — I18nProvider restores the saved language after hydration
  debug: process.env.NODE_ENV === "development",
  load: "languageOnly",
  resources: {
    en: {
      translation: {
        intro: `
                <0>Hello, I'm Juan.</0> I'm a
                <2> Senior Full Stack Software Engineer</2> with
                <4> 6 years</4> of experience building
                <6> scalable web applications</6>. My focus is
                <8> React, NestJS and Java</8>.
              `,
        contact_here: "Contact me here!",
        download_cv: "Download CV",
        about_me_title: "About me",
        about_me: `<0>Six years building production systems at the intersection of<1> distributed backends</1> and modular frontends — REST microservices, event-driven architectures, microfrontend systems in React. The work I care about most sits at the boundary of business rules and system design: understanding a domain well enough to make<3> trade-offs intentionally</3>. Currently at<5> Intramed</5>, contributing to a platform for healthcare professionals across Latin America.</0><1>Based in Madrid as an EU citizen. Outside of work: football, films, and the occasional deep dive into something new.</1>`,
        my_projects_title: "My projects",
        my_experience: "My Experience",
        skills: "Skills",
        contact_me: "Contact Me!",
        please_contact: `
          <0>Please contact me directly at <2>juan.bellavitis@gmail.com</2> or through this form.</0>`,
        your_email: "Your email",
        your_message: "Your message",
        submit: "Submit",
      },
    },
    de: {
      translation: {
        intro: `
                <0>Hallo, ich bin Juan.</0> Ich bin
                <2> Senior Full Stack Software Engineer</2> mit
                <4> 6 Jahren</4> Erfahrung in der Entwicklung
                <6> skalierbarer Webanwendungen</6>. Mein Schwerpunkt liegt auf
                <8> React, NestJS und Java</8>.
              `,
        contact_here: "Kontaktieren Sie mich hier!",
        download_cv: "Lebenslauf herunterladen",
        about_me_title: "Über mich",
        about_me: `<0>Sechs Jahre Entwicklung produktiver Systeme an der Schnittstelle von<1> verteilten Backends</1> und modularen Frontends — REST-Microservices, ereignisgesteuerte Architekturen, Microfrontend-Systeme in React. Was mich am meisten interessiert, liegt an der Grenze zwischen Geschäftslogik und Systemdesign: eine Domäne gut genug zu verstehen, um<3> Kompromisse bewusst zu treffen</3>. Derzeit bei<5> Intramed</5>, an einer Plattform für medizinische Fachkräfte in ganz Lateinamerika.</0><1>Ansässig in Madrid als EU-Bürger. Außerhalb der Arbeit: Fußball, Filme und gelegentlich ein tiefes Eintauchen in etwas Neues.</1>`,
        my_projects_title: "Meine Projekte",
        my_experience: "Meine Erfahrung",
        skills: "Fähigkeiten",
        contact_me: "Kontaktiere mich!",
        please_contact: `
          <0>Bitte kontaktieren Sie mich direkt unter <2>juan.bellavitis@gmail.com</2> oder über dieses Formular.</0>`,
        your_email: "Ihre E-Mail",
        your_message: "Ihre Nachricht",
        submit: "Senden",
      },
    },
    es: {
      translation: {
        intro: `
                <0>Hola, soy Juan.</0> Soy
                <2> Senior Full Stack Software Engineer</2> con
                <4> 6 años</4> de experiencia construyendo
                <6> aplicaciones web escalables</6>. Mi foco es
                <8> React, NestJS y Java</8>.
              `,
        contact_here: "¡Contáctame!",
        download_cv: "Descargar CV",
        about_me_title: "Sobre mí",
        about_me: `<0>Seis años construyendo sistemas en producción en la intersección de<1> backends distribuidos</1> y frontends modulares — REST microservicios, arquitecturas orientadas a eventos, sistemas microfrontend en React. Lo que más me interesa está en el límite entre las reglas de negocio y el diseño de sistemas: entender un dominio lo suficiente como para tomar<3> decisiones de trade-off de forma consciente</3>. Actualmente en<5> Intramed</5>, contribuyendo a una plataforma para profesionales de la salud en toda América Latina.</0><1>Radicado en Madrid como ciudadano de la UE. Fuera del trabajo: fútbol, películas y algún que otro deep dive en algo nuevo.</1>`,
        my_projects_title: "Mis proyectos",
        my_experience: "Mi Experiencia",
        skills: "Habilidades",
        contact_me: "¡Contáctame!",
        please_contact: `
          <0>Podés contactarme directamente en <2>juan.bellavitis@gmail.com</2> o a través de este formulario.</0>`,
        your_email: "Tu email",
        your_message: "Tu mensaje",
        submit: "Enviar",
      },
    },
  },
});

export default i18next;
