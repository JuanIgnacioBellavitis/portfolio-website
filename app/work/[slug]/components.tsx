"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { useTranslation } from "react-i18next";

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

export function Chip({ label }: { label: string }) {
  return (
    <span className="borderBlack rounded-full bg-white px-4 py-1.5 text-sm text-gray-700 dark:bg-white/10 dark:text-white/80">
      {label}
    </span>
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
