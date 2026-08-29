import { TopicLanding } from "@/components/layout/topic-landing";

export default function SetupPage() {
  return (
    <TopicLanding
      eyebrow="Guides"
      title="Setup"
      description="Step-by-step guides for connecting a player to your IPTV service and getting channels loading."
      href="/guides/setup"
      emptyHint="Setup tutorials are on the way."
    />
  );
}
