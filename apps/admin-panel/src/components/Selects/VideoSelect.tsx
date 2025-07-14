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
  topicId: number;
  videoId?: number;
  setSelectedVideoId: Dispatch<React.SetStateAction<number | null>>;
}

export function VideoSelect({
  topicId,
  videoId,
  setSelectedVideoId,
}: CourseSelectProps) {
  const { data, isFetching } = useGet(`course_file/${topicId}`);

  const filterForVideo = function (
    data: { type: string; id: number; title: string; description: string }[]
  ) {
    return data.filter(
      (video: { type: string }) => video.type.toLowerCase() === "video"
    );
  };

  return (
    <div className="mb-4">
      {isFetching ? (
        <Skeleton className="w-[280px] h-10" />
      ) : (
        <Select
          value={videoId?.toLocaleString()}
          onValueChange={(value) => {
            setSelectedVideoId(+value);
          }}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="Select A Video" />
          </SelectTrigger>
          <SelectContent>
            {filterForVideo(data).length > 0 ? (
              filterForVideo(data).map(
                (video: { id: number; title: string }, index: number) => (
                  <SelectItem key={video.id} value={`${video.id}`}>
                    <span className="mr-1 font-medium">{index + 1}.</span>
                    {video.title}
                  </SelectItem>
                )
              )
            ) : (
              <div className="mx-auto text-center text-lg py-2 text-neutral-500 font-semibold">
                No Videos
              </div>
            )}
          </SelectContent>
        </Select>
      )}
    </div>
  );
}
