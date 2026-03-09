import { ScoreCard } from "@/components/score-card"

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-6xl p-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <ScoreCard title="Avg Viral Score" value={81} />
        <ScoreCard title="Monetization Fit" value={77} />
        <ScoreCard title="Timing Confidence" value={74} />
      </div>
    </main>
  )
}
