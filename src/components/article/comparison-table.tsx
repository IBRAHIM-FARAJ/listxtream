export function ComparisonTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: string[][];
}) {
  const regionLabel = caption
    ? `${caption} — tableau défilant horizontalement`
    : "Tableau de comparaison défilant horizontalement";

  return (
    <figure className="my-8 overflow-hidden rounded-[14px] border border-border">
      {caption && (
        <figcaption className="border-b border-border bg-page px-5 py-3 text-sm font-semibold text-ink">
          {caption}
        </figcaption>
      )}
      <p className="border-b border-border bg-surface px-5 py-2 text-xs text-muted sm:hidden">
        Faites défiler horizontalement pour voir toutes les colonnes.
      </p>
      <div
        role="region"
        aria-label={regionLabel}
        tabIndex={0}
        className="overflow-x-auto focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-[-2px]"
      >
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
