import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { HubHeader, HubSection } from "@/components/layout/hub";
import { ArticleCard } from "@/components/cards/article-card";
import { TopicCard } from "@/components/cards/topic-card";
import { getArticlesByCategory } from "@/lib/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Xtream Codes & API Guides",
  description:
    "Understand Xtream technologies, terminology, APIs, players and troubleshooting — practical guides for modern IPTV streaming.",
  alternates: { canonical: `${site.url}/xtream` },
  openGraph: {
    title: "Xtream Codes & API Guides",
    description:
      "Understand Xtream technologies, terminology, APIs, players and troubleshooting — practical guides for modern IPTV streaming.",
    url: `${site.url}/xtream`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Xtream Codes & API Guides",
    description:
      "Understand Xtream technologies, terminology, APIs, players and troubleshooting — practical guides for modern IPTV streaming.",
  },
};

const subtopics = [
  {
    title: "Xtream Codes",
    description:
      "Understand the login format, how services use it, and what the terms mean.",
    href: "/xtream/xtream-codes",
  },
  {
    title: "Xtream API",
    description:
      "Detailed guides on the structured API players use to load channels and guides.",
    href: "/xtream/xtream-api",
  },
  {
    title: "Xtream Players",
    description:
      "Choosing and configuring the players that work with Xtream connections.",
    href: "/xtream/xtream-players",
  },
  {
    title: "Xtream Troubleshooting",
    description:
      "Fix login errors, blank lists, and playback issues on a compatible player.",
    href: "/xtream/xtream-troubleshooting",
  },
];

export default function XtreamHubPage() {
  const all = getArticlesByCategory("/xtream");
  return (
    <>
      <HubHeader
        eyebrow="Topic Hub"
        title="Xtream"
        description="Understand Xtream technologies, terminology, APIs, players and troubleshooting."
      />
      <Container>
        <div className="grid gap-6 py-12 sm:grid-cols-2">
          {subtopics.map((t) => (
            <TopicCard key={t.href} {...t} count={0} />
          ))}
        </div>

        <HubSection title="Xtream guides">
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
