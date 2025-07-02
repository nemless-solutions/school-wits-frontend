import { Skeleton } from "@/components/client-ui";
import { CourseCardSkeleton } from "@/components/CourseCard/CourseCardSkeleton";
import { CourseGradeSwitcher } from "@/components/Switcher/CourseGradeSwticher";
import SquareGroup from "../../../../../public/graphics/square-group.svg";

export default function CourseListLoading() {
  return (
    <>
      <CourseGradeSwitcher />
      <div className="relative overflow-x-clip">
        <SquareGroup className="absolute w-10 md:w-16 text-primary right-1/6 -top-4 lg:-top-20 rotate-45" />
        <div className="absolute -top-20 -left-20 w-[400px] aspect-square bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-20 -right-20 w-xl aspect-square bg-secondary/20 rounded-full blur-[120px]"></div>
        <div>
          <div className="main-container relative z-10">
            <div className="my-6 md:my-10">
              <Skeleton className="h-7 w-[150px] md:h-16 md:w-[200px]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[...Array(3)].map((_, i) => (
                <div key={i}>
                  <CourseCardSkeleton />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
