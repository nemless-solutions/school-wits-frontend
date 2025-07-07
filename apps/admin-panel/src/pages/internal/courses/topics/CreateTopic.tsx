import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
} from "@school-wits/ui";
import { topicSchema } from "@school-wits/validations";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGet, usePost } from "../../../../api/api-calls";
import { TopicForm } from "../../../../components/Forms/TopicForm";

export function CreateTopic() {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const { data, isFetching } = useGet("course");

  return (
    <div>
      <div className="mb-4">
        {isFetching ? (
          <Skeleton className="w-[180px] h-10" />
        ) : (
          <Select onValueChange={(value) => setSelectedCourseId(+value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select A Course" />
            </SelectTrigger>
            <SelectContent>
              {data.map((course: { id: number; uid: string }) => (
                <SelectItem key={course.id} value={`${course.id}`}>
                  {course.uid}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
      {selectedCourseId ? (
        <TopicCreateForm courseId={selectedCourseId} />
      ) : (
        <div className="flex items-center justify-center mt-20">
          <p className="text-2xl font-bold text-neutral-400">
            Please Select A Course First
          </p>
        </div>
      )}
    </div>
  );
}

const TopicCreateForm = function ({ courseId }: { courseId: number }) {
  const navigate = useNavigate();
  const { mutate, isPending, isError, isSuccess } = usePost("course_topic");

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again.");
    } else if (isSuccess) {
      toast.success("Course Topic Created.");
      navigate(-1);
    }
  });

  return (
    <div>
      <TopicForm
        schema={topicSchema}
        defaultValues={{
          title: "",
          description: "",
        }}
        onSubmit={(data) => {
          mutate({ ...data, courseId });
        }}
        isLoading={isPending}
        onCancel={() => navigate(-1)}
        submitText="Create"
      />
    </div>
  );
};
