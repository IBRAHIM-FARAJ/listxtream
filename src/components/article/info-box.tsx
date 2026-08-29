import type { ReactNode } from "react";

export function InfoBox({
  title = "Good to know",
  children,
}: {
  title?: string;
  children: ReactNode;
}) {
  return (
    <aside className="my-8 rounded-[14px] border border-accent/20 bg-accent-soft/60 p-5">
      {title && (
        <p className="text-xs font-semibold uppercase tracking-wider text-accent-dark">
          {title}
        </p>
      )}
      <div className="mt-2 text-[15px] leading-relaxed text-muted">
        {children}
      </div>
    </aside>
  );
}
