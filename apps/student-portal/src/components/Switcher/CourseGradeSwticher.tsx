"use client";

import { cn } from "@school-wits/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MotionDiv } from "../client-ui";

const _links = [
  { title: "All Courses", link: "all" },
  { title: "Grade VI", link: "vi" },
  { title: "Grade VII", link: "vii" },
  { title: "Grade VIII", link: "viii" },
  { title: "O Levels [IX & X]", link: "o" },
];

export function CourseGradeSwitcher() {
  const grade = usePathname().split("/")[2];

  return (
    <MotionDiv className="my-10 main-container overflow-x-auto w-full no-scrollbar relative z-10">
      <div className="grid grid-cols-5 max-w-[940px] min-w-[800px] bg-neutral-100 p-1.5 gap-2 rounded-[8px]">
        {_links.map((link) => (
          <Link
            key={link.link}
            href={link.link}
            className={cn(
              "text-center p-1.5 rounded-[6px] font-semibold cursor-pointer text-nowrap",
              grade === link.link ? "bg-primary" : "bg-white"
            )}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </MotionDiv>
  );
}
