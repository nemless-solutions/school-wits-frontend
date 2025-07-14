import { Skeleton } from "@/components/client-ui";
import { CourseCardSkeleton } from "@/components/CourseCard/CourseCardSkeleton";

export default async function GradeLoading() {
  return (
    <div className="main-container relative z-10">
      <div className="my-6 md:my-10">
        <Skeleton className="h-7 w-[150px] md:h-16 md:w-[200px]" />
      </div>
      <div className="my-6 md:my-10">
        <Skeleton className="h-7 md:h-8 w-full md:w-[400px] max-w-[400px]" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {[...Array(3)].map((_, index) => (
          <div key={index}>
            <CourseCardSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
}
