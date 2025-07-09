import { auth } from "@/auth";
import { PageHeader } from "@/components/PageHeader/PageHeader";
import { baseUrl } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import { notFound } from "next/navigation";
import { EnrolledCourse } from "../../../../../../types";

export default async function CourseContent({
  params,
}: {
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

  const enrolledCourse = enrolledCourses.find((course) => course.id === +id);

  if (!enrolledCourse || enrolledCourse.paid === false)
    return <div className="py-20 text-2xl">Un Authorized</div>;

  const course = enrolledCourse.course;

  return (
    <div>
      <PageHeader header={`${course.title} (Grade ${course.grade})`} />
      <div className="main-container py-20 text-2xl">Content Page</div>
    </div>
  );
}
