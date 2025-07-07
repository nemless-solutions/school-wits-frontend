import { Skeleton } from "@school-wits/ui";
import { courseSchema } from "@school-wits/validations";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGet, usePut } from "../../../../api/api-calls";
import { CourseForm } from "../../../../components/Forms/CourseForm";

export function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutate, isPending, isError, isSuccess } = usePut(`course/${id}`);
  const { refetch, data, isPending: isPendingGet } = useGet(`course/${id}`);

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again later.");
    } else if (isSuccess) {
      toast.success("Student information updated.");
      refetch();
      navigate("/students");
    }
  });

  return (
    <div>
      {isPendingGet ? (
        <div>
          <div className="grid md:grid-cols-2 gap-6">
            {[...Array(10)].map((_, i) => (
              <div className="space-y-2">
                <Skeleton className="w-[100px] h-8" />
                <Skeleton className="w-full h-6" />
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-8">
            <Skeleton className="w-[100px] h-10" />
            <Skeleton className="w-[100px] h-10" />
          </div>
        </div>
      ) : (
        <CourseForm
          schema={courseSchema.partial()}
          defaultValues={{
            uid: data.uid,
            grade: data.grade,
            mode: data.mode,
            type: data.type,
            title: data.title,
            description: data.description,
            fee: data.fee,
            discountedFee: data.discountedFee,
            discountLastDate: data.discountLastDate,
          }}
          onSubmit={(data) => {
            const cleanedData = Object.fromEntries(
              Object.entries(data).filter(([_, value]) => value !== undefined)
            );
            mutate(cleanedData);
          }}
          isLoading={isPending}
          onCancel={() => navigate("/courses")}
          submitText="Update"
        />
      )}
    </div>
  );
}
