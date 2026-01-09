// app/api/test/route.js

import { NextResponse } from "next/server"

export async function GET() {
  console.log('TEST ENV:', process.env.MONGO_URI)
  return NextResponse.json({ ok: true })
}
