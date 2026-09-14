import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/lib/work";
import { getCaseStudyEs } from "@/lib/workEs";
import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { BackLink, CaseStudyBody } from "./components";

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
  const csEn = getCaseStudy(slug);
  if (!csEn) notFound();

  const csEs = getCaseStudyEs(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: csEn.title,
    description: csEn.cardDescription,
    author: {
      "@type": "Person",
      name: "Juan Ignacio Bellavitis",
      url: SITE_URL,
    },
    url: `${SITE_URL}/work/${csEn.slug}`,
    keywords: csEn.techStack.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex flex-col items-center px-4">
        <div className="mt-8 mb-12 w-full max-w-3xl">
          <BackLink />
        </div>
        <CaseStudyBody csEn={csEn} csEs={csEs} />
      </main>
    </>
  );
}
