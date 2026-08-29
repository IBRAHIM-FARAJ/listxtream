import type { ArticleBlock } from "@/lib/content-types";
import { KeyTakeaway } from "./key-takeaway";
import { InfoBox } from "./info-box";
import { WarningBox } from "./warning-box";
import { ComparisonTable } from "./comparison-table";

export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="text-[18px] leading-[1.8] text-[#2a313c]">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return block.level === 2 ? (
              <h2
                key={i}
                id={block.id}
                className="mt-10 scroll-mt-24 text-[30px] font-bold leading-snug tracking-tight text-ink first:mt-0"
              >
                {block.text}
              </h2>
            ) : (
              <h3
                key={i}
                id={block.id}
                className="mt-8 scroll-mt-24 text-[22px] font-semibold leading-snug tracking-tight text-ink"
              >
                {block.text}
              </h3>
            );
          case "paragraph":
            return (
              <p key={i} className="my-5">
                {block.text}
              </p>
            );
          case "list":
            return block.ordered ? (
              <ol key={i} className="my-5 list-decimal space-y-2 pl-6 marker:font-medium marker:text-accent">
                {block.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            ) : (
              <ul key={i} className="my-5 list-disc space-y-2 pl-6 marker:text-accent">
                {block.items.map((item, j) => (
                  <li key={j} className="pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="my-8 border-l-4 border-accent bg-page px-5 py-4 text-lg italic text-muted"
              >
                {block.text}
              </blockquote>
            );
          case "takeaway":
            return (
              <KeyTakeaway key={i} title={block.title}>
                {block.text}
              </KeyTakeaway>
            );
          case "info":
            return (
              <InfoBox key={i} title={block.title}>
                {block.text}
              </InfoBox>
            );
          case "warning":
            return (
              <WarningBox key={i} title={block.title}>
                {block.text}
              </WarningBox>
            );
          case "code":
            return (
              <pre
                key={i}
                className="my-6 overflow-x-auto rounded-[14px] bg-[#111827] p-5 font-mono text-sm leading-relaxed text-[#e5e7eb]"
              >
                <code>{block.text}</code>
              </pre>
            );
          case "comparison":
            return (
              <ComparisonTable
                key={i}
                caption={block.caption}
                headers={block.headers}
                rows={block.rows}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
