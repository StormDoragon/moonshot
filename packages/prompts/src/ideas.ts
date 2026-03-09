export function buildIdeasPrompt(niche: string, goal: string) {
  return `Generate 10 Facebook content ideas for niche ${niche} with goal ${goal}. Return JSON only.`
}
