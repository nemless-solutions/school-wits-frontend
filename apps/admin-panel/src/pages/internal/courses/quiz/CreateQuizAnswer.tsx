import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
} from "@school-wits/ui";
import { quizAnswerSchema } from "@school-wits/validations";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGet, usePost } from "../../../../api/api-calls";
import { QuizAnswerForm } from "../../../../components/Forms/QuizAnswerForm";

export function CreateQuizAnswer() {
  const { quizId } = useParams();
  const navigate = useNavigate();

  const [selectedQuestion, setSelectedQuestion] = useState<null | number>(null);

  const { data, isFetching } = useGet(`quiz_question/${quizId}`);
  const { mutate, isPending, isError, isSuccess } = usePost(`quiz_answer`);

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again.");
    } else if (isSuccess) {
      toast.success("Quiz answer added.");
      navigate(-1);
    }
  });

  return (
    <div>
      <div className="mb-4">
        {isFetching ? (
          <Skeleton className="min-w-[280px] max-w-[340px] h-10" />
        ) : (
          <Select onValueChange={(value) => setSelectedQuestion(+value)}>
            <SelectTrigger className="min-w-[280px] max-w-[340px]">
              <SelectValue placeholder="Select A Question" />
            </SelectTrigger>
            <SelectContent>
              {data.length > 0 ? (
                data.map(
                  (question: { id: number; title: string }, index: number) => (
                    <SelectItem key={question.id} value={`${question.id}`}>
                      <span className="mr-1 font-medium">{index + 1}.</span>
                      {question.title}
                    </SelectItem>
                  )
                )
              ) : (
                <div className="mx-auto text-center text-lg py-2 text-neutral-500 font-semibold">
                  No Questions
                </div>
              )}
            </SelectContent>
          </Select>
        )}
      </div>
      {selectedQuestion ? (
        <>
          <div className="mb-4">
            <div className="text-lg font-semibold">Answers: </div>
            <div>
              {data.filter(
                (q: { id: number | null }) => q.id === selectedQuestion
              )?.[0].answers?.length > 0
                ? data
                    .filter(
                      (q: { id: number | null }) => q.id === selectedQuestion
                    )?.[0]
                    ?.answers?.map(
                      (answer: { title: string }, index: number) => (
                        <p key={index}>
                          {index + 1}. {answer.title}{" "}
                        </p>
                      )
                    )
                : "No answers"}
            </div>
          </div>
          <QuizAnswerForm
            schema={quizAnswerSchema}
            defaultValues={{ title: "", correct: false }}
            onSubmit={(data) =>
              mutate({ ...data, questionId: selectedQuestion })
            }
            isLoading={isPending}
            onCancel={() => navigate(-1)}
            submitText="Create"
          />
        </>
      ) : (
        <div className="flex items-center justify-center mt-20">
          <p className="text-2xl font-bold text-neutral-400">
            Please Select A Question First
          </p>
        </div>
      )}
    </div>
  );
}
