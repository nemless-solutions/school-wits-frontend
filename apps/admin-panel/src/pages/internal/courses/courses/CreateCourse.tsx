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
      toast.success("Student Created.");
      navigate("/students");
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
          fee: 0,
          discountedFee: undefined,
          discountLastDate: undefined,
        }}
        onSubmit={(data) => {
          const cleanedData = Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value !== undefined)
          );
          mutate(cleanedData);
        }}
        isLoading={isPending}
        onCancel={() => navigate("/courses")}
        submitText="Create"
      />
    </div>
  );
}
