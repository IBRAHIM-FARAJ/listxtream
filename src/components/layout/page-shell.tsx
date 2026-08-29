import type { ReactNode } from "react";
import { Container } from "@/components/layout/container";

export function PageShell({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Container className="pb-20">
      <div className="mx-auto max-w-[760px] pt-10">
        <h1 className="text-4xl font-bold tracking-tight text-ink">{title}</h1>
        <div className="mt-6 text-[17px] leading-relaxed text-muted">
          {children}
        </div>
      </div>
    </Container>
  );
}
