import { quizQuestionSchema } from "@school-wits/validations";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { usePost } from "../../../../api/api-calls";
import { QuizQuestionForm } from "../../../../components/Forms/QuizQuestionForm";

export function CreateQuizQuestion() {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const { mutate, isPending, isError, isSuccess } = usePost(`quiz_question`);

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again.");
    } else if (isSuccess) {
      toast.success("Quiz question created.");
      navigate(-1);
    }
  });

  return (
    <div>
      <QuizQuestionForm
        schema={quizQuestionSchema}
        defaultValues={{ title: "" }}
        onSubmit={(data) => mutate({ ...data, quizId })}
        isLoading={isPending}
        onCancel={() => navigate(-1)}
        submitText="Create"
      />
    </div>
  );
}
