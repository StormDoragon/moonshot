export function clusterTrendKeywords(keywords: string[]) {
  const map = new Map<string, string[]>()

  for (const keyword of keywords) {
    const head = keyword.split(" ")[0]?.toLowerCase() || "general"
    const bucket = map.get(head) || []
    bucket.push(keyword)
    map.set(head, bucket)
  }

  return Array.from(map.entries()).map(([cluster, items]) => ({
    cluster,
    items,
    size: items.length
  }))
}
