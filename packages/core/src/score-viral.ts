export interface ViralFeatures {
  hookStrength: number
  emotionalCharge: number
  discussionPotential: number
  shareability: number
  novelty: number
  audienceFit: number
  trendVelocity: number
}

export function scoreViral(f: ViralFeatures) {
  const raw =
    f.hookStrength * 0.2 +
    f.emotionalCharge * 0.15 +
    f.discussionPotential * 0.15 +
    f.shareability * 0.2 +
    f.novelty * 0.1 +
    f.audienceFit * 0.1 +
    f.trendVelocity * 0.1

  return Math.max(0, Math.min(100, Math.round(raw * 100)))
}
