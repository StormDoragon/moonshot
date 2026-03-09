import { IdeaList } from "@/components/idea-list"
import { generateIdeas } from "@orbit/core/index"

export default function IdeasPage() {
  const ideas = generateIdeas("AI creators", "revenue")

  return (
    <main className="mx-auto max-w-4xl p-10">
      <h1 className="mb-6 text-3xl font-bold">Idea Radar</h1>
      <IdeaList ideas={ideas} />
    </main>
  )
}
