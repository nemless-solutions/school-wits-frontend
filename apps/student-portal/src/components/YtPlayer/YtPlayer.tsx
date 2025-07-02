"use client";

import { cn } from "@school-wits/utils";
import dynamic from "next/dynamic";
import { FaPlayCircle } from "react-icons/fa";

const ReactPlayer = dynamic(() => import("react-player/youtube"), {
  ssr: false,
});

interface YtPlayerProps {
  url: string;
  className?: string;
  isPlaying?: boolean;
  onPlay?: () => void;
  onPause?: () => void;
}

export function YtPlayer({
  url,
  className,
  isPlaying,
  onPlay,
  onPause,
}: YtPlayerProps) {
  return (
    <ReactPlayer
      className={cn("absolute top-0 left-0 rounded-lg", className)}
      url={url}
      light
      playing={isPlaying}
      playIcon={
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center bg-black/40">
          <div className="p-4 rounded-full bg-white/50">
            <FaPlayCircle className="text-5xl text-white bg-secondary rounded-full" />
          </div>
        </div>
      }
      height="100%"
      width="100%"
      onPlay={() => onPlay && onPlay()}
    />
  );
}
