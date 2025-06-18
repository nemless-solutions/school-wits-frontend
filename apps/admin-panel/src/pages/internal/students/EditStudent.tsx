import { signUpSchema } from "@school-wits/validations";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePost } from "../../../api/api-calls";
import { AuthForm } from "../../../components/Forms/StudentForm";

export function EditStudent() {
  /*   const { id } = useParams(); */
  const navigate = useNavigate();
  const { mutate, isPending, isError, isSuccess } = usePost("auth/register");

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
      <AuthForm
        type="SIGN_UP"
        schema={signUpSchema.omit({ password: true }).partial()}
        defaultValues={{
          email: "",
          fullName: "",
          contact: "",
          fatherName: "",
          motherName: "",
          guardianEmail: "",
          guardianContact: "",
          curriculum: "CAMBRIDGE",
          grade: "VI",
          dateOfBirth: new Date(),
        }}
        onSubmit={(data) => mutate(data)}
        isLoading={isPending}
        onCancel={() => navigate("/students")}
      />
    </div>
  );
}
