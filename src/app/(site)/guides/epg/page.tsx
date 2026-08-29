import { TopicLanding } from "@/components/layout/topic-landing";

export default function EpgPage() {
  return (
    <TopicLanding
      eyebrow="Guides"
      title="EPG"
      description="Understanding and setting up electronic program guides so you see programme names and times."
      href="/guides/epg"
      emptyHint="EPG guides are on the way."
    />
  );
}
