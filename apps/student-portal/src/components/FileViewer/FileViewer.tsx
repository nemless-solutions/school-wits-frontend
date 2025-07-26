"use client";

import { Session } from "next-auth";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo from "../../../public/images/logo-icon.png";
import { PdfViewer } from "./PdfViewer";
import { VideoStream } from "./VideoStream";

interface Props {
  fileUrl: string;
  session: Session | null;
  fileId: string | number;
}

export default function FileViewer({ fileUrl, session, fileId }: Props) {
  const [contentType, setContentType] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHeaders = async () => {
      try {
        const res = await fetch(fileUrl, {
          method: "HEAD",
          headers: {
            Authorization: `Bearer ${session?.token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch headers");

        const type = res.headers.get("Content-Type");
        if (!type) throw new Error("No Content-Type");

        setContentType(type);
      } catch (err) {
        console.error("Error loading file", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHeaders();
  }, [fileUrl, session?.token]);

  if (loading) {
    return (
      <div className="w-full aspect-video border border-neutral-200 shadow-md rounded-lg">
        <div className="flex flex-col gap-2 items-center justify-center h-full animate-pulse">
          <Image
            className="w-10 md:w-24 aspect-square"
            src={logo}
            alt="logo"
            width={150}
            height={150}
          />
          <p className="text-lg font-semibold text-secondary">Loading</p>
        </div>
      </div>
    );
  }

  if (contentType?.includes("pdf")) {
    return <PdfViewer fileUrl={fileUrl} token={session?.token} />;
  }

  if (contentType?.includes("video")) {
    return (
      <div className="h-full flex items-center justify-center relative">
        <VideoStream fileId={fileId} token={session?.token} />
      </div>
    );
  }

  return <p>Unsupported file type: {contentType}</p>;
}
