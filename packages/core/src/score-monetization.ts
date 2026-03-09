export interface MonetizationFeatures {
  formatEligibility: number
  watchDepthPotential: number
  ctaCompatibility: number
  advertiserFriendlyLikelihood: number
  conversionIntent: number
  audienceTrustFit: number
}

export function scoreMonetization(f: MonetizationFeatures) {
  const raw =
    f.formatEligibility * 0.2 +
    f.watchDepthPotential * 0.2 +
    f.ctaCompatibility * 0.15 +
    f.advertiserFriendlyLikelihood * 0.15 +
    f.conversionIntent * 0.15 +
    f.audienceTrustFit * 0.15

  return Math.max(0, Math.min(100, Math.round(raw * 100)))
}
