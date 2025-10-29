import { NextResponse } from "next/server"
import { supabaseServer } from "@/lib/supabaseServer"

export async function POST(req: Request) {
  const body = await req.json()
  const { email, name } = body
  const { data, error } = await supabaseServer.from("Admin").insert({ email, name }).select().single()
  if (error) return NextResponse.json({ error: error.message }, { status: 400 })
  return NextResponse.json(data)
}