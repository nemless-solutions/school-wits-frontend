// lib/auth.ts
import { cookies } from "next/headers";

export async function getJWT(): Promise<string | null> {
  const cookieStore = await cookies();
  const jwt = cookieStore.get("jwt")?.value;

  return jwt ?? null;
}
