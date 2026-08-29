import { TopicLanding } from "@/components/layout/topic-landing";

export default function AppleTvPage() {
  return (
    <TopicLanding
      eyebrow="Devices"
      title="Apple TV"
      description="Players and configuration for running IPTV comfortably on Apple TV."
      href="/devices/apple-tv"
      emptyHint="Apple TV guides are on the way."
    />
  );
}
