import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
} from "@school-wits/ui";
import { Dispatch } from "react";
import { useGet } from "../../api/api-calls";

interface CourseSelectProps {
  courseId?: number;
  setSelectedCourseId: Dispatch<React.SetStateAction<number | null>>;
  setSelectedTopicId?: Dispatch<React.SetStateAction<number | null>>;
}

export function CourseSelect({
  courseId,
  setSelectedCourseId,
  setSelectedTopicId,
}: CourseSelectProps) {
  const { data, isFetching } = useGet("course");
  return (
    <div className="mb-4">
      {isFetching ? (
        <Skeleton className="w-[280px] h-10" />
      ) : (
        <Select
          value={courseId?.toLocaleString()}
          onValueChange={(value) => {
            setSelectedCourseId(+value);
            setSelectedTopicId && setSelectedTopicId(null);
          }}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select A Course" />
          </SelectTrigger>
          <SelectContent>
            {data
              .filter((item: { grade: string }) => item.grade !== "X")
              .map((course: { id: number; uid: string }) => (
                <SelectItem key={course.id} value={`${course.id}`}>
                  {course.uid}
                </SelectItem>
              ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
