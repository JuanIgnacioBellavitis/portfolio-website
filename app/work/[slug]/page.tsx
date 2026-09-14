import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/work";
import type { Metadata } from "next";
import { SectionBlock, Chip, BackLink } from "./components";

// ─── Static generation ────────────────────────────────────────────────────────

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

import { SITE_URL } from "@/lib/constants";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  const url = `${SITE_URL}/work/${cs.slug}`;
  return {
    title: cs.title,
    description: cs.cardDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title: cs.title,
      description: cs.cardDescription,
      siteName: "Juan Ignacio Bellavitis",
    },
    twitter: {
      card: "summary_large_image",
      title: cs.title,
      description: cs.cardDescription,
    },
  };
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.cardDescription,
    author: {
      "@type": "Person",
      name: "Juan Ignacio Bellavitis",
      url: SITE_URL,
    },
    url: `${SITE_URL}/work/${cs.slug}`,
    keywords: cs.techStack.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col items-center px-4">
      {/* Back link */}
      <div className="mt-8 mb-12 w-full max-w-3xl">
        <BackLink />
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
            {cs.techStack.map((t) => (
              <Chip key={t} label={t} />
            ))}
          </div>
        </SectionBlock>
      </article>
    </main>
    </>
  );
}
