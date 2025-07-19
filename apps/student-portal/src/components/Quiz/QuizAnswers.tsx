import { QuizAnswer } from "../../../types";
import { Label, RadioGroup, RadioGroupItem } from "../client-ui";

interface QuizAnswerProps {
  questionId: number;
  answers: QuizAnswer[];
  selectedAnswerId?: string;
  onSelectAnswer: (answerId: string) => void;
}

export function QuizAnswers({
  questionId,
  answers,
  selectedAnswerId,
  onSelectAnswer,
}: QuizAnswerProps) {
  return (
    <div>
      <RadioGroup
        value={selectedAnswerId}
        onValueChange={onSelectAnswer}
        className="grid grid-cols-2 gap-4"
      >
        {answers?.map((answer) => (
          <div key={answer.id} className="">
            <Label
              className="px-4 py-6 flex items-center cursor-pointer space-x-2 border border-neutral-200 rounded-md shadow-md w-full hover:bg-neutral-50 duration-200"
              htmlFor={`${questionId}-${answer.id}`}
            >
              <RadioGroupItem
                value={String(answer.id)}
                id={`${questionId}-${answer.id}`}
              />
              <span>{answer.title}</span>
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
