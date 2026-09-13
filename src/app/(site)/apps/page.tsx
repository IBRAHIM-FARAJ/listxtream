import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { HubHeader, HubSection } from "@/components/layout/hub";
import { ArticleCard } from "@/components/cards/article-card";
import { TopicCard } from "@/components/cards/topic-card";
import { getArticlesByCategory } from "@/lib/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV Apps & Player Reviews",
  description:
    "Reviews and setup help for the IPTV players and apps worth using — player comparisons, configuration tips, and recommendations.",
  alternates: { canonical: `${site.url}/apps` },
  openGraph: {
    title: "IPTV Apps & Player Reviews",
    description:
      "Reviews and setup help for the IPTV players and apps worth using — player comparisons, configuration tips, and recommendations.",
    url: `${site.url}/apps`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IPTV Apps & Player Reviews",
    description:
      "Reviews and setup help for the IPTV players and apps worth using — player comparisons, configuration tips, and recommendations.",
  },
};

const subtopics = [
  {
    title: "IPTV Players",
    description: "Player roundups and setup guides for the most popular apps.",
    href: "/apps/iptv-players",
  },
];

export default function AppsHubPage() {
  const all = getArticlesByCategory("/apps");
  return (
    <>
      <HubHeader
        eyebrow="Apps"
        title="Apps"
        description="Reviews and setup help for the IPTV players and apps worth using."
      />
      <Container>
        <div className="grid gap-6 py-12 sm:grid-cols-2">
          {subtopics.map((t) => (
            <TopicCard key={t.href} {...t} />
          ))}
        </div>
        <HubSection title="All app guides">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {all.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </HubSection>
      </Container>
    </>
  );
}
