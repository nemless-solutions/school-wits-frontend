"use client";

import { AuthForm } from "@/components/AuthForm/AuthForm";
import { signInSchema } from "@school-wits/validations";

export default function SignIn() {
  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={() => Promise.resolve({ success: true })}
    />
  );
}
