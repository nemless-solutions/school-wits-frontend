import { Skeleton } from "@school-wits/ui";
import { quizQuestionSchema } from "@school-wits/validations";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGet, usePut } from "../../../../api/api-calls";
import { QuizForm } from "../../../../components/Forms/QuizForm";

export function EditQuizQuestion() {
  const { questionId, quizId } = useParams();
  const navigate = useNavigate();

  const { mutate, isPending, isError, isSuccess } = usePut(
    `quiz_question/${questionId}`
  );
  const { data, isFetching } = useGet(`quiz_question/${quizId}`);

  const question = data?.find(
    (question: { id: number }) => question.id === Number(questionId)
  );

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again.");
    } else if (isSuccess) {
      toast.success("Quiz Updated.");
      navigate(-1);
    }
  });

  return (
    <div>
      {isFetching ? (
        <div>
          <div className="grid grid-cols-1 gap-6 mt-6">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="w-[100px] h-6" />
                <Skeleton className="w-full h-8" />
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-8">
            <Skeleton className="w-[100px] h-10" />
            <Skeleton className="w-[100px] h-10" />
          </div>
        </div>
      ) : (
        <QuizForm
          schema={quizQuestionSchema}
          defaultValues={{
            title: question?.title || "",
          }}
          onSubmit={(data) => {
            mutate(data);
          }}
          isLoading={isPending}
          onCancel={() => navigate(-1)}
          submitText="Update"
        />
      )}
    </div>
  );
}
