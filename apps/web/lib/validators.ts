import { z } from "zod"

export const analyzeSchema = z.object({
  topic: z.string().min(3),
  hook: z.string().min(3),
  goal: z.enum(["reach", "followers", "affiliate", "revenue"]),
  format: z.enum(["text", "image", "carousel", "reel", "story"]),
  audience: z.string().optional()
})
