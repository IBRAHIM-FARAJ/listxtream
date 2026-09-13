import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { HubHeader, HubSection } from "@/components/layout/hub";
import { ArticleCard } from "@/components/cards/article-card";
import { TopicCard } from "@/components/cards/topic-card";
import { getArticlesByCategory } from "@/lib/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV Setup Guides",
  description:
    "Evergreen tutorials and explainers for every stage of your IPTV setup — beginners, M3U playlists, EPG configuration, and more.",
  alternates: { canonical: `${site.url}/guides` },
  openGraph: {
    title: "IPTV Setup Guides",
    description:
      "Evergreen tutorials and explainers for every stage of your IPTV setup — beginners, M3U playlists, EPG configuration, and more.",
    url: `${site.url}/guides`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IPTV Setup Guides",
    description:
      "Evergreen tutorials and explainers for every stage of your IPTV setup — beginners, M3U playlists, EPG configuration, and more.",
  },
};

const subtopics = [
  {
    title: "Beginners",
    description: "Start here if you are new to IPTV and streaming terminology.",
    href: "/guides/beginners",
  },
  {
    title: "Setup",
    description: "Step-by-step setup guides for connecting a player to a service.",
    href: "/guides/setup",
  },
  {
    title: "M3U",
    description: "Everything about M3U and M3U8 playlist files.",
    href: "/guides/m3u",
  },
  {
    title: "EPG",
    description: "Understanding and setting up electronic program guides.",
    href: "/guides/epg",
  },
];

export default function GuidesHubPage() {
  const all = getArticlesByCategory("/guides");
  return (
    <>
      <HubHeader
        eyebrow="Guides"
        title="Guides"
        description="Evergreen tutorials and explainers for every stage of your IPTV setup."
      />
      <Container>
        <div className="grid gap-6 py-12 sm:grid-cols-2">
          {subtopics.map((t) => (
            <TopicCard key={t.href} {...t} />
          ))}
        </div>
        <HubSection title="All guides">
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
