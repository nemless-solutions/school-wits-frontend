"use server";

import { signIn } from "@/auth";
import { AuthCredentials } from "../../types";

export const signInWithCredentials = async (
  params: Pick<AuthCredentials, "email" | "password">
) => {
  const { email, password } = params;

  try {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      return { success: false, error: result.error };
    }

    return { success: true };
  } catch (error) {
    console.log(error, "Signin error");
    return { success: false, error: "Signin error" };
  }
};

export const signUp = async (params: AuthCredentials) => {
  const base_url = process.env.BASE_URL;
  const {
    fullName,
    email,
    password,
    currentSchool,
    fatherName,
    motherName,
    guardianEmail,
    guardianContact,
    curriculum,
    grade,
    dateOfBirth,
  } = params;

  try {
    const res = await fetch(`${base_url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName,
        email,
        password,
        currentSchool,
        fatherName,
        motherName,
        guardianEmail,
        guardianContact,
        curriculum,
        grade,
        dateOfBirth,
      }),
    });

    if (!res.ok) throw new Error("Signup error");

    await signInWithCredentials({ email, password });

    return { success: true };
  } catch (error) {
    console.log(error, "Signup error");
    return { success: false, error: "Signup error" };
  }
};
