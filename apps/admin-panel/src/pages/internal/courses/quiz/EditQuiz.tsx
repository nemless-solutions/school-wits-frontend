import { Skeleton } from "@school-wits/ui";
import { quizSchema } from "@school-wits/validations";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGet, usePut } from "../../../../api/api-calls";
import { QuizForm } from "../../../../components/Forms/QuizForm";

export function EditQuiz() {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const { mutate, isPending, isError, isSuccess } = usePut(`quiz/${quizId}`);
  const { data, isFetching } = useGet(`quiz/${quizId}`);

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
          schema={quizSchema}
          defaultValues={{
            title: data?.title || "",
            questionMark: data?.questionMark || 1,
            duration: data?.duration || 1,
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
