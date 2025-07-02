"use client";

import { signUp } from "@/actions/auth";
import { AuthForm } from "@/components/Forms/AuthForm";
import { signUpSchema } from "@school-wits/validations";

export default function SignUp() {
  return (
    <AuthForm
      type="SIGN_UP"
      schema={signUpSchema}
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
      onSubmit={signUp}
    />
  );
}
