import { auth } from "@/auth";
import { Quiz } from "@/components/Quiz/Quiz";
import { baseUrl } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import { Quiz as QuizType } from "../../../../../../../../types";

const dummy = {
  id: 1,
  title: "Test Quiz",
  questionMark: 10,
  duration: 10,
  questions: [
    {
      id: 1,
      title: "Test quiz question 1",
      answers: [
        { id: 1, title: "Test Quiz Answer 1" },
        { id: 2, title: "Test Quiz Answer 2" },
        { id: 3, title: "Test Quiz Answer 3" },
        { id: 4, title: "Test Quiz Answer 4" },
      ],
    },
    {
      id: 2,
      title: "Test quiz question 1",
      answers: [
        { id: 1, title: "Test Quiz Answer 1" },
        { id: 2, title: "Test Quiz Answer 2" },
        { id: 3, title: "Test Quiz Answer 3" },
        { id: 4, title: "Test Quiz Answer 4" },
      ],
    },
    {
      id: 3,
      title: "Test quiz question 1",
      answers: [
        { id: 1, title: "Test Quiz Answer 1" },
        { id: 2, title: "Test Quiz Answer 2" },
        { id: 3, title: "Test Quiz Answer 3" },
        { id: 4, title: "Test Quiz Answer 4" },
      ],
    },
    {
      id: 4,
      title: "Test quiz question 1",
      answers: [
        { id: 1, title: "Test Quiz Answer 1" },
        { id: 2, title: "Test Quiz Answer 2" },
        { id: 3, title: "Test Quiz Answer 3" },
        { id: 4, title: "Test Quiz Answer 4" },
      ],
    },
  ],
  createdAt: "2025-07-18T14:59:09.815+00:00",
};

export default async function QuizPage({
  params,
}: {
  params: Promise<{ quiz_id: string }>;
}) {
  const quizId = (await params).quiz_id;
  const session = await auth();

  const quiz = await fetcher<QuizType>(
    `${baseUrl}/quiz/${quizId}`,
    session?.token
  );

  return (
    <div className="p-4 bg-white border border-neutral-200 shadow-md rounded-lg">
      <h2 className="text-2xl">Quiz: {dummy.title}</h2>
      <p className="my-2">Mark: {dummy.questionMark}</p>
      <div>
        <Quiz quiz={quiz} token={session?.token} />
      </div>
    </div>
  );
}
