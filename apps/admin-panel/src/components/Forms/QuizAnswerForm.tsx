import { Button, Checkbox, Input } from "@school-wits/ui";
import { Loader2Icon } from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { baseUrl } from "../../api/api-calls";
import { useAuth } from "../../contexts/AuthContext";

type Answer = { title: string; correct: boolean };

export function QuizAnswerForm() {
  const { token } = useAuth();

  const navigate = useNavigate();
  const { questionId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [validation, setValidation] = useState({ valid: true, error: "" });
  const [answers, setAnswers] = useState<Answer[]>(
    Array.from({ length: 4 }, () => ({ title: "", correct: false }))
  );

  const handleTitleChange = (index: number, value: string) => {
    setAnswers((prev) =>
      prev.map((item, i) => (i === index ? { ...item, title: value } : item))
    );
    setValidation({ valid: true, error: "" });
  };

  const handleIsOkChange = (index: number) => {
    setAnswers((prev) =>
      prev.map((item, i) => ({
        ...item,
        correct: i === index,
      }))
    );
    setValidation({ valid: true, error: "" });
  };

  const validateAnswers = (answers: Answer[]) => {
    const hasCorrect = answers.some((ans) => ans.correct);
    const allTitlesFilled = answers.every((ans) => ans.title.trim() !== "");

    if (!hasCorrect) {
      setValidation({
        valid: false,
        error: "At least one answer must be marked as correct.",
      });
      return false;
    }
    if (!allTitlesFilled) {
      setValidation({
        valid: false,
        error: "Answers can not be empty",
      });
      return false;
    }

    setValidation({ valid: true, error: "" });
    return true;
  };

  const handleSubmit = async function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validateAnswers(answers)) return;

    try {
      setIsLoading(true);
      const res = await Promise.all(
        answers.map((answer) =>
          fetch(`${baseUrl}/quiz_answer?questionId=${questionId}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },

            body: JSON.stringify({
              ...answer,
              questionId,
            }),
          })
        )
      );

      if (res.map((res) => !res.ok).includes(true))
        throw new Error("Something went wrong");

      toast.success("Answers added successfully");
      navigate(-1);
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="space-y-4 max-w-[600px]" onSubmit={handleSubmit}>
      {answers.map((answer, index) => (
        <div key={index} className="flex gap-6 items-center">
          <div className="flex items-center gap-1">
            <Checkbox
              className="cursor-pointer"
              checked={answer.correct}
              onCheckedChange={() => handleIsOkChange(index)}
            />
          </div>
          <Input
            type="text"
            value={answer.title}
            onChange={(e) => handleTitleChange(index, e.target.value)}
            placeholder={`Answer ${index + 1}`}
          />
        </div>
      ))}
      <div className="h-10">
        {!validation.valid && (
          <p className="text-destructive ml-8 font-semibold">
            {validation.error}
          </p>
        )}
      </div>
      <div className="space-x-3 mt-8 pb-8">
        <Button type="submit" size="lg" className="w-[100px]">
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
  );
}
