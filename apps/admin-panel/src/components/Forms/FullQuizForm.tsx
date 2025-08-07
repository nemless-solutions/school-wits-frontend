/* import { Button, Input, Label } from "@school-wits/ui";
import { Loader2Icon } from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FullQuizFormProps {
  defaultValues?: {
    id?: number;
    title: string;
    questions: {
      id?: number;
      title: string;
      answers: {
        id?: number;
        title: string;
        isCorrect: boolean;
      }[];
    }[];
  };
  isLoading?: boolean;
  submitText?: string;
  onSubmit: (data: FullQuizFormProps["defaultValues"]) => void;
}

const initialQuizData = {
  title: "",
  questions: Array(5)
    .fill(null)
    .map(() => ({
      title: "",
      answers: Array(4)
        .fill(null)
        .map(() => ({
          title: "",
          isCorrect: false,
        })),
    })),
};

function normalizeQuizData(data?: FullQuizFormProps["defaultValues"]) {
  const normalizedQuestions = Array(5)
    .fill(null)
    .map((_, qIndex) => {
      const existingQuestion = data?.questions[qIndex] || {
        id: undefined,
        title: "",
        answers: [],
      };

      const normalizedAnswers = Array(4)
        .fill(null)
        .map((_, aIndex) => {
          const existingAnswer = existingQuestion.answers[aIndex] || {
            id: undefined,
            title: "",
            isCorrect: false,
          };
          return {
            id: existingAnswer.id,
            title: existingAnswer.title || "",
            isCorrect: existingAnswer.isCorrect || false,
          };
        });

      return {
        id: existingQuestion.id,
        title: existingQuestion.title || "",
        answers: normalizedAnswers,
      };
    });

  return {
    title: data?.title || "",
    questions: normalizedQuestions,
  };
}

export function FullQuizForm({
  defaultValues,
  isLoading,
  submitText = "Create",
  onSubmit,
}: FullQuizFormProps) {
  const navigate = useNavigate();

  const [quizData, setQuizData] = useState(() =>
    normalizeQuizData(defaultValues || initialQuizData)
  );

  const updateQuestionTitle = (index: number, newTitle: string) => {
    setQuizData((prev) => {
      const updatedQuestions = [...prev.questions];
      updatedQuestions[index] = { ...updatedQuestions[index], title: newTitle };
      return { ...prev, questions: updatedQuestions };
    });
  };

  const updateAnswerTitle = (
    qIndex: number,
    aIndex: number,
    newTitle: string
  ) => {
    setQuizData((prev) => {
      const updatedQuestions = [...prev.questions];
      const updatedAnswers = [...updatedQuestions[qIndex].answers];
      updatedAnswers[aIndex] = { ...updatedAnswers[aIndex], title: newTitle };
      updatedQuestions[qIndex] = {
        ...updatedQuestions[qIndex],
        answers: updatedAnswers,
      };
      return { ...prev, questions: updatedQuestions };
    });
  };

  const updateAnswerCorrect = (
    qIndex: number,
    aIndex: number,
    checked: boolean
  ) => {
    setQuizData((prev) => {
      const updatedQuestions = [...prev.questions];
      const updatedAnswers = [...updatedQuestions[qIndex].answers];
      updatedAnswers[aIndex] = {
        ...updatedAnswers[aIndex],
        isCorrect: checked,
      };
      updatedQuestions[qIndex] = {
        ...updatedQuestions[qIndex],
        answers: updatedAnswers,
      };
      return { ...prev, questions: updatedQuestions };
    });
  };

  const handleSubmit = function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      ...quizData,
      questions: quizData.questions.filter((q) => q.title.trim()),
    };

    onSubmit(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="title" className="mb-2">
          Quiz Title
        </Label>
        <Input
          id="title"
          value={quizData.title || ""}
          onChange={(e) => setQuizData({ ...quizData, title: e.target.value })}
        />
      </div>

      {quizData.questions.map((question, qIndex) => (
        <div key={qIndex} className="border p-3 rounded">
          <Label htmlFor={`question-${qIndex}`} className="mb-2">
            Question {qIndex + 1}
          </Label>
          <Input
            id={`question-${qIndex}`}
            value={question.title || ""}
            onChange={(e) => updateQuestionTitle(qIndex, e.target.value)}
          />
          <div className="pl-4 mt-2 space-y-2 grid md:grid-cols-2 gap-4">
            {question.answers.map((answer, aIndex) => (
              <div key={aIndex} className="">
                <div className="">
                  <Label className="mb-2">Answer {aIndex + 1}</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      className="order-1"
                      value={answer.title || ""}
                      onChange={(e) =>
                        updateAnswerTitle(qIndex, aIndex, e.target.value)
                      }
                    />
                    <div className="flex items-center gap-1">
                      <input
                        className="cursor-pointer h-4 w-4"
                        type="checkbox"
                        checked={answer.isCorrect || false}
                        onChange={(e) =>
                          updateAnswerCorrect(qIndex, aIndex, e.target.checked)
                        }
                      />
                      <Label>Correct</Label>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            submitText
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
 */

