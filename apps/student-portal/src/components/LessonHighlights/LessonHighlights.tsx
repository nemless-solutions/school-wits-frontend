"use client";

import { lessonHighlights } from "@/constants";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../client-ui";
import { YtPlayer } from "../YtPlayer/YtPlayer";

export function LessonHighlights() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  return (
    <section className="py-16 bg-primary overflow-x-clip">
      <div className="main-container">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-50 text-center">
          Lesson Highlights <br />{" "}
          <span className="text-2xl md:text-3xl text-neutral-300">
            What We Teach
          </span>
        </h2>
        <Carousel
          className="w-full"
          opts={{
            loop: true,
            align: "start",
          }}
        >
          <CarouselContent className="select-none">
            {lessonHighlights.map((item, index) => (
              <CarouselItem
                className="md:basis-1/2 lg:basis-1/3 my-20"
                key={index}
              >
                <div className="p-4 bg-neutral-100 border-2 border-white/20 rounded-lg shadow-[0px_8px_8px_0px_rgba(0,0,0,0.2)]">
                  <p className="text-sm text-primary/80 font-bold text-center uppercase line-clamp-1">
                    {item.subject}
                  </p>
                  <div className="relative w-full aspect-video my-4">
                    <YtPlayer
                      url={item.videoLink}
                      isPlaying={playingIndex === index}
                      onPlay={() => setPlayingIndex(index)}
                      onPause={() => setPlayingIndex(null)}
                    />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-xl font-semibold text-primary line-clamp-1">
                      {item.title}
                    </h2>
                    <p className="text-secondary line-clamp-4 leading-tight">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="max-[1200px]:left-0" />
          <CarouselNext className="max-[1200px]:right-0" />
        </Carousel>
      </div>
    </section>
  );
}
