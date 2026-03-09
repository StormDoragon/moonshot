export interface TimingFeatures {
  historicalWindowPerformance: number
  audienceActivity: number
  topicFreshness: number
  competitorNoisePenalty: number
  creatorConsistencyBonus: number
}

export function scoreTiming(f: TimingFeatures) {
  const raw =
    f.historicalWindowPerformance * 0.35 +
    f.audienceActivity * 0.25 +
    f.topicFreshness * 0.2 +
    f.competitorNoisePenalty * -0.1 +
    f.creatorConsistencyBonus * 0.1

  return Math.max(0, Math.min(100, Math.round(raw * 100)))
}
