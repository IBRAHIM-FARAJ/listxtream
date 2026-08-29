export function ComparisonTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  return (
    <figure className="my-8 overflow-hidden rounded-[14px] border border-border">
      {caption && (
        <figcaption className="border-b border-border bg-page px-5 py-3 text-sm font-semibold text-ink">
          {caption}
        </figcaption>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr className="bg-surface">
              {headers.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="border-b border-border px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="bg-surface">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`border-b border-border px-5 py-3 text-muted ${
                      j === 0 ? "font-medium text-ink" : ""
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}
