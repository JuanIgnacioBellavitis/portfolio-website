"use client";
import React, { useEffect } from "react";
import SectionHeading from "./Section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { Trans, useTranslation } from "react-i18next";

export default function About() {
  const { ref } = useSectionInView("About");
  const { t } = useTranslation();

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading title={t("about_me_title")} />
      <Trans i18nKey="about_me">
        <p className="mb-3">
          I'm a Senior Full Stack Software Engineer with
          <span className="font-medium"> six years of experience</span> building
          production systems. Most of my work sits in
          <span className="italic"> distributed backends and modular frontends</span>:
          REST microservices, event-driven messaging and microfrontend
          architectures. What I
          <span className="underline"> enjoy most</span> is the point where
          business rules meet architecture — understanding a domain well enough
          to pick the right trade-off. My core stack is
          <span className="font-medium"> React, NestJS, Java and PostgreSQL</span>,
          running on AWS. I currently work at
          <span className="font-medium"> Intramed</span>, on a platform used by
          healthcare professionals across Latin America.
        </p>
        <p>
          <span className="italic">Outside of work</span>, I'm based in Madrid
          as an EU citizen. I spend my spare time on football, films and
          <span className="font-medium"> learning new things</span>.
        </p>
      </Trans>
    </motion.section>
  );
}
