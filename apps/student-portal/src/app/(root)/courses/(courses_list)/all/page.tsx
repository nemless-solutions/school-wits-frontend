import { MotionDiv } from "@/components/client-ui";
import { CourseCard } from "@/components/CourseCard/CourseCard";
import { ShowMoreCourses } from "@/components/ShowMoreCourses/ShowMoreCourses";
import { CourseGradeSwitcher } from "@/components/Switcher/CourseGradeSwticher";
import { baseUrl } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import SquareGroup from "../../../../../../public/graphics/square-group.svg";
import { Course } from "../../../../../../types";

const _gradesEndpoint = ["vi", "vii", "viii", "ix_x"];

export default async function AllCourses() {
  const gradeCourses = await Promise.all(
    _gradesEndpoint.map(async (grade) => {
      const courses = await fetcher<Course[]>(
        `${baseUrl}/course/grade/${grade}`
      );

      return { grade, courses };
    })
  );

  return (
    <>
      <CourseGradeSwitcher />
      <div className="relative overflow-x-clip">
        <SquareGroup className="absolute w-10 md:w-16 text-primary right-1/6 -top-4 lg:-top-20 rotate-45" />
        <div className="absolute -top-20 -left-20 w-[400px] aspect-square bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/4 -right-20 w-xl aspect-square bg-secondary/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -left-20 w-[430px] aspect-square bg-primary/25 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-xl aspect-square bg-secondary/20 rounded-full blur-[120px]"></div>
        <div className="main-container relative z-10">
          {gradeCourses.map((gradeCourse) => (
            <div key={gradeCourse.grade}>
              <MotionDiv
                className="my-10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, easings: "easeInOut" }}
              >
                <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize font-recoleta">
                  Grade {gradeCourse.grade.split("_").join("-").toUpperCase()}
                </h2>
              </MotionDiv>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {gradeCourse.courses.slice(0, 3).map((course, i) => (
                  <MotionDiv
                    key={i}
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
              <ShowMoreCourses moreCourses={gradeCourse.courses.slice(3)} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
