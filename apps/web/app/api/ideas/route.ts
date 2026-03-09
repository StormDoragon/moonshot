import { NextResponse } from "next/server"
import { generateIdeas } from "@orbit/core/index"

export async function POST(request: Request) {
  const body = await request.json()
  const ideas = generateIdeas(body.niche || "general", body.goal || "reach")
  return NextResponse.json({ ideas })
}
