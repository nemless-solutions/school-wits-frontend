"use client";

import { AuthForm } from "@/components/AuthForm/AuthForm";
import { useUser } from "@/context/userContext";
import { signUpSchema } from "@school-wits/validations";

export default function SignUp() {
  const { setUser } = useUser();

  const handleSignUp = async function (data: {
    email: string;
    password: string;
    fullName: string;
    contact: string;
    fatherName: string;
    motherName: string;
    guardianEmail: string;
    guardianContact: string;
    curriculum: string;
    grade: string;
    dateOfBirth: Date;
  }) {
    const {
      email,
      password,
      fullName,
      contact,
      fatherName,
      motherName,
      guardianEmail,
      guardianContact,
      curriculum,
      grade,
      dateOfBirth,
    } = data;

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          fullName,
          contact,
          fatherName,
          motherName,
          guardianEmail,
          guardianContact,
          curriculum,
          grade,
          dateOfBirth,
        }),
      });

      if (!res.ok) {
        return { success: false, error: "Invalid Informations" };
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
      onSubmit={handleSignUp}
    />
  );
}
