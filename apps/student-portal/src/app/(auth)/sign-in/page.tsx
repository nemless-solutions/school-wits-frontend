"use client";

import { AuthForm } from "@/components/AuthForm/AuthForm";
import { useUser } from "@/context/userContext";
import { signInSchema } from "@school-wits/validations";

export default function SignIn() {
  const { setUser } = useUser();

  const handleSignIn = async function (data: {
    email: string;
    password: string;
  }) {
    const { email, password } = data;
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        return { success: false, error: "Invalid credentials" };
      }

      const data = await res.json();
      const { user } = data.data;
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user);

      return { success: true };
    } catch {
      return { success: false, error: "An error occurred" };
    }
  };

  return (
    <AuthForm
      type="SIGN_IN"
      schema={signInSchema}
      defaultValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSignIn}
    />
  );
}
