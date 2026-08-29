import type { ComponentPropsWithoutRef } from "react";

export function Input({
  className = "",
  ...rest
}: ComponentPropsWithoutRef<"input"> & { className?: string }) {
  return (
    <input
      className={`w-full rounded-[10px] border border-border bg-surface px-3.5 py-2.5 text-sm text-ink placeholder:text-soft focus:border-accent focus:outline-none ${className}`}
      {...rest}
    />
  );
}
