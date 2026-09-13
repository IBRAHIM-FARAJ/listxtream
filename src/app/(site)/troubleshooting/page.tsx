import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { HubHeader, HubSection } from "@/components/layout/hub";
import { ArticleCard } from "@/components/cards/article-card";
import { Input } from "@/components/ui/input";
import { getArticlesByCategory } from "@/lib/articles";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "IPTV Troubleshooting Guides",
  description:
    "Fixed guides for the most common IPTV and Xtream problems — buffering, login errors, blank channel lists, EPG issues, and more.",
  alternates: { canonical: `${site.url}/troubleshooting` },
  openGraph: {
    title: "IPTV Troubleshooting Guides",
    description:
      "Fixed guides for the most common IPTV and Xtream problems — buffering, login errors, blank channel lists, EPG issues, and more.",
    url: `${site.url}/troubleshooting`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "IPTV Troubleshooting Guides",
    description:
      "Fixed guides for the most common IPTV and Xtream problems — buffering, login errors, blank channel lists, EPG issues, and more.",
  },
};

const quick = [
  "Buffering",
  "EPG issues",
  "Login errors",
  "Playback issues",
  "Connection drops",
];

export default function TroubleshootingHubPage() {
  const all = getArticlesByCategory("/troubleshooting");
  return (
    <>
      <HubHeader
        eyebrow="Help"
        title="Troubleshooting"
        description="Fixed guides for the most common IPTV and Xtream problems, in the order to try them."
      />
      <Container>
        <form action="/search" className="py-8">
          <label
            htmlFor="ts-search"
            className="mb-2 block text-sm font-medium text-ink"
          >
            Search for a problem
          </label>
          <Input
            id="ts-search"
            name="q"
            placeholder="e.g. buffering, login error, blank list"
          />
        </form>
        <div className="flex flex-wrap gap-2 pb-8">
          {quick.map((p) => (
            <a
              key={p}
              href={`/search?q=${encodeURIComponent(p)}`}
              className="rounded-[8px] border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              {p}
            </a>
          ))}
        </div>
        <HubSection title="Fixes">
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
