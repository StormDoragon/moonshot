import type { IdeaCard } from "@orbit/types/index"

export function IdeaList({ ideas }: { ideas: IdeaCard[] }) {
  return (
    <div className="grid gap-4">
      {ideas.map((idea) => (
        <div key={idea.title} className="rounded-2xl border p-4">
          <div className="text-lg font-semibold">{idea.title}</div>
          <div className="text-sm text-gray-500">{idea.angle}</div>
          <div className="mt-2 text-sm">Format: {idea.format}</div>
          <div className="text-sm">Score: {idea.score}</div>
          <div className="text-sm">Best window: {idea.timingWindow}</div>
        </div>
      ))}
    </div>
  )
}
