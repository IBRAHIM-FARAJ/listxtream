import type { ReactNode } from "react";

export function KeyTakeaway({
  title = "Key Takeaway",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 rounded-[14px] border-l-4 border-accent bg-accent-soft p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
        {title}
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-ink">{children}</p>
    </aside>
  );
}
