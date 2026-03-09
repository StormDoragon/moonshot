export interface VariantResult {
  label: string
  reach: number
  reactions: number
  comments: number
  shares: number
  clicks: number
}

export function pickWinner(variants: VariantResult[]) {
  return variants
    .map((v) => ({
      ...v,
      total: v.reactions + v.comments * 2 + v.shares * 3 + v.clicks * 2
    }))
    .sort((a, b) => b.total - a.total)[0]
}
