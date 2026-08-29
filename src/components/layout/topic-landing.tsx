import { Container } from "@/components/layout/container";
import { HubHeader, HubSection } from "@/components/layout/hub";
import { ArticleCard } from "@/components/cards/article-card";
import { getArticlesByCategory } from "@/lib/articles";

export function TopicLanding({
  eyebrow,
  title,
  description,
  href,
  emptyHint,
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  emptyHint: string;
}) {
  const articles = getArticlesByCategory(href);
  return (
    <>
      <HubHeader eyebrow={eyebrow} title={title} description={description} />
      <Container>
        <HubSection title={`${title} articles`}>
          {articles.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <p className="rounded-[14px] border border-border bg-surface p-8 text-muted">
              {emptyHint}
            </p>
          )}
        </HubSection>
      </Container>
    </>
  );
}
