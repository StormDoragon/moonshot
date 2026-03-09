export function buildAnalyzerPrompt(input: {
  topic: string
  hook: string
  goal: string
  format: string
  audience?: string
}) {
  return `You are a Facebook creator strategist.
Return valid JSON only.
Analyze the following content draft.

Topic: ${input.topic}
Hook: ${input.hook}
Goal: ${input.goal}
Format: ${input.format}
Audience: ${input.audience || "general"}

Return fields:
- hookStrength (0 to 1)
- emotionalCharge (0 to 1)
- discussionPotential (0 to 1)
- shareability (0 to 1)
- novelty (0 to 1)
- audienceFit (0 to 1)
- trendVelocity (0 to 1)
- formatEligibility (0 to 1)
- watchDepthPotential (0 to 1)
- ctaCompatibility (0 to 1)
- advertiserFriendlyLikelihood (0 to 1)
- conversionIntent (0 to 1)
- audienceTrustFit (0 to 1)
- strongestAngle (string)
- improvements (array of 3 strings)
- hooks (array of 3 strings)
- policyRisk (integer 0 to 100)
`
}
