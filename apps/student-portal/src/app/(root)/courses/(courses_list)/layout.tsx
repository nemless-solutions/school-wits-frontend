import { PageHeader } from "@/components/PageHeader/PageHeader";
import { WhatsAppButton } from "@/components/WhatsAppButton/WhatsAppButton";

export default async function CoursesListLayout({
  params,
  children,
}: {
  params: Promise<{ grade: string }>;
  children: React.ReactNode;
}) {
  return (
    <>
      <PageHeader header="List Of Courses" showAnimation={false} />
      {children}
      <WhatsAppButton />
    </>
  );
}
