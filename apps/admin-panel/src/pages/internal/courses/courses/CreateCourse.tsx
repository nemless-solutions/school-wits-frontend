import { courseSchema } from "@school-wits/validations";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePost } from "../../../../api/api-calls";
import { CourseForm } from "../../../../components/Forms/CourseForm";

export function CreateCourse() {
  const navigate = useNavigate();
  const { mutate, isPending, isError, isSuccess } = usePost("course");

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again.");
    } else if (isSuccess) {
      toast.success("Course Created.");
      navigate(-1);
    }
  });

  return (
    <div>
      <CourseForm
        schema={courseSchema}
        defaultValues={{
          uid: "",
          grade: "VI",
          mode: "IN_PERSON",
          type: "LONG",
          title: "",
          description: "",
          fee: 1,
        }}
        onSubmit={(data) => {
          const cleanedData = Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value !== undefined)
          );
          mutate({
            ...cleanedData,
            grade: cleanedData.grade === "X" ? "IX" : cleanedData.grade,
          });
        }}
        isLoading={isPending}
        onCancel={() => navigate("/courses")}
        submitText="Create"
      />
    </div>
  );
}
