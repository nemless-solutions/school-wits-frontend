import { getJWT } from "./get-jwt";

export async function authFetch(
  input: RequestInfo | URL,
  init: RequestInit = {}
) {
  const jwt = await getJWT();

  if (!jwt) {
    console.log("JWT not found in cookies");
  }

  const headers = new Headers(init.headers);
  headers.set("Authorization", `Bearer ${jwt}`);

  return fetch(input, {
    ...init,
    headers,
  });
}
