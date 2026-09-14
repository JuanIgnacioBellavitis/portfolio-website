import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies, getCaseStudy } from "@/lib/work";
import type { Metadata } from "next";
import { BsArrowLeft } from "react-icons/bs";

// ─── Static generation ────────────────────────────────────────────────────────

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.title} — Juan Ignacio Bellavitis`,
    description: cs.cardDescription,
  };
}

// ─── Components ───────────────────────────────────────────────────────────────

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
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

function Chip({ label }: { label: string }) {
  return (
    <span className="borderBlack rounded-full bg-white px-4 py-1.5 text-sm text-gray-700 dark:bg-white/10 dark:text-white/80">
      {label}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <main className="flex flex-col items-center px-4">
      {/* Back link */}
      <div className="mt-8 mb-12 w-full max-w-3xl">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition dark:text-gray-400 dark:hover:text-white"
        >
          <BsArrowLeft />
          Back to projects
        </Link>
      </div>

      <article className="w-full max-w-3xl pb-24">
        {/* Header */}
        <header className="mb-16">
          <p className="mb-3 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
            {cs.company}
          </p>
          <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl">
            {cs.title}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            {cs.subtitle}
          </p>
        </header>

        {/* Overview */}
        <SectionBlock title="Overview">
          <p>{cs.overview}</p>
        </SectionBlock>

        {/* Business problem */}
        <SectionBlock title="Business Problem">
          <p>{cs.businessProblem}</p>
        </SectionBlock>

        {/* Constraints */}
        <SectionBlock title="Constraints">
          <ul className="list-disc list-outside ml-5 space-y-2">
            {cs.constraints.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </SectionBlock>

        {/* Architecture */}
        <SectionBlock title="Architecture">
          <p>{cs.architecture}</p>
        </SectionBlock>

        {/* My contribution */}
        <SectionBlock title="My Contribution">
          <p>{cs.contribution}</p>
        </SectionBlock>

        {/* Trade-offs */}
        <SectionBlock title="Trade-offs & Decisions">
          <p>{cs.tradeoffs}</p>
        </SectionBlock>

        {/* Outcome */}
        <SectionBlock title="Outcome">
          <p>{cs.outcome}</p>
        </SectionBlock>

        {/* Divider */}
        <hr className="my-12 border-black/10 dark:border-white/10" />

        {/* Tech stack */}
        <SectionBlock title="Tech Stack">
          <div className="flex flex-wrap gap-2 mt-2">
            {cs.techStack.map((t) => (
              <Chip key={t} label={t} />
            ))}
          </div>
        </SectionBlock>
      </article>
    </main>
  );
}
