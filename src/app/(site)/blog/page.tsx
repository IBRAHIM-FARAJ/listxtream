import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { HubHeader, HubSection } from "@/components/layout/hub";
import { ArticleCard } from "@/components/cards/article-card";
import { getLatestArticles } from "@/lib/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV News & Commentary",
  description:
    "News, explainers and commentary on IPTV, Xtream and streaming technology from the ListXtream editorial team.",
  alternates: { canonical: `${site.url}/blog` },
  openGraph: {
    title: "IPTV News & Commentary",
    description:
      "News, explainers and commentary on IPTV, Xtream and streaming technology from the ListXtream editorial team.",
    url: `${site.url}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IPTV News & Commentary",
    description:
      "News, explainers and commentary on IPTV, Xtream and streaming technology from the ListXtream editorial team.",
  },
};

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
