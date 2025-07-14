"use client";

import { cn } from "@school-wits/utils";
import { useRouter } from "next/navigation";

export function CourseModeSwitcher({
  currentType,
}: {
  currentType: "IN_PERSON" | "ONLINE";
}) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-2 max-w-[400px] bg-neutral-100 p-1 md:p-1.5 gap-2 rounded-[8px]">
      <button
        onClick={() => router.replace("?mode=in-person", { scroll: false })}
        className={cn(
          "text-sm md:text-base text-center p-1 md:p-1.5 rounded-[6px] font-semibold cursor-pointer",
          currentType === "IN_PERSON" ? "bg-primary" : "bg-white"
        )}
      >
        In Person
      </button>
      <button
        onClick={() => router.replace("?mode=online", { scroll: false })}
        className={cn(
          "text-sm md:text-base text-center p-1 md:p-1.5 rounded-[6px] font-semibold cursor-pointer",
          currentType === "ONLINE" ? "bg-primary" : "bg-white"
        )}
      >
        Online
      </button>
    </div>
  );
}
