import { useState } from "react";
import { FileForm } from "../../../../components/Forms/FileForm";
import { CourseSelect } from "../../../../components/Selects/CourseSelect";
import { TopicSelect } from "../../../../components/Selects/TopicSelect";

export function CreateFile() {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);

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
          <FileForm topicId={selectedTopicId} />
        </div>
      ) : selectedCourseId ? (
        <div className="flex items-center justify-center mt-20">
          <p className="text-2xl font-bold text-neutral-400">
            Please Select A Topic
          </p>
        </div>
      ) : null}
    </div>
  );
}
