import { Button, Skeleton } from "@school-wits/ui";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { useGet } from "../../../../api/api-calls";
import { QuizAnswerForm } from "../../../../components/Forms/QuizAnswerForm";

export function CreateQuizAnswer() {
  const { questionId } = useParams();
  const navigate = useNavigate();

  const { data, isFetching, refetch } = useGet(`quiz_answer/${questionId}`);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [answersArray, setAnswersArray] = useState<any>([]);

  useEffect(() => {
    setAnswersArray([...(data || []), { title: "", correct: false }]);
  }, [isFetching, data]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Quiz Answers</h2>
      {isFetching ? (
        <div className="space-y-8 mt-4">
          <Skeleton className="h-8 w-full max-w-[800px]" />
          <Skeleton className="h-8 w-full max-w-[800px]" />
          <Skeleton className="h-8 w-full max-w-[800px]" />
          <Skeleton className="h-8 w-full max-w-[800px]" />
        </div>
      ) : (
        <div>
          <div className="max-w-[700px] space-y-4">
            {answersArray.length > 0 &&
              answersArray.map(
                (
                  answer: { id: number; title: string; correct: boolean },
                  index: number
                ) => (
                  <QuizAnswerForm
                    questionId={Number(questionId)}
                    quizAnswerId={answer.id}
                    key={index}
                    serial={index + 1}
                    defaultValues={answer}
                    onSuccess={() => refetch()}
                  />
                )
              )}
            <button
              onClick={() =>
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                setAnswersArray((cur: any) => [
                  ...cur,
                  { title: "", correct: false },
                ])
              }
              className="my-10 w-1/2 mx-auto min-w-[200px] border border-dashed border-neutral-300 p-2 rounded-md flex items-center justify-center text-neutral-400 gap-2 cursor-pointer hover:border-neutral-500 hover:text-neutral-500 duration-200"
            >
              <FaPlus /> Add Answer
            </button>
          </div>
          <Button variant="destructive" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </div>
      )}
    </div>
  );
}
