import { quizSchema } from "@school-wits/validations";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import { usePost } from "../../../../api/api-calls";
import { QuizForm } from "../../../../components/Forms/QuizForm";

export const schema = z.object({
  id: z.number(),
  title: z.string(),
  details: z.string(),
});

export function CreateQuiz() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const { mutate, isPending, isError, isSuccess } = usePost("quiz");

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again.");
    } else if (isSuccess) {
      toast.success("Quiz Created.");
      navigate(-1);
    }
  });

  return (
    <div>
      <QuizForm
        schema={quizSchema}
        defaultValues={{
          title: "",
          questionMark: 1,
          duration: 1,
        }}
        onSubmit={(data) => {
          mutate({ ...data, videoId });
        }}
        isLoading={isPending}
        onCancel={() => navigate(-1)}
        submitText="Create"
      />
    </div>
  );
}
