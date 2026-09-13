import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { getGlossary, getGlossaryTerm } from "@/lib/glossary";
import { getArticlesByTerm } from "@/lib/articles";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getGlossary().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/glossary/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) return {};
  return {
    title: `${term.term} — IPTV Glossary`,
    description: term.definition,
    alternates: { canonical: `${site.url}/glossary/${term.slug}` },
    openGraph: {
      title: `${term.term} — IPTV Glossary`,
      description: term.definition,
      url: `${site.url}/glossary/${term.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${term.term} — IPTV Glossary`,
      description: term.definition,
    },
  };
}

export default async function GlossaryTermPage({
  params,
}: PageProps<"/glossary/[slug]">) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) notFound();

  const relatedTerms = term.related
    .map(getGlossaryTerm)
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const relatedArticles = getArticlesByTerm(term.term);

  const definedTermJsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
    url: `${site.url}/glossary/${term.slug}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "IPTV & Xtream Glossary",
      url: `${site.url}/glossary`,
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Glossary",
        item: `${site.url}/glossary`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: term.term,
        item: `${site.url}/glossary/${term.slug}`,
      },
    ],
  };

  return (
    <Container className="pb-20">
      <div className="mx-auto max-w-[740px] pt-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <p className="text-xs font-semibold uppercase tracking-wider text-soft">
          Glossary
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-ink">
          {term.term}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-ink">{term.definition}</p>
        <p className="mt-4 leading-relaxed text-muted">{term.detail}</p>

        {relatedTerms.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-bold tracking-tight text-ink">
              Related terms
            </h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {relatedTerms.map((t) => (
                <a
                  key={t.slug}
                  href={`/glossary/${t.slug}`}
                  className="rounded-[8px] border border-border bg-surface px-3 py-1.5 text-sm font-medium text-accent hover:underline"
                >
                  {t.term}
                </a>
              ))}
            </div>
          </section>
        )}

        {relatedArticles.length > 0 && (
          <section className="mt-10">
            <h2 className="text-xl font-bold tracking-tight text-ink">
              Relevant articles
            </h2>
            <ul className="mt-3 space-y-3">
              {relatedArticles.map((a) => (
                <li key={a.slug}>
                  <a
                    href={`/article/${a.slug}`}
                    className="text-accent hover:underline"
                  >
                    {a.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </Container>
  );
}