import { Button, Input, Label } from "@school-wits/ui";
import { Loader2Icon } from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface FullQuizFormProps {
  defaultValues?: {
    title: string;
    questions: {
      id?: string;
      title: string;
      answers: {
        id?: string;
        title: string;
        isCorrect: boolean;
      }[];
    }[];
  };
  isLoading?: boolean;
  submitText?: string;
  onSubmit: (data: FullQuizFormProps["defaultValues"]) => void;
}

const initialQuizData = {
  title: "",
  questions: Array(5)
    .fill(null)
    .map(() => ({
      title: "",
      answers: Array(4)
        .fill(null)
        .map(() => ({
          title: "",
          isCorrect: false,
        })),
    })),
};

function normalizeQuizData(data?: FullQuizFormProps["defaultValues"]) {
  const normalizedQuestions = Array(5)
    .fill(null)
    .map((_, qIndex) => {
      const existingQuestion = data?.questions[qIndex] || {
        id: undefined,
        title: "",
        answers: [],
      };

      const normalizedAnswers = Array(4)
        .fill(null)
        .map((_, aIndex) => {
          const existingAnswer = existingQuestion.answers[aIndex] || {
            id: undefined,
            title: "",
            isCorrect: false,
          };
          return {
            id: existingAnswer.id,
            title: existingAnswer.title || "",
            isCorrect: existingAnswer.isCorrect || false,
          };
        });

      return {
        id: existingQuestion.id,
        title: existingQuestion.title || "",
        answers: normalizedAnswers,
      };
    });

  return {
    title: data?.title || "",
    questions: normalizedQuestions,
  };
}

export function FullQuizForm({
  defaultValues,
  isLoading,
  submitText = "Create",
  onSubmit,
}: FullQuizFormProps) {
  const navigate = useNavigate();

  const [quizData, setQuizData] = useState(() =>
    normalizeQuizData(defaultValues || initialQuizData)
  );

  const updateQuestionTitle = (index: number, newTitle: string) => {
    setQuizData((prev) => {
      const updatedQuestions = [...prev.questions];
      updatedQuestions[index] = { ...updatedQuestions[index], title: newTitle };
      return { ...prev, questions: updatedQuestions };
    });
  };

  const updateAnswerTitle = (
    qIndex: number,
    aIndex: number,
    newTitle: string
  ) => {
    setQuizData((prev) => {
      const updatedQuestions = [...prev.questions];
      const updatedAnswers = [...updatedQuestions[qIndex].answers];
      updatedAnswers[aIndex] = { ...updatedAnswers[aIndex], title: newTitle };
      updatedQuestions[qIndex] = {
        ...updatedQuestions[qIndex],
        answers: updatedAnswers,
      };
      return { ...prev, questions: updatedQuestions };
    });
  };

  const updateAnswerCorrect = (qIndex: number, aIndex: number) => {
    setQuizData((prev) => {
      const updatedQuestions = [...prev.questions];
      const updatedAnswers = updatedQuestions[qIndex].answers.map(
        (answer, index) => ({
          ...answer,
          isCorrect: index === aIndex, // Only one true
        })
      );
      updatedQuestions[qIndex] = {
        ...updatedQuestions[qIndex],
        answers: updatedAnswers,
      };
      return { ...prev, questions: updatedQuestions };
    });
  };

  const handleSubmit = function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = {
      ...quizData,
      questions: quizData.questions.filter((q) => q.title.trim()),
    };

    onSubmit(data);
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="title" className="mb-2">
          Quiz Title
        </Label>
        <Input
          id="title"
          value={quizData.title || ""}
          onChange={(e) => setQuizData({ ...quizData, title: e.target.value })}
        />
      </div>

      {quizData.questions.map((question, qIndex) => (
        <div key={qIndex} className="border p-3 rounded">
          <Label htmlFor={`question-${qIndex}`} className="mb-2">
            Question {qIndex + 1}
          </Label>
          <Input
            id={`question-${qIndex}`}
            value={question.title || ""}
            onChange={(e) => updateQuestionTitle(qIndex, e.target.value)}
          />
          <div className="pl-4 mt-2 space-y-2 grid md:grid-cols-2 gap-4">
            {question.answers.map((answer, aIndex) => (
              <div key={aIndex}>
                <Label className="mb-2">Answer {aIndex + 1}</Label>
                <div className="flex items-center gap-2">
                  <Input
                    className="order-1"
                    value={answer.title || ""}
                    onChange={(e) =>
                      updateAnswerTitle(qIndex, aIndex, e.target.value)
                    }
                  />
                  <div className="flex items-center gap-1">
                    <input
                      type="radio"
                      name={`correct-answer-${qIndex}`} // Group per question
                      className="cursor-pointer h-4 w-4"
                      checked={answer.isCorrect || false}
                      onChange={() => updateAnswerCorrect(qIndex, aIndex)}
                    />
                    <Label>Correct</Label>
                  </div>
                </div>
              </div>
            ))}
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
            submitText
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
