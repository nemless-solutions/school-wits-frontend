import { MotionDiv } from "@/components/client-ui";
import { CourseCard } from "@/components/CourseCard/CourseCard";
import { CourseModeSwitcher } from "@/components/Switcher/CourseModeSwitcher";
import { baseUrl, grades } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import { notFound } from "next/navigation";
import { Course } from "../../../../../types";

const _grades = grades.map((grade) => grade.grade.toLowerCase());

export default async function Grade({
  params,
  searchParams,
}: {
  params: Promise<{ grade: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const grade = (await params).grade.toLowerCase();
  const search = await searchParams;

  const mode: "IN_PERSON" | "ONLINE" =
    search.mode === "online" ? "ONLINE" : "IN_PERSON";

  if (!_grades.includes(grade)) notFound();

  const courses = await fetcher<Course[]>(
    `${baseUrl}/course/grade/${grade === "o" ? "ix" : grade}?mode=${mode}`
  );

  return (
    <div className="main-container relative z-10">
      <MotionDiv
        className="my-6 md:my-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, easings: "easeInOut", delay: 0.3 }}
      >
        <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize font-recoleta">
          Courses
        </h2>
      </MotionDiv>
      <MotionDiv
        className="my-6 md:my-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, easings: "easeInOut", delay: 0.6 }}
      >
        <CourseModeSwitcher currentType={mode} />
      </MotionDiv>
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {courses.map((course, index) => (
            <MotionDiv
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                easings: "easeInOut",
                delay: index < 3 ? 0.9 : 0,
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <CourseCard course={course} />
            </MotionDiv>
          ))}
        </div>
      ) : (
        <div>
          <p className="text-xl sm:text-2xl md:text-3xl text-neutral-400 text-center font-semibold my-32">
            Sorry. No course found.
          </p>
        </div>
      )}
    </div>
  );
}
