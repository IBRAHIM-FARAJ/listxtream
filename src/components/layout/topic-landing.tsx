import { Container } from "@/components/layout/container";
import { HubHeader, HubSection } from "@/components/layout/hub";
import { ArticleCard } from "@/components/cards/article-card";
import { getArticlesByCategory } from "@/lib/articles";
import type { Article } from "@/lib/content-types";

export function TopicLanding({
  eyebrow,
  title,
  description,
  href,
  emptyHint,
  articles,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  emptyHint?: string;
  articles?: Article[];
}) {
  const displayArticles = articles ?? getArticlesByCategory(href);
  return (
    <>
      <HubHeader eyebrow={eyebrow} title={title} description={description} />
      <Container>
        <HubSection title={`${title} articles`}>
          {displayArticles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {displayArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : emptyHint ? (
            <p className="rounded-[14px] border border-border bg-surface p-8 text-muted">
              {emptyHint}
            </p>
          ) : null}
        </HubSection>
      </Container>
    </>
  );
}
