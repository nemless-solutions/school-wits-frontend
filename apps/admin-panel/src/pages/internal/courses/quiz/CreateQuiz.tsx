import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import { usePost } from "../../../../api/api-calls";
import { FullQuizForm } from "../../../../components/Forms/FullQuizForm";

export const schema = z.object({
  id: z.number(),
  title: z.string(),
  details: z.string(),
});

export function CreateQuiz() {
  const { videoId } = useParams();
  const navigate = useNavigate();

  const { mutate, isPending, isError, isSuccess } = usePost("quiz/full");

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
      <FullQuizForm
        onSubmit={(data) =>
          mutate({ ...data, videoId, questionMark: 5, duration: 5 })
        }
        isLoading={isPending}
      />
    </div>
  );
}
