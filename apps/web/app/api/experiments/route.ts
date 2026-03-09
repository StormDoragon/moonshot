import { NextResponse } from "next/server"
import { pickWinner } from "@orbit/core/index"

export async function POST(request: Request) {
  const body = await request.json()
  const winner = pickWinner(body.variants || [])
  return NextResponse.json({ winner })
}
