"use client";

import { cn } from "@school-wits/utils";
import { useRouter } from "next/navigation";

export function CourseModeSwitcher({
  currentType,
}: {
  currentType: "in-person" | "online";
}) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 max-w-[400px] bg-neutral-100 p-1.5 gap-2 rounded-[8px]">
      <button
        onClick={() => router.replace("?mode=in-person", { scroll: false })}
        className={cn(
          "text-center p-1.5 rounded-[6px] font-semibold cursor-pointer",
          currentType === "in-person" ? "bg-primary" : "bg-white"
        )}
      >
        In Person
      </button>
      <button
        onClick={() => router.replace("?mode=online", { scroll: false })}
        className={cn(
          "text-center p-1.5 rounded-[6px] font-semibold cursor-pointer",
          currentType === "online" ? "bg-primary" : "bg-white"
        )}
      >
        Online
      </button>
    </div>
  );
}
