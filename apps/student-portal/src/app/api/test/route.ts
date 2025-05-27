// app/api/protected/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const token = (await cookieStore).get("accessToken")?.value;

  return NextResponse.json({ message: "Token found", token });
}
