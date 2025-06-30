import { MotionDiv } from "@/components/client-ui";
import { CourseCard } from "@/components/CourseCard/CourseCard";
import { CourseModeSwitcher } from "@/components/CourseModeSwitcher/CourseModeSwitcher";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { grades } from "@/constants";
import { notFound } from "next/navigation";

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

  const mode: "in-person" | "online" =
    search.mode === "online" ? "online" : "in-person";

  if (!_grades.includes(grade)) notFound();

  // const courses = await fetcher(`${baseUrl}/course/grade/${grade}`);

  return (
    <>
      <PageHeader
        header={grade === "o" ? "O Levels" : `Grades ${grade.toUpperCase()}`}
        subheader={grade === "o" ? "Grade IX & X" : undefined}
      />
      <div className="relative overflow-x-clip">
        <div className="absolute -bottom-[-150px] -right-[200px] w-[400px] md:w-xl aspect-square bg-secondary/15 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 -left-20 -translate-y-1/2 w-xs aspect-square bg-primary/15 rounded-full blur-[80px]"></div>
        <div className="main-container relative z-10">
          <MotionDiv
            className="my-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut", delay: 0.3 }}
          >
            <h2 className="text-[28px] sm:text-4xl md:text-[54px] leading-[100%] md:leading-[64px] font-semibold text-neutral-800 capitalize font-recoleta">
              Courses
            </h2>
          </MotionDiv>
          <MotionDiv
            className="my-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, easings: "easeInOut", delay: 0.6 }}
          >
            <CourseModeSwitcher currentType={mode} />
          </MotionDiv>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[...Array(5)].map((_, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  easings: "easeInOut",
                  delay: index < 3 ? 0.9 : 0,
                }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <CourseCard />
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
