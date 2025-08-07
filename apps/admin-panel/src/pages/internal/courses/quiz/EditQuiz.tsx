import { Loader2Icon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGet, usePut } from "../../../../api/api-calls";
import { FullQuizForm } from "../../../../components/Forms/FullQuizForm";

export function EditQuiz() {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const { mutate, isPending, isError, isSuccess } = usePut(`quiz/full`);
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
        <div className="flex items-center justify-center min-h-[calc(100vh-100px)]">
          <Loader2Icon className="animate-spin scale-200" />
        </div>
      ) : (
        <FullQuizForm
          defaultValues={data}
          onSubmit={(data) =>
            mutate({
              ...data,
              duration: 5,
              questionMark: 5,
              id: quizId,
            })
          }
          submitText="Update"
          isLoading={isPending}
        />
      )}
    </div>
  );
}
