import { MotionDiv } from "@/components/client-ui";
import { CourseCard } from "@/components/CourseCard/CourseCard";
import { ShowMore } from "@/components/ShowMore/ShowMore";
import { grades } from "@/constants";
import { notFound } from "next/navigation";
import SquareGroup from "../../../../../public/graphics/square-group.svg";

const _grades = grades.map((grade) => grade.grade.toLowerCase());

export default async function Courses({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const gradeSlug = (await params).grade.toLowerCase();

  if (gradeSlug !== "all" && !_grades.includes(gradeSlug)) notFound();

  return (
    <div className="relative overflow-x-clip">
      <SquareGroup className="absolute w-10 md:w-16 text-primary right-1/6 -top-4 lg:-top-20 rotate-45" />
      <div className="absolute -top-20 -left-20 w-[400px] aspect-square bg-primary/20 rounded-full blur-[120px]"></div>
      {gradeSlug === "all" && (
        <>
          <div className="absolute top-1/4 -right-20 w-xl aspect-square bg-secondary/20 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/2 -left-20 w-[430px] aspect-square bg-primary/25 rounded-full blur-[100px]"></div>
        </>
      )}
      <div className="absolute -bottom-20 -right-20 w-xl aspect-square bg-secondary/20 rounded-full blur-[120px]"></div>
      {gradeSlug === "all" ? (
        _grades.map((grade, index) => (
          <div key={index} className="main-container relative z-10">
            <MotionDiv
              className="my-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: "easeInOut" }}
            >
              <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize font-recoleta">
                Grade {grade === "o" ? "IX-X" : grade.toUpperCase()}
              </h2>
            </MotionDiv>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[...Array(3)].map((_, i) => (
                <MotionDiv
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    easings: "easeInOut",
                    delay: index === 0 && i < 3 ? 0.3 : 0,
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <CourseCard />
                </MotionDiv>
              ))}
            </div>
            <ShowMore moreContents={["1", "2", "3", "4"]} />
          </div>
        ))
      ) : (
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
            {[...Array(3)].map((_, i) => (
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
                <CourseCard />
              </MotionDiv>
            ))}
          </div>
          <ShowMore moreContents={["1", "2", "3", "4"]} />
        </div>
      )}
    </div>
  );
}
