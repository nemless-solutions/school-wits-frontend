import { CourseCard } from "@/components/CourseCard/CourseCard";
import { GradePageHeader } from "@/components/GradePageHeader/GradePageHeader";
import { courses, grades } from "@/constants";
import { notFound } from "next/navigation";

export default async function GradeDetails({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade } = await params;
  const gradeStyles = grades.find(
    (g) => g.grade.toLowerCase() === grade.toLowerCase()
  );

  if (!gradeStyles) notFound();

  const { grade: gradeName, illustration } = gradeStyles;

  const data = courses[grade === "vi" || grade === "vii" ? "vi-vii" : grade];
  const currentCourses = data.filter((course) => course.type === "current");
  const regularCourses = data.filter((course) => course.type === "regular");

  return (
    <>
      <GradePageHeader
        grade={gradeName}
        imageSrc={illustration}
        gradeintFrom="#00495880"
        gradientTo="#004958"
      />
      <section className="bg-neutral-100 py-16">
        <div className="main-container">
          <h3 className="text-2xl md:text-3xl text-secondary font-semibold mb-8">
            Current Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl text-secondary font-semibold mb-8 mt-12">
            Regular Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularCourses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
