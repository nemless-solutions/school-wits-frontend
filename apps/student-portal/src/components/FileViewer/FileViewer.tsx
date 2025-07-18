// app/course/[id]/FileViewer.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import logo from "../../../public/images/logo-icon.png";

interface Props {
  fileUrl: string;
  token: string | undefined;
}

export default function FileViewer({ fileUrl, token }: Props) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [contentType, setContentType] = useState<string | null>(null);

  useEffect(() => {
    const fetchFile = async () => {
      try {
        const res = await fetch(fileUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }); // this should hit your Java backend

        if (!res.ok) throw new Error("Failed to fetch file");

        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        setBlobUrl(url);
        setContentType(res.headers.get("Content-Type"));
      } catch (err) {
        console.error("Error loading file", err);
      }
    };

    fetchFile();

    return () => {
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileUrl]);

  if (!blobUrl || !contentType)
    return (
      <div className="h-full aspect-video border border-neutral-200 shadow-md rounded-lg">
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

  if (contentType.includes("pdf")) {
    return <iframe src={blobUrl} className="w-full h-[600px] border" />;
  }

  if (contentType.includes("video")) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="w-full max-w-3xl aspect-video rounded-md overflow-clip">
          <ReactPlayer
            url={blobUrl}
            controls
            playing={false}
            width="100%"
            height="100%"
          />
        </div>
      </div>
    );
  }

  return <p>Unsupported file type: {contentType}</p>;
}
