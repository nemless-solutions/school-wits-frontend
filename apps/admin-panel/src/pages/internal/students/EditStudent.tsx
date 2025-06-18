import { signUpSchema } from "@school-wits/validations";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useGet, usePost } from "../../../api/api-calls";
import { AuthForm } from "../../../components/Forms/StudentForm";

export function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { mutate, isPending, isError, isSuccess } = usePost("auth/register");
  const { data, isPending: isPendingGet } = useGet(`user/${id}`);

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
      {isPendingGet ? (
        <p>Loading...</p>
      ) : (
        <AuthForm
          type="SIGN_UP"
          schema={signUpSchema.omit({ password: true }).partial()}
          defaultValues={{
            email: data.email,
            fullName: data.fullName,
            contact: data.contact,
            fatherName: data.fatherName,
            motherName: data.motherName,
            guardianEmail: data.guardianEmail,
            guardianContact: data.guardianContact,
            curriculum: data.curriculum,
            grade: data.grade,
            dateOfBirth: data.dateOfBirth,
          }}
          onSubmit={(data) => mutate(data)}
          isLoading={isPending}
          onCancel={() => navigate("/students")}
        />
      )}
    </div>
  );
}
