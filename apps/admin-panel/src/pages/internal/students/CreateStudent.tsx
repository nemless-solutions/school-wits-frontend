import { signUpSchema } from "@school-wits/validations";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePost } from "../../../api/api-calls";
import { AuthForm } from "../../../components/Forms/AuthForm";

export function CreateStudent() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate, isPending, isError, isSuccess } = usePost("auth/register");

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again.");
    } else if (isSuccess) {
      toast.success("Student Created.");
      queryClient.invalidateQueries({
        queryKey: [["user?roleName=ROLE_STUDENT"]],
      });
      navigate("/students");
    }
  });

  return (
    <div>
      <AuthForm
        type="SIGN_UP"
        schema={signUpSchema.omit({ confirmPassword: true })}
        defaultValues={{
          email: "",
          password: "",
          fullName: "",
          dateOfBirth: new Date(),
          fatherName: "",
          motherName: "",
          guardianEmail: "",
          guardianContact: "",
          currentSchool: "",
          curriculum: "CAMBRIDGE",
          grade: "VI",
        }}
        onSubmit={(data) => mutate(data)}
        isLoading={isPending}
        onCancel={() => navigate("/students")}
        submitText="Create"
      />
    </div>
  );
}
