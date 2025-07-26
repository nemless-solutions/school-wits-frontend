"use client";

interface VideoStreamProps {
  fileId: string | number;
  token: string | undefined;
}

export function VideoStream({ fileId, token }: VideoStreamProps) {
  const videoUrl = `/api/proxy-video?fileId=${fileId}&token=${encodeURIComponent(
    token ?? ""
  )}`;

  return (
    <video
      className="w-full rounded-lg"
      controls
      controlsList="nodownload"
      width="100%"
      preload="metadata"
      src={videoUrl}
    />
  );
}
