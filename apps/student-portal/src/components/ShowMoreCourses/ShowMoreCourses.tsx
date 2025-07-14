"use client";

import { ReactNode, useState } from "react";

export function ShowMoreCourses({
  children,
  showButton,
}: {
  children: ReactNode;
  showButton: boolean;
}) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col items-center mb-8">
      {showMore ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {children}
        </div>
      ) : (
        showButton && (
          <button
            onClick={() => setShowMore(true)}
            className="px-6 py-3 font-semibold bg-white text-secondary border border-secondary rounded-[8px] cursor-pointer hover:text-white hover:bg-secondary duration-300"
          >
            Show More
          </button>
        )
      )}
    </div>
  );
}
