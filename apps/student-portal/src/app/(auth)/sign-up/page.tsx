"use client";

import { signUp } from "@/actions/auth";
import { AuthForm } from "@/components/AuthForm/AuthForm";
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
        contact: "",
        fatherName: "",
        motherName: "",
        guardianEmail: "",
        guardianContact: "",
        curriculum: "CAMBRIDGE",
        grade: "VI",
        dateOfBirth: new Date(),
      }}
      onSubmit={signUp}
    />
  );
}
