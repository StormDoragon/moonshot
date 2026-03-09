import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({
    status: "accepted",
    imported: Array.isArray(body.posts) ? body.posts.length : 0
  })
}
