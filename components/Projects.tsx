"use client";
import React from "react";
import Link from "next/link";
import SectionHeading from "./Section-heading";
import { caseStudies } from "@/lib/work";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading title={t("my_projects_title")} />

      <div className="flex flex-col gap-6">
        {caseStudies.map((cs, index) => (
          <motion.div
            key={cs.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Link
              href={`/work/${cs.slug}`}
              className="group block borderBlack rounded-2xl bg-white p-7
                         hover:bg-gray-50 transition-colors
                         dark:bg-white/5 dark:hover:bg-white/10"
            >
              {/* Company tag */}
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                {cs.company}
              </p>

              {/* Title */}
              <h3 className="mb-3 text-lg font-semibold leading-snug text-gray-900 dark:text-white">
                {cs.title}
              </h3>

              {/* Description */}
              <p className="mb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {cs.cardDescription}
              </p>

              {/* Tech chips */}
              <div className="mb-5 flex flex-wrap gap-2">
                {cs.cardTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600
                               dark:bg-white/10 dark:text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-900 dark:text-white group-hover:gap-2.5 transition-all">
                {t("read_case_study")}
                <BsArrowRight className="opacity-70" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
