"use client"

import { useState } from "react"

export function AnalyzerForm() {
  const [topic, setTopic] = useState("")
  const [hook, setHook] = useState("")
  const [result, setResult] = useState<unknown>(null)
  const [loading, setLoading] = useState(false)

  async function onSubmit() {
    setLoading(true)
    const res = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        topic,
        hook,
        goal: "revenue",
        format: "reel"
      })
    })
    const data = await res.json()
    setResult(data)
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <input
        className="w-full rounded-xl border p-3"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Topic"
      />
      <input
        className="w-full rounded-xl border p-3"
        value={hook}
        onChange={(e) => setHook(e.target.value)}
        placeholder="Hook"
      />
      <button className="rounded-xl bg-black px-5 py-3 text-white" onClick={onSubmit}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      {result ? (
        <pre className="overflow-auto rounded-2xl bg-slate-100 p-4 text-sm">
          {JSON.stringify(result, null, 2)}
        </pre>
      ) : null}
    </div>
  )
}
