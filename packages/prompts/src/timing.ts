export function buildTimingPrompt(context: string) {
  return `Estimate the strongest posting windows from this creator context. Return JSON only. Context: ${context}`
}
