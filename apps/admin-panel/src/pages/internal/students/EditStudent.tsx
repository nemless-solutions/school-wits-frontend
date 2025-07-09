import { Skeleton } from "@school-wits/ui";
import { signUpSchema } from "@school-wits/validations";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGet, usePut } from "../../../api/api-calls";
import { AuthForm } from "../../../components/Forms/AuthForm";

export function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutate, isPending, isError, isSuccess } = usePut(`user/${id}`);
  const { refetch, data, isPending: isPendingGet } = useGet(`user/${id}`);

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
        <AuthForm
          type="SIGN_UP"
          schema={signUpSchema
            .omit({ password: true, confirmPassword: true })
            .partial()}
          defaultValues={{
            email: data.email,
            fullName: data.fullName,
            dateOfBirth: new Date(data.dateOfBirth),
            fatherName: data.fatherName,
            motherName: data.motherName,
            guardianEmail: data.guardianEmail,
            guardianContact: data.guardianContact,
            currentSchool: data.currentSchool,
            curriculum: data.curriculum,
            grade: data.grade,
          }}
          onSubmit={(data) => mutate(data)}
          isLoading={isPending}
          onCancel={() => navigate("/students")}
          submitText="Update"
        />
      )}
    </div>
  );
}
