import { ExperimentTable } from "@/components/experiment-table"

export default function ExperimentsPage() {
  return (
    <main className="mx-auto max-w-4xl p-10">
      <h1 className="mb-6 text-3xl font-bold">Experiments</h1>
      <ExperimentTable />
    </main>
  )
}
