"use client";

import { baseUrl } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import { cn } from "@school-wits/utils";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaLock, FaQuestion, FaVideo } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiNotepadFill } from "react-icons/pi";
import { CourseFile, CourseTopic, Quiz } from "../../../types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../client-ui";

interface TopicProps {
  topic: CourseTopic;
  isLast?: boolean;
  token: string | undefined;
}

export function Topic({ topic, isLast = false, token }: TopicProps) {
  const { id } = useParams();

  const [files, setFiles] = useState<CourseFile[] | []>([]);
  const [quizzes, setQuizzes] = useState<
    { videoId: number; quizzes: Quiz[] }[] | []
  >([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!token || !topic?.id) return;

    (async () => {
      const files = await fetcher<CourseFile[]>(
        `${baseUrl}/course_file/${topic.id}`,
        token
      );
      const videoIds = files
        .filter((file) => file.type === "VIDEO")
        .map((file) => file.id);

      const quiz = await Promise.all(
        videoIds.map(async (id) => {
          const quizzes = await fetcher<Quiz[]>(
            `${baseUrl}/quiz/video/${id}`,
            token
          );
          return { quizzes, videoId: id };
        })
      );

      setQuizzes(quiz);
      setFiles(files);
    })();
  }, [token, topic.id]);

  return (
    <div key={topic.id}>
      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className={cn(topic.locked && "opacity-30")}
      >
        <CollapsibleTrigger className="p-4 pb-0 w-full text-start flex items-center justify-between cursor-pointer">
          <div className="flex items-center gap-3">
            {topic.locked && <FaLock />}
            <div className="text-lg font-medium">{topic.title}</div>
          </div>
          <IoIosArrowDown className={cn("text-xl", open && "rotate-180")} />
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-4">
          {files.length > 0 ? (
            files.map((file) => (
              <div key={file.id}>
                <Link
                  href={
                    topic.locked ? "" : `/courses/content/${id}/file/${file.id}`
                  }
                  className="flex items-center gap-4 hover:bg-neutral-100 px-4 py-3 duration-150"
                >
                  {file.type === "VIDEO" ? (
                    <div className="p-2 bg-secondary text-white rounded-full text-sm">
                      <FaVideo />
                    </div>
                  ) : file.type === "PDF" ? (
                    <div className="p-2 bg-secondary text-white rounded-full text-sm">
                      <PiNotepadFill />
                    </div>
                  ) : null}
                  <div>{file.title}</div>
                </Link>
                {file.type === "VIDEO" &&
                  quizzes
                    ?.filter((q) => q.videoId === file.id)
                    ?.map((q) => q.quizzes)
                    ?.flat()
                    ?.map((quiz) => (
                      <Link
                        key={quiz.id}
                        href={
                          topic.locked
                            ? ""
                            : `/courses/content/${id}/quiz/${quiz.id}`
                        }
                        className="flex items-center gap-4 hover:bg-neutral-100 px-4 py-3 duration-150"
                      >
                        <div className="p-2 bg-secondary text-white rounded-full text-sm">
                          <FaQuestion />
                        </div>
                        <div>{quiz.title}</div>
                      </Link>
                    ))}
              </div>
            ))
          ) : (
            <p className="text-lg font-semibold text-neutral-400 px-5">
              No Files
            </p>
          )}
        </CollapsibleContent>
      </Collapsible>
      <hr className="mt-4" />
    </div>
  );
}
