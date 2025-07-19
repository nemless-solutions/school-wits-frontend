import { baseUrl } from "@/constants";
import { fetcher } from "@/libs/fetcher";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaQuestion } from "react-icons/fa";
import { Quiz } from "../../../types";

export function QuizLink({
  id,
  locked,
  videoId,
}: {
  id: number;
  locked: boolean;
  videoId: number | null;
}) {
  const { data } = useSession();
  const [quizzes, setQuizzes] = useState<Quiz[] | []>([]);

  useEffect(() => {
    (async function () {
      if (!data?.token || !videoId) return;

      const quizData = await fetcher<Quiz[]>(
        `${baseUrl}/quiz/video/${videoId}`,
        data?.token
      );

      setQuizzes(quizData);
    })();
  }, [data?.token, videoId]);

  return (
    <div className="">
      {quizzes?.map((quiz) => (
        <Link
          key={quiz.id}
          href={locked ? "" : `/courses/content/${id}/quiz/${quiz.id}`}
          className="flex items-center gap-4 hover:bg-neutral-100 px-4 py-3 duration-150"
        >
          <div className="p-2 bg-secondary text-white rounded-full text-sm">
            <FaQuestion />
          </div>
          <div>{quiz.title}</div>
        </Link>
      ))}
    </div>
  );
}
