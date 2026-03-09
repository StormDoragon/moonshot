export type GoalType = "reach" | "followers" | "affiliate" | "revenue"
export type ContentFormat = "text" | "image" | "carousel" | "reel" | "story"

export interface AnalyzeInput {
  topic: string
  hook: string
  goal: GoalType
  format: ContentFormat
  audience?: string
}

export interface AnalyzeOutput {
  viralPotential: number
  monetizationFit: number
  timingScore: number
  policyRisk: number
  strongestAngle: string
  improvements: string[]
  hooks: string[]
}

export interface IdeaCard {
  title: string
  angle: string
  format: ContentFormat
  score: number
  timingWindow: string
}
