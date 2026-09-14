"use client";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
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
  },
});

export default i18next;
