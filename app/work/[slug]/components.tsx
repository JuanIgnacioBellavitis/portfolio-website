"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import type { CaseStudy } from "@/lib/work";

// ─── Primitives ───────────────────────────────────────────────────────────────

export function Chip({ label }: { label: string }) {
  return (
    <span className="borderBlack rounded-full bg-white px-4 py-1.5 text-sm text-gray-700 dark:bg-white/10 dark:text-white/80">
      {label}
    </span>
  );
}

export function SectionBlock({
  titleKey,
  children,
}: {
  titleKey: string;
  children: ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
        {t(titleKey)}
      </h2>
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function BackLink() {
  const { t } = useTranslation();
  return (
    <Link
      href="/#projects"
      className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition dark:text-gray-400 dark:hover:text-white"
    >
      <BsArrowLeft />
      {t("back_to_projects")}
    </Link>
  );
}

// ─── Body ─────────────────────────────────────────────────────────────────────

/** Renders the full case study body, switching to the ES version when the UI
 *  language is Spanish. Content for other languages is served in English. */
export function CaseStudyBody({
  csEn,
  csEs,
}: {
  csEn: CaseStudy;
  csEs: CaseStudy | undefined;
}) {
  const { i18n } = useTranslation();
  const cs = i18n.language === "es" && csEs ? csEs : csEn;

  return (
    <article className="w-full max-w-3xl pb-24">
      <header className="mb-16">
        <p className="mb-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          {cs.company}
        </p>
        <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
          {cs.title}
        </h1>
        <p className="text-lg text-gray-500 dark:text-gray-400">{cs.subtitle}</p>
      </header>

      <SectionBlock titleKey="section_overview">
        <p>{cs.overview}</p>
      </SectionBlock>

      <SectionBlock titleKey="section_business_problem">
        <p>{cs.businessProblem}</p>
      </SectionBlock>

      <SectionBlock titleKey="section_constraints">
        <ul className="list-disc list-outside ml-5 space-y-2">
          {cs.constraints.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </SectionBlock>

      <SectionBlock titleKey="section_architecture">
        <p>{cs.architecture}</p>
      </SectionBlock>

      <SectionBlock titleKey="section_contribution">
        <p>{cs.contribution}</p>
      </SectionBlock>

      <SectionBlock titleKey="section_tradeoffs">
        <p>{cs.tradeoffs}</p>
      </SectionBlock>

      <SectionBlock titleKey="section_outcome">
        <p>{cs.outcome}</p>
      </SectionBlock>

      <hr className="my-12 border-black/10 dark:border-white/10" />

      <SectionBlock titleKey="section_tech_stack">
        <div className="flex flex-wrap gap-2 mt-2">
          {cs.techStack.map((tag) => (
            <Chip key={tag} label={tag} />
          ))}
        </div>
      </SectionBlock>
    </article>
  );
}
