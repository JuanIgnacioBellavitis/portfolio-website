import type { ReactNode } from "react";

export function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mb-12">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
        {title}
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
