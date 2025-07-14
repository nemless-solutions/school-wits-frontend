import { Skeleton } from "../client-ui";

export function CourseCardSkeleton() {
  return (
    <div className="bg-white rounded-[12px] p-4 shadow-[1px_1px_15px_0px_rgba(0,0,0,0.2)]">
      <div className="overflow-hidden">
        <Skeleton className="w-full aspect-[352/225] rounded-[8px]" />
      </div>
      <Skeleton className="h-6 w-[250px] my-4" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-2">
        {[...Array(6).map((_, i) => i)].map((_, i) => (
          <Skeleton key={i} className="h-6 w-full" />
        ))}
      </div>
      <Skeleton className="mt-5 h-[84px] w-full" />
      <div className="h-px w-full bg-neutral-200 my-5" />
      <div className="flex justify-between items-center">
        <Skeleton className="h-8 w-[100px]" />
        <Skeleton className="h-8 w-[100px]" />
      </div>
    </div>
  );
}
