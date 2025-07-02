"use client";

import { useState } from "react";
import { Course } from "../../../types";
import { MotionDiv } from "../client-ui";
import { CourseCard } from "../CourseCard/CourseCard";

export function ShowMoreCourses({ moreCourses }: { moreCourses: Course[] }) {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="flex flex-col items-center mb-8">
      {showMore ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {moreCourses.map((course, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                easings: "easeInOut",
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <CourseCard course={course} />
            </MotionDiv>
          ))}
        </div>
      ) : (
        <button
          onClick={() => setShowMore(true)}
          className="px-6 py-3 font-semibold bg-white text-secondary border border-secondary rounded-[8px] cursor-pointer hover:text-white hover:bg-secondary duration-300"
        >
          Show More
        </button>
      )}
    </div>
  );
}
