import { PageHeader } from "@/components/PageHeader/PageHeader";
import { Skeleton } from "@/components/client-ui";
import SquareGroup from "../../../../../public/graphics/square-group.svg";

export default function CourseDetailsLoading() {
  return (
    <div>
      <PageHeader header="Grade " />
      <div className="relative overflow-x-clip">
        <div className="absolute -top-20 -left-20 w-[200px] md:w-[400px] aspect-square bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/4 -right-20 w-[250px] md:w-xl aspect-square bg-secondary/15 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -left-20 w-[200px] md:w-[430px] aspect-square bg-primary/20 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-20 -right-20 w-[220px] md:w-xl aspect-square bg-secondary/10 rounded-full blur-[120px]"></div>
        <SquareGroup className="absolute w-10 md:w-16 text-primary -left-4 top-10 rotate-45" />
        <div className="main-container mb-32 relative z-10">
          <div>
            <div className="flex justify-between mt-10">
              <Skeleton className="h-10 md:h-16 w-[250px]" />
              <div className="flex-col items-end hidden md:flex gap-4">
                <Skeleton className="h-16 w-[280px]" />
                <Skeleton className="h-12 w-[180px]" />
              </div>
            </div>
          </div>
          <div className="fixed bottom-0 left-0 w-full z-[999] bg-white p-4 flex justify-between items-center shadow-[0px_-6px_12px_0px_rgba(0,0,0,0.05)] md:hidden">
            <Skeleton className="h-16 w-[160px]" />
            <Skeleton className="h-10 w-[100px]" />
          </div>
          <div className="h-px w-full bg-neutral-300 mt-6 mb-8" />
          <div>
            <Skeleton className="h-10 md:h-16 w-[220px] mb-4" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
              <Skeleton className="h-[500px] w-full" />
              <Skeleton className="h-[500px] w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
