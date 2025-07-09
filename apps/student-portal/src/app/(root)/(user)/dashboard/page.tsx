import { auth } from "@/auth";
import { MotionDiv } from "@/components/client-ui";
import { CourseHorizontalCard } from "@/components/CourseCard/CourseHorizontalCard";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { baseUrl } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import { getAbbreviation } from "@school-wits/utils";
import Image from "next/image";
import Link from "next/link";
import logoHorizontal from "../../../../../public/images/logo-horizontal.png";
import { Course, EnrolledCourse, User } from "../../../../../types";

export default async function Profile() {
  const session = await auth();
  const user = await fetcher<User>(`${baseUrl}/auth`, session?.token);

  const gradeName =
    user.grade === "IX" || user.grade === "X"
      ? "ix_x"
      : user.grade.toLowerCase();

  const enrolledCourses = await fetcher<EnrolledCourse[]>(
    `${baseUrl}/enrolled_course`,
    session?.token
  );
  const courses = await fetcher<Course[]>(
    `${baseUrl}/course/grade/${gradeName}?mode=`
  );

  const suggestedCourses = courses.filter((course) => {
    return !enrolledCourses.some((enrolledCourse) => {
      return enrolledCourse.course.id === course.id;
    });
  });

  return (
    <div>
      <PageHeader header="Dashboard" />
      <section className="my-10">
        <div className="main-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 order-1 lg:-order-1 space-y-4">
              <div className="border border-neutral-200 rounded-lg shadow-md">
                <h4 className="md:text-xl font-semibold text-center border-b border-neutral-200 px-4 py-6">
                  Enrolled Courses
                </h4>
                <div className="py-4">
                  {enrolledCourses?.length > 0 ? (
                    <div className="mt-4 space-y-4 p-4">
                      {enrolledCourses.map((course) => (
                        <MotionDiv key={course.id}>
                          <Link href={`/courses/content/${course.id}`}>
                            <CourseHorizontalCard
                              course={course.course}
                              status={course.paid}
                              showStatus
                            />
                          </Link>
                        </MotionDiv>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[160px] text-xl md:text-2xl font-semibold text-neutral-400">
                      No enrolled course
                    </div>
                  )}
                </div>
              </div>
              <div className="border border-neutral-200 rounded-lg shadow-md">
                <h4 className="md:text-xl font-semibold text-center border-b border-neutral-200 px-4 py-6">
                  Suggested Courses
                </h4>
                <div className="py-4">
                  {suggestedCourses?.length > 0 ? (
                    <div className="mt-4 space-y-4 p-4">
                      {suggestedCourses.map((course) => (
                        <MotionDiv key={course.id}>
                          <Link href={`/courses/details/${course.id}`}>
                            <CourseHorizontalCard course={course} />
                          </Link>
                        </MotionDiv>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center justify-center h-[150px] text-xl md:text-2xl font-semibold text-neutral-400">
                      No Suggested course
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white w-full max-w-[450px] mx-auto rounded-lg border border-neutral-200 shadow-md">
                <div className="py-4">
                  <Image
                    className="w-[200px] object-cover mx-auto"
                    src={logoHorizontal}
                    alt="logo"
                    width="1200"
                    height="270"
                  />
                </div>
                <div className="h-px w-full bg-neutral-200 mb-2" />
                <div className="sm:grid grid-cols-4 gap-4 p-4 items-center">
                  <div className="w-[100px] mx-auto sm:mx-0 sm:w-full bg-secondary aspect-square flex items-center justify-center rounded-lg">
                    <p className="text-center text-white font-bold text-3xl">
                      {getAbbreviation(user?.fullName)}
                    </p>
                  </div>
                  <div className="sm:col-span-3 mt-4 sm:mt-0">
                    <div className="flex gap-3 justify-center sm:justify-start">
                      <div className="space-y-2">
                        <h5>Student ID</h5>
                        <h5>Full Name</h5>
                        <h5>Curriculum</h5>
                        <h5>Grade</h5>
                      </div>
                      <div className="font-bold space-y-2">
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                        <div>:</div>
                      </div>
                      <div className="font-semibold space-y-2">
                        <div>{user?.uid}</div>
                        <div>{user?.fullName}</div>
                        <div>{user?.curriculum}</div>
                        <div>{user?.grade.split("_").join(" & ")}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <Link
                    href="/profile"
                    className="text-secondary text-sm hover:underline hover:text-secondary/75 duration-300 font-medium"
                  >
                    Visit My Profile
                  </Link>
                </div>
              </div>
              <div className="bg-white w-full max-w-[450px] mx-auto rounded-lg border border-neutral-200 shadow-md">
                <div className="p-4">
                  <p className="text-lg text-center">
                    Total Enrolled Courses:{" "}
                    <span className="font-semibold">
                      {enrolledCourses?.length}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
