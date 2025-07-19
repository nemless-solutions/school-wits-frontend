import { auth } from "@/auth";
import { Quiz } from "@/components/Quiz/Quiz";
import { baseUrl } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import { QuizResult, Quiz as QuizType } from "../../../../../../../../types";

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
  const quizResults = await fetcher<QuizResult[]>(
    `${baseUrl}/quiz_result`,
    session?.token
  );
  const quizResult = quizResults.find((result) => result?.quiz?.id == +quizId);

  const totalQuestionsCount = quiz.questions.length;
  const resultMark =
    (Object.values(quizResult?.answers ?? {}).filter(Boolean)?.length /
      totalQuestionsCount) *
    quiz?.questionMark;

  return (
    <div className="p-4 bg-white border border-neutral-200 shadow-md rounded-lg">
      <h2 className="text-2xl">Quiz: {quiz.title}</h2>
      {quizResult && (
        <p className="my-3">
          Result: {resultMark} / {quiz.questionMark}
        </p>
      )}

      <div>
        <Quiz result={quizResult} quiz={quiz} token={session?.token} />
      </div>
    </div>
  );
}
