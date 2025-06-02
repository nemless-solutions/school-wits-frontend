import { GradePageHeader } from "@/components/GradePageHeader/GradePageHeader";
import { grades } from "@/constants";
import Image from "next/image";
import { notFound } from "next/navigation";
import courseBg from "../../../../../public/images/course-bg.png";

export default async function GradeDetails({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade } = await params;
  const gradeStyles = grades.find(
    (g) => g.grade.toLowerCase() === grade.toLowerCase()
  );
  let data = [];

  if (!gradeStyles) notFound();

  const res = await fetch(
    `https://backend.schoolwits.com/course/grade/${grade}`
  );

  if (res.ok) {
    data = await res.json();
  }

  const { grade: gradeName, illustration, gradient } = gradeStyles;

  return (
    <>
      <GradePageHeader
        grade={gradeName}
        imageSrc={illustration}
        gradeintFrom={gradient.from}
        gradientTo={gradient.to}
      />
      <section className="bg-neutral-100 py-16">
        <div className="main-container">
          <h3 className="text-2xl md:text-3xl text-secondary font-semibold mb-8">
            We Offer Following Courses
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map(
              (
                course: { title: string; fee: string; uid: string },
                index: number
              ) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-clip shadow-md/20 hover:shadow-lg/30 duration-200"
                >
                  <div className="relative">
                    <div className="bg-black/40 absolute top-0 left-0 h-full w-full flex items-center justify-center">
                      <div className="font-bold text-center rounded-lg overflow-clip">
                        <div className="bg-primary/75 p-2 text-xl text-neutral-200">
                          <p>{course.uid.split("-")[0].split(" ")[0]}</p>
                          <p>{course.uid.split("-")[0].split(" ")[1]}</p>
                        </div>
                        <p className="bg-secondary/75 p-1 text-2xl text-neutral-300">
                          {course.uid.split("-")[1]}
                        </p>
                      </div>
                    </div>
                    <Image src={courseBg} alt={course.title} />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold line-clamp-1">
                      {course.title}
                    </h3>
                    <p className="text-success text-lg font-bold">
                      BDT {course.fee}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
