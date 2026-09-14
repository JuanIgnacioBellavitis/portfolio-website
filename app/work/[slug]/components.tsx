"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { useTranslation } from "react-i18next";

// ─── Primitives ───────────────────────────────────────────────────────────────

export function Chip({ label }: { label: string }) {
  return (
    <span className="borderBlack rounded-full bg-white px-4 py-1.5 text-sm text-gray-700 dark:bg-white/10 dark:text-white/80">
      {label}
    </span>
  );
}

/** Section headings are intentionally in English — case study content
 *  is English-only; translating only the label would be inconsistent. */
function SectionHeadingLabel({ title }: { title: string }) {
  return (
    <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
      {title}
    </h2>
  );
}

export function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-12">
      <SectionHeadingLabel title={title} />
      <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

/** The back link is navigation UI — it translates regardless of content language. */
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
