export function ExperimentTable() {
  const rows = [
    { label: "Hook A", score: 78 },
    { label: "Hook B", score: 91 }
  ]

  return (
    <table className="w-full overflow-hidden rounded-2xl border border-collapse">
      <thead>
        <tr className="bg-slate-50 text-left">
          <th className="p-3">Variant</th>
          <th className="p-3">Score</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="border-t">
            <td className="p-3">{row.label}</td>
            <td className="p-3">{row.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
