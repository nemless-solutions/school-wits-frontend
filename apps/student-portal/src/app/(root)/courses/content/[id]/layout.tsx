import { auth } from "@/auth";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Topic } from "@/components/Topic/Topic";
import { UnAuthorized } from "@/components/UnAuthorized/UnAuthorized";
import { baseUrl } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { CourseTopic, EnrolledCourse } from "../../../../../../types";

export default async function CourseContentLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const session = await auth();

  if (!session?.token) notFound();

  // const user = await fetcher<User>(`${baseUrl}/auth`, session?.token);
  const enrolledCourses = await fetcher<EnrolledCourse[]>(
    `${baseUrl}/enrolled_course`,
    session?.token
  );

  const enrolledCourse = enrolledCourses.find(
    (course) => course?.course?.id == +id
  );

  if (!enrolledCourse || enrolledCourse.paid === false) return <UnAuthorized />;

  const course = enrolledCourse.course;
  const courseTopics = await fetcher<CourseTopic[]>(
    `${baseUrl}/course_topic/course/${id}`,
    session.token
  );

  return (
    <div>
      <PageHeader header={`${course.title} (Grade ${course.grade})`} />
      <div className="main-container py-20">
        <div className="grid grid-cols-3 gap-3">
          <div className="col-span-2">{children}</div>
          <div className="bg-white border relative border-neutral-200 shadow-md rounded-lg">
            <div className="sticky top-0 left-0 bg-white shadow-sm">
              <h3 className="p-4 text-xl font-semibold">Course Topics</h3>
              <div className="w-full h-px bg-neutral-200" />
            </div>
            <div className="max-h-[500px] overflow-y-auto">
              {courseTopics.map((topic, index) => (
                <Topic
                  key={topic?.id}
                  topic={topic}
                  isLast={index === courseTopics.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
