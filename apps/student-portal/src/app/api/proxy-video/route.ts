import { baseUrl } from "@/constants";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const fileId = searchParams.get("fileId");
  const token = searchParams.get("token");

  if (!fileId) {
    return new NextResponse("Missing fileId", { status: 400 });
  }

  const backendUrl = `${baseUrl}/course_file/stream/${fileId}`;

  const rangeHeader = req.headers.get("range") || "";
  const authHeader = token ? `Bearer ${token}` : "";

  const backendResponse = await fetch(backendUrl, {
    method: "GET",
    headers: {
      Range: rangeHeader,
      Authorization: authHeader,
    },
  });

  if (!backendResponse.ok) {
    const errorText = await backendResponse.text();
    return new NextResponse(errorText, { status: backendResponse.status });
  }

  const stream = backendResponse.body;
  const headers = new Headers();

  ["content-type", "content-length", "content-range", "accept-ranges"].forEach(
    (key) => {
      const value = backendResponse.headers.get(key);
      if (value) headers.set(key, value);
    }
  );

  return new NextResponse(stream, {
    status: backendResponse.status,
    headers,
  });
}
