import { NextResponse } from "next/server"
import { analyzeSchema } from "@/lib/validators"
import { openai } from "@/lib/openai"
import { buildAnalyzerPrompt } from "@orbit/prompts/analyzer"
import { scoreMonetization, scoreTiming, scoreViral } from "@orbit/core/index"

export async function POST(request: Request) {
  try {
    const json = await request.json()
    const input = analyzeSchema.parse(json)

    const response = await openai.responses.create({
      model: "gpt-5-mini",
      input: buildAnalyzerPrompt(input)
    })

    const text = response.output_text || "{}"
    const parsed = JSON.parse(text)

    const viralPotential = scoreViral({
      hookStrength: parsed.hookStrength,
      emotionalCharge: parsed.emotionalCharge,
      discussionPotential: parsed.discussionPotential,
      shareability: parsed.shareability,
      novelty: parsed.novelty,
      audienceFit: parsed.audienceFit,
      trendVelocity: parsed.trendVelocity
    })

    const monetizationFit = scoreMonetization({
      formatEligibility: parsed.formatEligibility,
      watchDepthPotential: parsed.watchDepthPotential,
      ctaCompatibility: parsed.ctaCompatibility,
      advertiserFriendlyLikelihood: parsed.advertiserFriendlyLikelihood,
      conversionIntent: parsed.conversionIntent,
      audienceTrustFit: parsed.audienceTrustFit
    })

    const timingScore = scoreTiming({
      historicalWindowPerformance: 0.7,
      audienceActivity: 0.75,
      topicFreshness: parsed.trendVelocity,
      competitorNoisePenalty: 0.2,
      creatorConsistencyBonus: 0.6
    })

    return NextResponse.json({
      viralPotential,
      monetizationFit,
      timingScore,
      policyRisk: parsed.policyRisk,
      strongestAngle: parsed.strongestAngle,
      improvements: parsed.improvements,
      hooks: parsed.hooks
    })
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to analyze content", detail: String(error) },
      { status: 400 }
    )
  }
}
