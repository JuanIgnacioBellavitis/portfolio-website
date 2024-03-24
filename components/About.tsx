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
          After graduating from high school, I decided to pursue my passion for
          programming. I enrolled in the Programming Technician career where I
          learned{" "}
          <span className="font-medium">full-stack web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is <span className="font-medium">React, Node.js, and PostgreSQL</span>
          . I am also familiar with TypeScript and Prisma. I am always looking
          to learn new technologies. I currently work for
          <span className="font-medium"> SiloReal</span>, in a full time
          position as a software developer.
        </p>
        <p>
          <span className="italic">When I'm not coding</span>, I enjoy playing
          video games, watching movies, and going to the gym. I also enjoy{" "}
          <span className="font-medium">learning new things</span>.
        </p>
      </Trans>
    </motion.section>
  );
}
