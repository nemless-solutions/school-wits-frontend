import { auth } from "@/auth";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { UnAuthorized } from "@/components/UnAuthorized/UnAuthorized";
import { baseUrl } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import { notFound } from "next/navigation";
import { ReactNode } from "react";
import { EnrolledCourse } from "../../../../../../types";

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
  const courseTopics = await fetcher(
    `${baseUrl}/course_topic/course/${id}`,
    session.token
  );

  const res = await fetch(`${baseUrl}/course_file/download/3`, {
    headers: {
      Authorization: `Bearer ${session.token}`,
    },
  });

  console.log(res.body);

  return (
    <div>
      <PageHeader header={`${course.title} (Grade ${course.grade})`} />
      <div className="main-container py-20 text-2xl">Content Page</div>
    </div>
  );
}
