import { NextResponse } from "next/server"
import { scoreTiming } from "@orbit/core/index"

export async function POST() {
  const score = scoreTiming({
    historicalWindowPerformance: 0.76,
    audienceActivity: 0.81,
    topicFreshness: 0.7,
    competitorNoisePenalty: 0.25,
    creatorConsistencyBonus: 0.64
  })

  return NextResponse.json({
    windows: ["12:30 PM", "7:30 PM", "8:45 PM"],
    score
  })
}
