"use client";

import { baseUrl } from "@/constants";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { QuizResult, type Quiz } from "../../../types";
import { Button } from "../client-ui";
import { QuizAnswers } from "./QuizAnswers";

interface QuizProps {
  quiz: Quiz;
  token: string | undefined;
  result?: QuizResult;
}

export function Quiz({ result, quiz, token }: QuizProps) {
  const router = useRouter();

  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [hasWarned, setHasWarned] = useState(false);
  const tabSwitchedOnce = useRef(false);

  const handleAutoSubmit = () => {
    if (result) return;
    if (!token) return;

    console.log("Submitting quiz due to tab switch...", selectedAnswers);
    submitQuizAnswer();
  };

  const handleSubmit = async function () {
    if (result) return;
    if (!token) return;

    submitQuizAnswer();
  };

  const submitQuizAnswer = async function () {
    if (result) return;
    try {
      const res = await fetch(`${baseUrl}/quiz_result`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          quizId: quiz.id,
          questionAnswers: selectedAnswers,
        }),
      });
      if (res.ok) {
        router.reload();
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    }
  };

  useEffect(() => {
    if (result) return;
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        if (!hasWarned) {
          alert(
            "Switching tabs is not allowed. If you leave again, your quiz will be submitted."
          );
          setHasWarned(true);
        } else if (!tabSwitchedOnce.current) {
          handleAutoSubmit();
          tabSwitchedOnce.current = true;
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasWarned]);

  return (
    <div className="space-y-8 mt-8">
      {quiz.questions.map((item, index) => (
        <div key={item.id}>
          <div className="flex items-center gap-4 flex-wrap mb-4">
            <h3 className="text-xl font-semibold">
              {index + 1}. {item.title}
            </h3>
            {result &&
              (result?.answers[item.id] ? (
                <FaCheckCircle className="text-success" />
              ) : (
                <FaTimes className="text-red-500" />
              ))}
          </div>
          <QuizAnswers
            questionId={item.id}
            answers={item.answers}
            selectedAnswerId={selectedAnswers[item.id]}
            onSelectAnswer={(answerId) => {
              setSelectedAnswers((prev) => ({
                ...prev,
                [item.id]: answerId,
              }));
            }}
          />
        </div>
      ))}
      <Button
        variant="secondary"
        className="w-[100px] shadow-md"
        onClick={handleSubmit}
      >
        {!result ? "Submit" : "Completed"}
      </Button>
    </div>
  );
}
