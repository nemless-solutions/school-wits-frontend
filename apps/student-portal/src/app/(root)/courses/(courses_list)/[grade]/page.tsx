import { MotionDiv } from "@/components/client-ui";
import { CourseCard } from "@/components/CourseCard/CourseCard";
import { CourseGradeSwitcher } from "@/components/Switcher/CourseGradeSwticher";
import { baseUrl, grades } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import { notFound } from "next/navigation";
import SquareGroup from "../../../../../../public/graphics/square-group.svg";
import { Course } from "../../../../../../types";

const _grades = grades.map((grade) => grade.grade.toLowerCase());

export default async function GradeWiseCourses({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const gradeSlug = (await params).grade.toLowerCase();

  if (!_grades.includes(gradeSlug)) notFound();

  const courses = await fetcher<Course[]>(
    `${baseUrl}/course/grade/${gradeSlug === "o" ? "ix_x" : gradeSlug}`
  );

  return (
    <>
      <CourseGradeSwitcher />
      <div className="relative overflow-x-clip">
        <SquareGroup className="absolute w-10 md:w-16 text-primary right-1/6 -top-4 lg:-top-20 rotate-45" />
        <div className="absolute -top-20 -left-20 w-[400px] aspect-square bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-20 -right-20 w-xl aspect-square bg-secondary/20 rounded-full blur-[120px]"></div>
        <div>
          <div className="main-container relative z-10">
            <MotionDiv
              className="my-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
            >
              <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize font-recoleta">
                Grade {gradeSlug === "o" ? "IX-X" : gradeSlug.toUpperCase()}
              </h2>
            </MotionDiv>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {courses.map((course, i) => (
                <MotionDiv
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    easings: "easeInOut",
                    delay: i < 3 ? 0.3 : 0,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <CourseCard course={course} />
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
