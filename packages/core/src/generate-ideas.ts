import type { ContentFormat, IdeaCard } from "@orbit/types/index"

const FORMATS: ContentFormat[] = ["text", "image", "carousel", "reel", "story"]

export function generateIdeas(niche: string, goal: string): IdeaCard[] {
  return [
    {
      title: `3 mistakes ${niche} creators keep making`,
      angle: `Teach + pattern interrupt for ${goal}`,
      format: "reel",
      score: 82,
      timingWindow: "7:30 PM"
    },
    {
      title: `Before and after: what changed in ${niche}`,
      angle: "Transformation proof",
      format: "carousel",
      score: 76,
      timingWindow: "8:15 PM"
    },
    {
      title: `Unpopular truth about ${niche}`,
      angle: "Debate magnet",
      format: FORMATS[0],
      score: 74,
      timingWindow: "12:30 PM"
    }
  ]
}
