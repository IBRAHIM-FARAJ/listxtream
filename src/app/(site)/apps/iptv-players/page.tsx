import { TopicLanding } from "@/components/layout/topic-landing";

export default function IptvPlayersPage() {
  return (
    <TopicLanding
      eyebrow="Apps"
      title="IPTV Players"
      description="The best players this year, what makes each one stand out, and how to choose the right app for your device."
      href="/apps/iptv-players"
      emptyHint="Player roundups are on the way."
    />
  );
}
