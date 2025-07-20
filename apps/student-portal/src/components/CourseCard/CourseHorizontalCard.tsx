import { courseImages } from "@/constants";
import { cn } from "@school-wits/utils";
import Image from "next/image";
import dummyCourseImage from "../../../public/images/course-card-dummy-image.png";
import { Course } from "../../../types";

interface CourseHorizontalCardProps {
  course: Course;
  status?: boolean;
  showStatus?: boolean;
}

export function CourseHorizontalCard({
  course,
  status,
  showStatus = false,
}: CourseHorizontalCardProps) {
  const cousreGrade =
    course.grade === "X" || course.grade === "IX" ? "O" : course.grade;
  const courseImage = courseImages?.[cousreGrade]?.[course.title.toLowerCase()];

  return (
    <div className="border border-neutral-200 rounded-lg p-4 hover:outline-2 outline-neutral-300">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
        <Image
          src={courseImage || dummyCourseImage}
          alt={course?.title}
          className="w-full sm:w-[160px] aspect-video rounded-lg"
        />
        <div className="grow">
          <div className="flex justify-between gap-2 items-center">
            <h2 className="sm:text-lg md:text-xl font-semibold grow">
              {course?.title}
            </h2>
            {showStatus && (
              <p
                className={cn(
                  "text-xs font-semibold text-white px-3 py-1.5 rounded-lg",
                  status ? "bg-success" : "bg-secondary"
                )}
              >
                {status ? "Paid" : "Pending"}
              </p>
            )}
          </div>
          <div className="flex flex-wrap justify-between gap-x-1 gap-y-3 bg-neutral-100 rounded-[12px] p-3 text-xs md:text-sm mt-4">
            <div>
              <p className="text-neutral-600">Grade</p>
              <p className="font-medium">
                {course?.grade?.split("_").join(" & ")}
              </p>
            </div>
            <div>
              <p className="text-neutral-600">Session</p>
              <p className="font-medium">{course?.academicSession}</p>
            </div>
            <div className="">
              <p className="text-neutral-600">Duration</p>
              <p className="font-medium">5 July, 2025 - 30 June , 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
