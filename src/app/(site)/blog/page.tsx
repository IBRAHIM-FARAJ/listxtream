import { Container } from "@/components/layout/container";
import { HubHeader, HubSection } from "@/components/layout/hub";
import { ArticleCard } from "@/components/cards/article-card";
import { getLatestArticles } from "@/lib/articles";

export default function BlogPage() {
  const articles = getLatestArticles(12);
  return (
    <>
      <HubHeader
        eyebrow="Blog"
        title="Latest from ListXtream"
        description="News, explainers and commentary on IPTV, Xtream and streaming technology."
      />
      <Container>
        <HubSection title="All posts">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </HubSection>
      </Container>
    </>
  );
}
