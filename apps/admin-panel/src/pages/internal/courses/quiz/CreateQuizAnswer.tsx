import { Skeleton } from "@school-wits/ui";
import { useParams } from "react-router-dom";
import { useGet } from "../../../../api/api-calls";
import { QuizAnswerForm } from "../../../../components/Forms/QuizAnswerForm";

export function CreateQuizAnswer() {
  const { questionId } = useParams();

  const { data, isFetching } = useGet(`quiz_answer/${questionId}`);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Quiz Answers</h2>
      {isFetching ? (
        <div className="space-y-4">
          <Skeleton className="h-8 w-[600px]" />
          <Skeleton className="h-8 w-[600px]" />
          <Skeleton className="h-8 w-[600px]" />
          <Skeleton className="h-8 w-[600px]" />
        </div>
      ) : data?.length > 0 ? (
        <div className="space-y-4 text-lg">
          {data.map((answer: { title: string }, index: number) => (
            <p key={index}>
              {index + 1}. {answer.title}
            </p>
          ))}
        </div>
      ) : (
        <div>
          <QuizAnswerForm />
        </div>
      )}
    </div>
  );
}
