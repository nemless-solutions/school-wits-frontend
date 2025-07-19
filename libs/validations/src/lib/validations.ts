import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const signUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
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

export const appointmentSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  contact: z.string(),
  message: z.string().min(10),
});

export const courseSchema = z.object({
  uid: z.string(),
  grade: z.enum(["VI", "VII", "VIII", "IX", "X"]),
  mode: z.enum(["IN_PERSON", "ONLINE"]),
  type: z.enum(["SHORT", "LONG"]),
  title: z.string().min(3),
  description: z.string().min(10),
  fee: z.coerce.number().min(1, { message: "Fee must be greater than 0" }),
});

export const topicSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  locked: z.boolean(),
});

export const fileSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
});

export const quizSchema = z.object({
  title: z.string().min(3),
  questionMark: z.coerce.number(),
  duration: z.coerce.number(),
});

export const quizQuestionSchema = z.object({
  title: z.string().min(3),
});

export const quizAnswerSchema = z.object({
  title: z.string().min(3),
  correct: z.boolean(),
});

export const noticeSchema = z.object({
  title: z.string().min(3),
  details: z.string().min(10),
  grade: z.enum(["VI", "VII", "VIII", "IX", "X"]),
  userId: z.number(),
});
