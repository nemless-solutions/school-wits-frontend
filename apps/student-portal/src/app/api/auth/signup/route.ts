// app/api/login/route.ts
import { setCookie } from "@/libs/set-cookie";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const base_url = process.env.BASE_URL;
  const body = await req.json();
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
  } = body;

  try {
    const response = await axios.post(`${base_url}/auth/register`, {
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
    });

    const { user, token } = await response.data;

    if (!token || !user) {
      return NextResponse.json(
        { message: "Registration failed" },
        { status: 401 }
      );
    }

    await setCookie(token);

    return NextResponse.json({
      message: "Registration successful",
      data: { user, token },
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Registration failed",
        error: error?.response?.data || error.message,
      },
      { status: 401 }
    );
  }
}
