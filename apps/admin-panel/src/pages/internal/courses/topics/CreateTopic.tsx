import { topicSchema } from "@school-wits/validations";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { usePost } from "../../../../api/api-calls";
import { TopicForm } from "../../../../components/Forms/TopicForm";

export function CreateTopic() {
  const { courseId } = useParams();

  return (
    <div>
      <TopicCreateForm courseId={courseId || ""} />
    </div>
  );
}

const TopicCreateForm = function ({ courseId }: { courseId: string | number }) {
  const navigate = useNavigate();
  const { mutate, isPending, isError, isSuccess, fetchError } =
    usePost("course_topic");

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again.");
      console.error(fetchError);
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
          locked: true,
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
