"use client";
import React, { useEffect } from "react";
import SectionHeading from "./Section-heading";
import { motion } from "motion/react";
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
          {"Six years building production systems at the intersection of"}
          <span className="italic"> distributed backends</span>
          {" and modular frontends — REST microservices, event-driven architectures, microfrontend systems in React. The work I care about most sits at the boundary of business rules and system design: understanding a domain well enough to make"}
          <span className="underline"> trade-offs intentionally</span>
          {". Currently at"}
          <span className="font-medium"> Intramed</span>
          {", contributing to a platform for healthcare professionals across Latin America."}
        </p>
        <p>
          {"Based in Madrid as an EU citizen. Outside of work: football, films, and the occasional deep dive into something new."}
        </p>
      </Trans>
    </motion.section>
  );
}
