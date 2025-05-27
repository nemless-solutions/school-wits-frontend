import { cookies } from "next/headers";

export async function setCookie(token: string): Promise<void> {
  const cookieStore = await cookies();

  cookieStore.set("jwt", token, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24, // 1 day
    sameSite: "none",
    path: "/",
  });
}
