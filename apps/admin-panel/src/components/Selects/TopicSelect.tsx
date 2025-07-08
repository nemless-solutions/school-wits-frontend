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

export function TopicSelect({
  courseId,
  setSelectedTopicId,
}: {
  courseId: number;
  setSelectedTopicId: Dispatch<React.SetStateAction<number | null>>;
}) {
  const { data, isFetching } = useGet(`course_topic/course/${courseId}`);
  return (
    <div className="mb-4">
      {isFetching ? (
        <Skeleton className="w-[280px] h-10" />
      ) : (
        <Select onValueChange={(value) => setSelectedTopicId(+value)}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select A Topic" />
          </SelectTrigger>
          <SelectContent>
            {data.length > 0 ? (
              data.map(
                (topic: { id: number; title: string }, index: number) => (
                  <SelectItem key={topic.id} value={`${topic.id}`}>
                    <span className="mr-1 font-medium">{index + 1}.</span>
                    {topic.title}
                  </SelectItem>
                )
              )
            ) : (
              <div className="mx-auto text-center text-lg py-2 text-neutral-500 font-semibold">
                No Topics
              </div>
            )}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
