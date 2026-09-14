"use client";
import i18next, { changeLanguage } from "i18next";
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
        about_me: `
          <0>I'm a Senior Full Stack Software Engineer with<1> six years of experience</1> building
           production systems. Most of my work sits in<3> distributed backends and modular frontends</3>:
           REST microservices, event-driven messaging and microfrontend architectures. What I<5> enjoy
           most</5> is the point where business rules meet architecture — understanding a domain well
           enough to pick the right trade-off. My core stack is<7> React, NestJS, Java and PostgreSQL</7>,
           running on AWS. I currently work at<9> Intramed</9>, on a platform used by healthcare
           professionals across Latin America.</0><1><0>Outside of work</0>, I'm based in Madrid as an EU
           citizen. I spend my spare time on football, films and<2> learning new things</2>.</1>`,
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
        about_me: `
          <0>Ich bin Senior Full Stack Software Engineer mit<1> sechs Jahren Erfahrung</1> in der
           Entwicklung produktiver Systeme. Mein Schwerpunkt liegt auf<3> verteilten Backends und
           modularen Frontends</3>: REST-Microservices, ereignisgetriebene Kommunikation und
           Microfrontend-Architekturen. Am<5> meisten schätze ich</5> den Punkt, an dem Geschäftslogik
           und Architektur zusammentreffen — eine Domäne so gut zu verstehen, dass man den richtigen
           Kompromiss wählen kann. Mein Kernstack ist<7> React, NestJS, Java und PostgreSQL</7>,
           betrieben auf AWS. Derzeit arbeite ich bei<9> Intramed</9>, an einer Plattform für
           medizinische Fachkräfte in ganz Lateinamerika.</0><1><0>Außerhalb der Arbeit</0> lebe ich als
           EU-Bürger in Madrid. In meiner Freizeit spiele ich Fußball, schaue Filme und<2> lerne gerne
           Neues</2>.</1>`,
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
