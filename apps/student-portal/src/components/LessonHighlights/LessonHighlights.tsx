"use client";

import { lessonHighlights } from "@/constants";
import { cn } from "@school-wits/utils";
import { useState } from "react";
import SquareGroupIcon from "../../../public/graphics/square-group.svg";
import { MotionDiv } from "../client-ui";
import { YtPlayer } from "../YtPlayer/YtPlayer";

export function LessonHighlights() {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const [currentSubject, setCurrentSubject] = useState("Mathematics");

  return (
    <section className="my-8 pb-10">
      <div className="main-container">
        <div className="max-w-[1080px] mx-auto relative">
          <SquareGroupIcon className="h-10 w-10 md:h-16 md:w-16 absolute bottom-[calc(100%-20px)] right-[calc(100%-40px)] md:bottom-0 md:right-1/5 text-secondary/20 -rotate-[23.35deg]" />
          <div className="text-center">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <p className="px-4 py-1 md:px-6 md:py-2 text-sm md:text-lg font-semibold bg-secondary/10 w-fit mx-auto rounded-full mb-3">
                What We Teach
              </p>
              <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize mb-10 font-recoleta">
                Lesson Highlights
              </h2>
            </MotionDiv>
          </div>
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut" }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="my-10 overflow-x-auto w-full no-scrollbar relative z-10">
              <div className="grid grid-cols-5 mx-auto max-w-[940px] min-w-[720px] bg-neutral-100 p-1.5 gap-2 rounded-[8px]">
                {lessonHighlights.map((lesson) => (
                  <button
                    onClick={() => setCurrentSubject(lesson.subject)}
                    key={lesson.subject}
                    className={cn(
                      "text-center p-1.5 rounded-[6px] text-sm md:text-base font-semibold cursor-pointer text-nowrap",
                      currentSubject === lesson.subject
                        ? "bg-primary"
                        : "bg-white"
                    )}
                  >
                    {lesson.subject}
                  </button>
                ))}
              </div>
            </div>
            <div>
              {lessonHighlights.map(
                (lesson, index) =>
                  currentSubject === lesson.subject && (
                    <div key={lesson.subject}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12">
                        <div className="relative w-full aspect-video rounded-2xl overflow-clip">
                          <YtPlayer
                            url={lesson.videoLink}
                            isPlaying={playingIndex === index}
                            onPlay={() => setPlayingIndex(index)}
                            onPause={() => setPlayingIndex(null)}
                          />
                        </div>
                        <div className="space-y-4 relative">
                          <h2 className="text-2xl text-center sm:text-3xl md:text-start md:text-[40px] font-semibold font-recoleta">
                            {lesson.title}
                          </h2>
                          <p className="text-sm text-center md:text-start md:text-base">
                            {lesson.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
              )}
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
