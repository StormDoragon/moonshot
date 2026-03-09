import Link from "next/link"

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl p-10">
      <h1 className="text-5xl font-bold">FB Monetization Orbit</h1>
      <p className="mt-4 max-w-2xl text-lg text-gray-600">
        Trend analysis, timing predictions, hook experiments, and monetization scoring for Facebook creators.
      </p>
      <div className="mt-8 flex gap-4">
        <Link className="rounded-xl bg-black px-5 py-3 text-white" href="/dashboard">
          Dashboard
        </Link>
        <Link className="rounded-xl border px-5 py-3" href="/analyzer">
          Analyzer
        </Link>
      </div>
    </main>
  )
}
