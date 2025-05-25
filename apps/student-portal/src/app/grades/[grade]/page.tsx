import { GradePageHeader } from "@/components/GradePageHeader/GradePageHeader";
import { courses, grades } from "@/constants";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Course } from "../../../../types";

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

  const { grade: gradeName, illustration, gradient } = gradeStyles;
  const gradeCourses = courses[grade.toLowerCase()];

  return (
    <>
      <GradePageHeader
        grade={gradeName}
        imageSrc={illustration}
        gradeintFrom={gradient.from}
        gradientTo={gradient.to}
      />
      {
        <section className="main-container my-16">
          <h3 className="text-2xl md:text-3xl text-secondary font-semibold mb-8">
            We Offer Following Courses
          </h3>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gradeCourses.map((course, index) => (
              <CourseCard key={index} course={course} cardBg={gradient.from} />
            ))}
          </div> */}
        </section>
      }
    </>
  );
}

function CourseCard({ course, cardBg }: { course: Course; cardBg: string }) {
  return (
    <div
      style={{ background: `${cardBg}80` }}
      className="py-5 px-3 border-2 text-center flex flex-col gap-2 rounded-lg shadow-[-3px_3px_5px_rgba(0,0,0,0.2)] hover:shadow-[-6px_6px_5px_rgba(0,0,0,0.3)] hover:bg-background duration-150 hover:-translate-y-0.5 select-none"
    >
      <h2 className="text-xl font-semibold text-primary">{course.title}</h2>
      <p>{course.duration}</p>

      <Image
        className="mx-auto"
        src={course.image}
        alt={course.title}
        height={150}
        width={150}
      />
      <p>Regular Fees: {course.fees}</p>
      <p className="font-semibold">Early Bird:</p>
      <p className="text-2xl font-semibold text-primary">{course.earlyBird}</p>
    </div>
  );
}
