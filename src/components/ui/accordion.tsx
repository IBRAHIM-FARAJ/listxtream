"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export function Accordion({
  items,
}: {
  items: { title: string; children: ReactNode; id: string }[];
}) {
  const [open, setOpen] = useState<string | null>(items[0]?.id ?? null);
  return (
    <div className="divide-y divide-border rounded-[14px] border border-border bg-surface">
      {items.map((item) => (
        <div key={item.id}>
          <button
            type="button"
            onClick={() => setOpen(open === item.id ? null : item.id)}
            aria-expanded={open === item.id}
            className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-ink"
          >
            {item.title}
            <span
              aria-hidden
              className={`text-soft transition-transform ${
                open === item.id ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>
          {open === item.id && (
            <div className="px-4 pb-4 text-sm text-muted">{item.children}</div>
          )}
        </div>
      ))}
    </div>
  );
}
