import { Button, Input, Label } from "@school-wits/ui";
import { Loader2Icon } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { usePost, usePut } from "../../api/api-calls";

type FormData = { correct: boolean; title: string };

interface QuizFormProps {
  serial?: number;
  defaultValues: FormData;
  questionId: number;
  quizAnswerId: number;
  onSuccess?: () => void;
}

export function QuizAnswerForm({
  serial,
  defaultValues,
  questionId,
  quizAnswerId,
  onSuccess,
}: QuizFormProps) {
  const [values, setValues] = useState<FormData>({ title: "", correct: false });
  const {
    mutate: create,
    isPending: createPending,
    isError: isCreateError,
    isSuccess: isCreateSuccess,
    fetchError: createError,
  } = usePost("quiz_answer");
  const {
    mutate: update,
    isPending: updatePending,
    isError: isUpdateError,
    isSuccess: isUpdateSuccess,
    fetchError: updateError,
  } = usePut(`quiz_answer/${quizAnswerId}`);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!values.title || !questionId) return;

    if (!defaultValues.title) {
      create({ ...values, isCorrect: values?.correct || false, questionId });
    } else {
      update({ ...values, isCorrect: values?.correct || false });
    }
  };

  useEffect(() => {
    if (isCreateError || isUpdateError) {
      toast.error("Something went wrong. Please try again.");
      console.error(createError || updateError);
    }
    if (isCreateSuccess || isUpdateSuccess) {
      onSuccess && onSuccess();
    }
  }, [
    createError,
    isCreateError,
    isCreateSuccess,
    isUpdateError,
    isUpdateSuccess,
    onSuccess,
    updateError,
  ]);

  useEffect(() => {
    setValues(defaultValues);
  }, [defaultValues]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-3">
        <Label className="w-[20px] text-lg mr-2">{serial || 1}.</Label>
        <input
          checked={values.correct || false}
          onChange={(e) =>
            setValues((cur) => ({ ...cur, correct: e.target.checked }))
          }
          type="checkbox"
          className="h-5 w-5 cursor-pointer"
        />
        <Input
          className="flex-1"
          value={values.title || ""}
          onChange={(e) =>
            setValues((cur) => ({ ...cur, title: e.target.value }))
          }
        />
        <Button disabled={createPending || updatePending} className="w-[60px]">
          {createPending || updatePending ? (
            <Loader2Icon className="animate-spin scale-150" />
          ) : (
            "Save"
          )}
        </Button>
      </div>
    </form>
  );
}
