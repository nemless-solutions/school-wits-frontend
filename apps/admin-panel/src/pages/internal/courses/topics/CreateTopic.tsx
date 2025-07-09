import { topicSchema } from "@school-wits/validations";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePost } from "../../../../api/api-calls";
import { TopicForm } from "../../../../components/Forms/TopicForm";
import { CourseSelect } from "../../../../components/Selects/CourseSelect";

export function CreateTopic() {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

  return (
    <div>
      <CourseSelect
        courseId={selectedCourseId || undefined}
        setSelectedCourseId={setSelectedCourseId}
      />
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
