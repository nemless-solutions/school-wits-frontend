import { quizSchema } from "@school-wits/validations";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { usePost } from "../../../../api/api-calls";
import { QuizForm } from "../../../../components/Forms/QuizForm";
import { CourseSelect } from "../../../../components/Selects/CourseSelect";
import { TopicSelect } from "../../../../components/Selects/TopicSelect";
import { VideoSelect } from "../../../../components/Selects/VideoSelect";

export const schema = z.object({
  id: z.number(),
  title: z.string(),
  details: z.string(),
});

export function CreateQuiz() {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);
  const [selectedVideoId, setSelectedVideoId] = useState<number | null>(null);

  return (
    <div>
      <CourseSelect
        setSelectedCourseId={setSelectedCourseId}
        setSelectedTopicId={setSelectedTopicId}
      />
      {selectedCourseId ? (
        <TopicSelect
          courseId={selectedCourseId}
          setSelectedTopicId={setSelectedTopicId}
        />
      ) : (
        <div className="flex items-center justify-center mt-20">
          <p className="text-2xl font-bold text-neutral-400">
            Please Select A Course First
          </p>
        </div>
      )}
      {selectedTopicId ? (
        <div className="mb-4">
          <VideoSelect
            topicId={selectedTopicId}
            setSelectedVideoId={setSelectedVideoId}
          />
        </div>
      ) : selectedCourseId ? (
        <div className="flex items-center justify-center mt-20">
          <p className="text-2xl font-bold text-neutral-400">
            Please Select A Topic
          </p>
        </div>
      ) : null}
      {selectedVideoId ? (
        <div className="mb-4">
          <QuizForma videoId={selectedVideoId} />
        </div>
      ) : selectedCourseId && selectedTopicId ? (
        <div className="flex items-center justify-center mt-20">
          <p className="text-2xl font-bold text-neutral-400">
            Please Select A Video
          </p>
        </div>
      ) : null}
    </div>
  );
}

const QuizForma = function ({ videoId }: { videoId: number }) {
  const { isPending } = usePost("quiz");
  const navigate = useNavigate();
  return (
    <QuizForm
      schema={quizSchema}
      defaultValues={{
        title: "",
        questionMark: 1,
        duration: 1,
      }}
      onSubmit={(data) => {
        console.log({ ...data, videoId });
      }}
      isLoading={isPending}
      onCancel={() => navigate("/courses")}
      submitText="Create"
    />
  );
};
