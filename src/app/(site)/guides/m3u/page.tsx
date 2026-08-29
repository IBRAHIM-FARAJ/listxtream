import { TopicLanding } from "@/components/layout/topic-landing";

export default function M3uPage() {
  return (
    <TopicLanding
      eyebrow="Guides"
      title="M3U"
      description="How M3U and M3U8 playlist files work, what they contain, and how to use them in a player."
      href="/guides/m3u"
      emptyHint="M3U guides are on the way."
    />
  );
}
