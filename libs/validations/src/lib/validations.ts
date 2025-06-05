import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  fullName: z.string().min(3),
  fatherName: z.string().min(3),
  motherName: z.string().min(3),
  guardianEmail: z.string().email(),
  guardianContact: z.string(),
  currentSchool: z.string().min(6),
  curriculum: z.enum(["CAMBRIDGE", "OXFORD", "PEARSON", "IB"]),
  grade: z.enum(["VI", "VII", "VIII", "IX", "X"]),
  dateOfBirth: z.date(),
});
