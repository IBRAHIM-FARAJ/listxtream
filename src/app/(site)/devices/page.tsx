import { Container } from "@/components/layout/container";
import { HubHeader, HubSection } from "@/components/layout/hub";
import { ArticleCard } from "@/components/cards/article-card";
import { DeviceCard } from "@/components/cards/device-card";
import { getArticlesByCategory } from "@/lib/articles";

const devices = [
  { name: "Fire TV", href: "/devices/fire-tv", description: "Setup, known settings, and tips for Amazon Fire TV." },
  { name: "Android TV", href: "/devices/android-tv", description: "Get IPTV running on Android TV and Google TV." },
  { name: "Smart TV", href: "/devices/smart-tv", description: "Built-in apps and browser-based IPTV for smart TVs." },
  { name: "Apple TV", href: "/devices/apple-tv", description: "Players and configuration for Apple TV." },
];

export default function DevicesHubPage() {
  const all = getArticlesByCategory("/devices");
  return (
    <>
      <HubHeader
        eyebrow="Devices"
        title="Devices"
        description="Step-by-step guidance for running IPTV on the streaming device you own."
      />
      <Container>
        <div className="grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
          {devices.map((d) => (
            <DeviceCard key={d.href} {...d} />
          ))}
        </div>
        <HubSection title="Device guides">
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
