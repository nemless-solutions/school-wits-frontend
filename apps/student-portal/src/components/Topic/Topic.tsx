"use client";

import { baseUrl } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import { cn } from "@school-wits/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaLock, FaVideo } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { PiNotepadFill } from "react-icons/pi";
import { CourseFile, CourseTopic } from "../../../types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../client-ui";
import { QuizLink } from "../Quiz/QuizLink";

interface TopicProps {
  topic: CourseTopic;
  isLast?: boolean;
}

export function Topic({ topic, isLast = false }: TopicProps) {
  const { data } = useSession();
  const { id } = useParams();

  const [files, setFiles] = useState<CourseFile[] | []>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!data?.token || !topic?.id) return;

    (async () => {
      const files = await fetcher<CourseFile[]>(
        `${baseUrl}/course_file/${topic.id}`,
        data?.token
      );

      setFiles(files);
    })();
  }, [data?.token, topic.id]);

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
                {file.type === "VIDEO" && (
                  <QuizLink
                    id={Number(id)}
                    locked={topic.locked}
                    videoId={file.type === "VIDEO" ? file.id : null}
                  />
                )}
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
