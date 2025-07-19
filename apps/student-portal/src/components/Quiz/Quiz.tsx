"use client";

import { useEffect, useRef, useState } from "react";
import { type Quiz } from "../../../types";
import { Button } from "../client-ui";
import { QuizAnswers } from "./QuizAnswers";

interface QuizProps {
  quiz: Quiz;
  token: string | undefined;
}

export function Quiz({ quiz, token }: QuizProps) {
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});
  const [hasWarned, setHasWarned] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const tabSwitchedOnce = useRef(false);

  const handleAutoSubmit = () => {
    if (!token) return;

    if (!submitted) {
      console.log("Submitting quiz due to tab switch...", selectedAnswers);
      setSubmitted(true);
    }
  };

  const handleSubmit = async function () {
    if (!token) return;

    /* const rest = await fetch(`${baseUrl}/quiz_result`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        quizId: quiz.id,
        questionAnswers: selectedAnswers,
      }),
    }); */
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        // User switched tab or minimized

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
  }, [hasWarned, submitted]);

  return (
    <div className="space-y-8">
      {quiz.questions.map((item, index) => (
        <div key={item.id}>
          <h3 className="text-xl font-semibold mb-4">
            {index + 1}. {item.title}
          </h3>
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
        Submit
      </Button>
    </div>
  );
}
