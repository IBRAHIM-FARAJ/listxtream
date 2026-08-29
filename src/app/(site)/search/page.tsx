import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArticleCard } from "@/components/cards/article-card";
import { getArticlesByTerm } from "@/lib/articles";
import { getGlossary } from "@/lib/glossary";

export const metadata: Metadata = {
  title: "Search",
  description: "Search ListXtream articles, guides, and glossary terms.",
  robots: { index: false },
};

export default async function SearchPage({
  searchParams,
}: PageProps<"/search">) {
  const { q } = await searchParams;
  const query = (typeof q === "string" ? q : "").trim();

  const articles = query ? getArticlesByTerm(query) : [];
  const glossary = query
    ? getGlossary().filter((t) =>
        (t.term + " " + t.definition).toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <Container className="pb-20">
      <div className="mx-auto max-w-[760px] pt-12">
        <h1 className="text-3xl font-bold tracking-tight text-ink">
          What are you looking for?
        </h1>
        <p className="mt-2 text-muted">
          Search our articles, guides, and glossary.
        </p>
        <form action="/search" className="mt-6 flex gap-2">
          <Input
            name="q"
            defaultValue={query}
            placeholder="Xtream API, Fire TV, buffering..."
            aria-label="Search query"
          />
          <Button className="shrink-0">Search</Button>
        </form>

        {query && (
          <div className="mt-10">
            <p className="text-sm text-muted">
              {articles.length + glossary.length} results for{" "}
              <span className="font-medium text-ink">&quot;{query}&quot;</span>
            </p>

            {articles.length > 0 && (
              <>
                <h2 className="mt-8 text-xl font-bold tracking-tight text-ink">
                  Articles
                </h2>
                <div className="mt-4 grid gap-6 md:grid-cols-2">
                  {articles.map((a) => (
                    <ArticleCard key={a.slug} article={a} />
                  ))}
                </div>
              </>
            )}

            {glossary.length > 0 && (
              <>
                <h2 className="mt-8 text-xl font-bold tracking-tight text-ink">
                  Glossary
                </h2>
                <div className="mt-4 space-y-3">
                  {glossary.map((t) => (
                    <a
                      key={t.slug}
                      href={`/glossary/${t.slug}`}
                      className="block rounded-[14px] border border-border bg-surface p-5 transition-shadow hover:shadow-card"
                    >
                      <span className="font-semibold text-ink">{t.term}</span>
                      <span className="mt-1 block text-sm text-muted">
                        {t.definition}
                      </span>
                    </a>
                  ))}
                </div>
              </>
            )}

            {articles.length === 0 && glossary.length === 0 && (
              <p className="mt-6 rounded-[14px] border border-border bg-surface p-8 text-muted">
                No results found. Try a broader term.
              </p>
            )}
          </div>
        )}
      </div>
    </Container>
  );
}
