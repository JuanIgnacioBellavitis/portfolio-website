"use client";
import i18next, { changeLanguage } from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  debug: true,
  load: "languageOnly",
  resources: {
    en: {
      translation: {
        intro: `
                <0>Hello, I'm Juan.</0> I'm a
                <2> full-stack developer</2> with
                <4> 4 years</4> of experience. I enjoy
                building
                <6> sites & apps</6>. My focus is
                <8> React and NodeJs</8>.
              `,
        contact_here: "Contact me here!",
        download_cv: "Download CV",
        about_me_title: "About me",
        about_me: `
          <0>After graduating from high school, I decided to pursue my passion for programming.
           I enrolled in the Programming Technician career where I learned <2>full-stack web development</2>.
            <5>My favorite part of programming</5> is the problem-solving aspect. I <7>love</7> the feeling 
            of finally figuring out a solution to a problem. My core stack is <9>React, Node.js, and PostgreSQL</9>.
             I am also familiar with TypeScript and Prisma. I am always looking to learn new technologies. I currently 
             work for<11> SiloReal</11>, in a full time position as a software developer.</0><1><0>When 
             I'm not coding</0>, I enjoy playing video games, watching movies, and going to the gym. I also enjoy 
             <3>learning new things</3>.</1>`,
        my_projects_title: "My projects",
        more_projects: "More projects in coming...",
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
                <0>Hallo, ich bin Juan.</0> Ich bin ein
                <2 > Full-Stack-Entwickler</2> mit
                <4> 4 Jahren</4> Erfahrung. Ich baue gerne
                <6> Websites & Apps</6>. Mein Schwerpunkt liegt auf
                <8> React und Node.js</8>
              `,
        contact_here: "Kontaktieren Sie mich hier!",
        download_cv: "Lebenslauf herunterladen",
        about_me_title: "Über mich",
        about_me: `
          <0>Nach dem Abitur beschloss ich, meiner Leidenschaft für das Programmieren nachzugehen.
          Ich habe mich für die Karriere als Programmiertechniker eingeschrieben, wo ich <2>Full-Stack-Webentwicklung</2> gelernt habe.
           <5>Mein Lieblingsteil des Programmierens</5> ist der Problemlösungsaspekt. Ich <7>liebe</7> das Gefühl
           endlich eine Lösung für ein Problem zu finden. Mein Kernstack ist <9>React, Node.js und PostgreSQL</9>.
            Ich bin auch mit TypeScript und Prisma vertraut. Ich bin immer auf der Suche nach neuen Technologien. Ich derzeit
            Arbeit für <11>SiloReal</11>, in einer Vollzeitstelle als Softwareentwickler.</0><1><0>Wann
            Ich programmiere nicht</0>, ich spiele gerne Videospiele, schaue Filme und gehe ins Fitnessstudio. ich geniesse auch
            <3>Neue Dinge lernen</3>.</1>
                `,
        my_projects_title: "Meine Projekte",
        more_projects: "Weitere Projekte kommen bald...",
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
