import { PageHeader } from "@/components/PageHeader/PageHeader";
import { ReactNode } from "react";

export default async function GradeLayout({
  params,
  children,
}: {
  params: Promise<{ grade: string }>;
  children: ReactNode;
}) {
  const grade = (await params).grade.toLowerCase();

  return (
    <>
      <PageHeader
        header={grade === "o" ? "O Levels" : `Grades ${grade.toUpperCase()}`}
        subheader={grade === "o" ? "Grade IX & X" : undefined}
      />
      <div className="relative overflow-x-clip">
        <div className="absolute -bottom-[-150px] -right-[200px] w-[400px] md:w-xl aspect-square bg-secondary/15 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/3 -left-20 -translate-y-1/2 w-xs aspect-square bg-primary/15 rounded-full blur-[80px]"></div>
        {children}
      </div>
    </>
  );
}
