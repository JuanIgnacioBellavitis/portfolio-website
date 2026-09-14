"use client";
import React from "react";
import SectionHeading from "./Section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

const chipVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.04 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const { t } = useTranslation();

  // Running index across all groups so the stagger animation is continuous.
  let globalIndex = 0;

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading title={t("skills")} />

      <div className="flex flex-col gap-8">
        {skillsData.map((group) => (
          <div key={group.label}>
            {/* Group label */}
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
              {group.label}
            </p>

            {/* Skill chips */}
            <ul className="flex flex-wrap gap-2 text-gray-800">
              {group.skills.map((skill) => {
                const idx = globalIndex++;
                return (
                  <motion.li
                    key={skill}
                    className="bg-white borderBlack rounded-xl px-5 py-3 text-base
                               dark:bg-white/10 dark:text-white/80"
                    variants={chipVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={idx}
                  >
                    {skill}
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
