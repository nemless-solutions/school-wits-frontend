import { Button } from "@/components/client-ui";
import { courseBundleFetcher } from "@/libs/courseBundleFethcer";
import Image from "next/image";
import Link from "next/link";
import courseImage from "../../../public/images/course-card-dummy-image.png";
import { Course, CourseBundle } from "../../../types";

interface CourseCardProps {
  course: Course;
}

export async function CourseCard({ course }: CourseCardProps) {
  const courseBundle = await courseBundleFetcher<CourseBundle>(course.grade);

  const href = courseBundle?.courses.map((c) => c.id).includes(course.id)
    ? `/courses/details/bundle/${courseBundle.id}/${courseBundle.courses[0].id}`
    : `/courses/details/${course.id}`;

  return (
    <>
      <Link href={href} className="hidden md:block">
        <CardBody course={course} href={href} />
      </Link>
      <div className="md:hidden">
        <CardBody course={course} href={href} showButton />
      </div>
    </>
  );
}

function CardBody({
  course,
  href,
  showButton = false,
}: {
  course: Course;
  href: string;
  showButton?: boolean;
}) {
  return (
    <div className="bg-white rounded-[12px] p-4 shadow-[1px_1px_15px_0px_rgba(0,0,0,0.2)] hover:shadow-[1px_4px_15px_0px_rgba(0,0,0,0.4)] duration-200">
      <div className="overflow-hidden">
        <Image
          src={courseImage}
          alt="Course Image"
          className="w-full rounded-[8px]"
        />
      </div>
      <h2 className="text-black text-lg md:text-xl font-semibold my-4">
        {course.title}
      </h2>
      {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-y-2">
          <div className="flex items-center gap-2">
            <Image
              className="w-4 h-4"
              src={videoReplay}
              alt="video replay icon"
              height={20}
              width={20}
            />
            <p className="text-xs text-[#71717A]">
              {course.numberOfLessons}+ Lessons
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              className="w-4 h-4"
              src={notes}
              alt="video replay icon"
              height={20}
              width={20}
            />
            <p className="text-xs text-[#71717A]">
              {course.numberOfNotes}+ Notes
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              className="w-4 h-4"
              src={worksheet}
              alt="video replay icon"
              height={20}
              width={20}
            />
            <p className="text-xs text-[#71717A]">
              {course.numberOfWorksheet}+ Worksheet
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              className="w-4 h-4"
              src={quiz}
              alt="video replay icon"
              height={20}
              width={20}
            />
            <p className="text-xs text-[#71717A]">
              {course.numberOfQuizzes}+ Quizzes
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              className="w-4 h-4"
              src={fileEdit}
              alt="video replay icon"
              height={20}
              width={20}
            />
            <p className="text-xs text-[#71717A]">
              {course.numberOfExams}+ Exams
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image
              className="w-4 h-4"
              src={headset}
              alt="video replay icon"
              height={20}
              width={20}
            />
            <p className="text-xs text-[#71717A]">
              {course.numberOfSession}+ Session
            </p>
          </div>
        </div> */}
      <div className="flex justify-between gap-1 bg-neutral-100 rounded-[12px] p-3 text-xs md:text-sm mt-5">
        <div>
          <p className="text-neutral-600">Session</p>
          <p className="font-medium">{course.academicSession}</p>
        </div>
        <div className="">
          <p className="text-neutral-600">Duration</p>
          <p className="font-medium">5 July, 2025 - 30 June , 2026</p>
        </div>
      </div>
      <div className="h-px w-full bg-neutral-200 my-5" />
      <div className="flex justify-between items-center">
        <p className="px-3 py-2 text-xs md:text-sm font-semibold rounded-[8px] bg-neutral-100 capitalize">
          {course.mode.split("_").join(" ").toLowerCase()}
        </p>
        <div>
          <div className="flex gap-2">
            {/* <p className="text-xs md:text-sm text-neutral-500 line-through mt-1">
                Tk. 5,000
              </p> */}
            <div>
              <p className="md:text-lg font-semibold">
                Tk. {course.fee.toLocaleString()}{" "}
                <span className="text-xs md:text-sm text-neutral-600">
                  / month
                </span>
              </p>
              {/* <p className="text-xs text-neutral-500">
                  Before <span className="font-semibold">10 July</span>
                </p> */}
            </div>
          </div>
        </div>
      </div>
      {showButton && (
        <>
          <div className="h-px w-full bg-neutral-200 my-5" />
          <Button asChild variant="secondary" className="w-full h-[44px]">
            <Link href={href} className="block">
              Learn More
            </Link>
          </Button>
        </>
      )}
    </div>
  );
}
