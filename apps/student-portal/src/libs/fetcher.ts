export class FetchError extends Error {
  status: number;
  body: unknown;

  constructor(message: string, status: number, body: unknown) {
    super(message);
    this.name = "FetchError";
    this.status = status;
    this.body = body;
  }
}

export async function fetcher<T>(
  url: string,
  token?: string,
  options?: RequestInit
): Promise<T> {
  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options?.headers || {}),
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let responseBody: any = null;
  const contentType = res.headers.get("content-type");

  // Try parsing body (only if there's content)
  if (contentType?.includes("application/json")) {
    try {
      responseBody = await res.json();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      throw new FetchError("Failed to parse JSON response", res.status, null);
    }
  } else {
    responseBody = await res.text();
  }

  if (!res.ok) {
    const message =
      typeof responseBody === "string"
        ? responseBody
        : responseBody?.message || `HTTP error ${res.status}`;
    throw new FetchError(message, res.status, responseBody);
  }

  return responseBody as T;
}
