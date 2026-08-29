import type { ReactNode } from "react";

export function WarningBox({
  title = "Warning",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 rounded-[14px] border border-warning/30 bg-warning/[0.06] p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-warning">
        {title}
      </p>
      <div className="mt-2 text-[15px] leading-relaxed text-ink">{children}</div>
    </aside>
  );
}
