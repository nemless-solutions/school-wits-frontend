import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  fullName: z.string().min(3),
  contact: z.string(),
  fatherName: z.string().min(3),
  motherName: z.string().min(3),
  guardianEmail: z.string().email(),
  guardianContact: z.string(),
  curriculum: z.enum(["CAMBRIDGE", "OXFORD", "PEARSON", "IB"]),
  grade: z.enum(["VI", "VII", "VIII", "IX", "X", "XI", "XII"]),
  dateOfBirth: z.date(),
});
