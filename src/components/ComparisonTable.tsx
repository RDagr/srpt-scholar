"use client";

interface ComparisonTableProps {
  title: string;
  headers: string[];
  rows: string[][];
}

export default function ComparisonTable({
  title,
  headers,
  rows,
}: ComparisonTableProps) {
  return (
    <div className="my-6">
      {title && <h3 className="subsection-heading">{title}</h3>}
      <div className="overflow-x-auto rounded-xl border border-saffron-200 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-saffron-500 text-white">
              {headers.map((header, i) => (
                <th
                  key={i}
                  className="px-4 py-3 text-left font-heading font-semibold text-sm"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className={
                  rowIndex % 2 === 0 ? "bg-white" : "bg-saffron-50"
                }
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className="px-4 py-3 text-gray-800 border-t border-saffron-100"
                    dangerouslySetInnerHTML={{ __html: cell }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
