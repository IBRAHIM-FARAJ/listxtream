import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { ArticleHeader } from "@/components/article/article-header";
import { ArticleBody } from "@/components/article/article-body";
import { TableOfContents } from "@/components/article/table-of-contents";
import { RelatedArticles } from "@/components/article/related-articles";
import { Accordion } from "@/components/ui/accordion";
import { getArticle, getAllArticles } from "@/lib/articles";
import { getGlossaryTerm } from "@/lib/glossary";
import type { ArticleBlock } from "@/lib/content-types";
import { site } from "@/lib/site";

export const dynamicParams = true;

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/article/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `${site.url}/article/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.published,
      modifiedTime: article.updated,
    },
  };
}

type TocItem = { id: string; text: string; level: number };

function buildToc(blocks: ArticleBlock[]): TocItem[] {
  return blocks
    .filter((b) => b.type === "heading")
    .map((b) => ({ id: b.id, text: b.text, level: b.level }));
}

export default async function ArticlePage({
  params,
}: PageProps<"/article/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const toc = buildToc(article.blocks);
  const related = (article.related ?? [])
    .map(getArticle)
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const relatedGlossary = (article.topics ?? [])
    .map((t) => getGlossaryTerm(t.toLowerCase()))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <Container className="pb-20">
      <div className="pt-10">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: article.title,
              description: article.excerpt,
              datePublished: article.published,
              dateModified: article.updated,
              author: { "@type": "Organization", name: "ListXtream" },
              publisher: {
                "@type": "Organization",
                name: "ListXtream",
                url: site.url,
              },
              mainEntityOfPage: `${site.url}/article/${article.slug}`,
            }),
          }}
        />
        <ArticleHeader article={article} />

        <div className="mx-auto mt-10 grid max-w-[1120px] grid-cols-1 gap-10 md:grid-cols-[220px_1fr]">
          <aside className="hidden md:block">
            <div className="sticky top-24">
              <TableOfContents items={toc} />
            </div>
          </aside>

          <div className="min-w-0 max-w-[740px]">
            <div className="md:hidden">
              <Accordion
                items={[
                  {
                    id: "toc",
                    title: "On this page",
                    children: (
                      <nav className="space-y-2">
                        {toc.map((t) => (
                          <a
                            key={t.id}
                            href={`#${t.id}`}
                            className="block text-muted hover:text-accent"
                          >
                            {t.text}
                          </a>
                        ))}
                      </nav>
                    ),
                  },
                ]}
              />
              <div className="h-6" />
            </div>

            <ArticleBody blocks={article.blocks} />

            {relatedGlossary.length > 0 && (
              <aside className="mt-10 rounded-[14px] border border-border bg-page p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-soft">
                  Related terms
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {relatedGlossary.map((g) => (
                    <a
                      key={g.slug}
                      href={`/glossary/${g.slug}`}
                      className="rounded-[8px] bg-white px-3 py-1 text-sm font-medium text-accent hover:underline"
                    >
                      {g.term}
                    </a>
                  ))}
                </div>
              </aside>
            )}

            <RelatedArticles articles={related} />
          </div>
        </div>
      </div>
    </Container>
  );
}
