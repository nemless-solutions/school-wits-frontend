import { Button, Input, Label, Skeleton } from "@school-wits/ui";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl, useGet, usePost } from "../../../../api/api-calls";
import { useAuth } from "../../../../contexts/AuthContext";

type Answer = {
  id: number | null;
  title: string;
  correct: boolean;
};

export function CreateQuizAnswer() {
  const { questionId } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [answersArray, setAnswersArray] = useState<Answer[]>([]);
  const [totalToSubmit, setTotalToSubmit] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  const { data, isFetching } = useGet(`quiz_answer/${questionId}`);
  const { mutate } = usePost(`quiz_answer`);

  useEffect(() => {
    if (!isFetching) {
      const fetchedAnswers = data || [];
      const placeholdersNeeded = 4 - fetchedAnswers.length;
      const placeholders = Array.from(
        { length: placeholdersNeeded > 0 ? placeholdersNeeded : 0 },
        () => ({
          id: null,
          title: "",
          correct: false,
        })
      );
      setAnswersArray([...fetchedAnswers, ...placeholders].slice(0, 4));
    }
  }, [isFetching, data]);

  const updateAnswer = async (
    answerId: number | null,
    title: string,
    correct: boolean
  ): Promise<void> => {
    if (!answerId || !token) return;

    try {
      setIsLoading(true);
      const res = await fetch(`${baseUrl}/quiz_answer/${answerId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, isCorrect: correct }),
      });

      if (!res.ok) {
        console.error(await res.text());
        throw new Error("Failed to update answer");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update an answer.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const total = answersArray.filter((a) => a.title.trim()).length;
    setTotalToSubmit(total);
    setCompletedCount(0);

    answersArray.forEach((answer: Answer) => {
      if (!answer.title.trim()) return;

      if (!answer.id) {
        mutate(
          {
            questionId: Number(questionId),
            title: answer.title,
            correct: answer.correct,
          },
          {
            onSuccess: () => {
              setCompletedCount((prev) => prev + 1);
            },
            onError: () => {
              toast.error("Failed to create an answer.");
              setCompletedCount((prev) => prev + 1);
            },
          }
        );
      } else {
        updateAnswer(answer.id, answer.title, answer.correct).then(() => {
          setCompletedCount((prev) => prev + 1);
        });
      }
    });
  };

  useEffect(() => {
    if (completedCount > 0 && completedCount === totalToSubmit) {
      toast.success("Answers Updated.");
      navigate(-1);
    }
  }, [completedCount, totalToSubmit, navigate]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Quiz Answers</h2>
      {isFetching ? (
        <div className="space-y-8 mt-4">
          {[...Array(4)].map((_, i) => (
            <div className="space-y-4" key={i}>
              <Skeleton className="h-8 w-full max-w-[100px]" />
              <Skeleton className="h-8 w-full max-w-[500px]" />
            </div>
          ))}
        </div>
      ) : (
        <form className="max-w-[500px] space-y-8" onSubmit={handleSubmit}>
          {answersArray.map((answer: Answer, index: number) => (
            <div key={index}>
              <Label>Answer {index + 1}</Label>
              <div className="flex items-center gap-4 mt-4">
                <input
                  className="h-5 aspect-square cursor-pointer"
                  type="checkbox"
                  checked={answer.correct}
                  onChange={() => {
                    if (!answer.correct) {
                      setAnswersArray(
                        answersArray.map((a: Answer, i: number) => ({
                          ...a,
                          correct: i === index,
                        }))
                      );
                    }
                  }}
                />
                <Input
                  value={answer.title}
                  onChange={(e) =>
                    setAnswersArray(
                      answersArray.map((a: Answer, i: number) =>
                        i === index ? { ...a, title: e.target.value } : a
                      )
                    )
                  }
                />
              </div>
            </div>
          ))}

          <div className="flex items-center gap-3 mt-8 pb-8">
            <Button
              type="submit"
              disabled={isLoading}
              size="lg"
              className="w-[100px]"
            >
              {isLoading ? (
                <Loader2Icon className="animate-spin scale-150" />
              ) : (
                "Submit"
              )}
            </Button>
            <Button
              onClick={() => navigate(-1)}
              type="button"
              variant="destructive"
              size="lg"
              className="w-[100px]"
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
