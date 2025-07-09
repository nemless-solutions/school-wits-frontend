import { PageHeader } from "@/components/PageHeader/PageHeader";
import { baseUrl } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import { ReactNode } from "react";
import { CourseBundle } from "../../../../../../../types";

export default async function CourseBundleLayout({
  params,
  children,
}: {
  params: Promise<{ bundleId: string }>;
  children: ReactNode;
}) {
  const id = (await params).bundleId;
  const courseBundle = await fetcher<CourseBundle>(
    `${baseUrl}/course_bundle/${id}`
  );

  return (
    <div>
      <PageHeader header={`Grade ${courseBundle.courses[0].grade}`} />
      <div className="main-container">{children}</div>
    </div>
  );
}
