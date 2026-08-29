import { TopicLanding } from "@/components/layout/topic-landing";

export default function BeginnersPage() {
  return (
    <TopicLanding
      eyebrow="Guides"
      title="Beginners"
      description="Plain-language introductions to IPTV, Xtream, M3U and EPG for anyone starting out."
      href="/guides/beginners"
      emptyHint="Beginner guides are on the way."
    />
  );
}
