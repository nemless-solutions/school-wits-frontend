"use client";

import { signUp } from "@/actions/auth";
import { curriculums, FIELD_NAMES, FIELD_TYPES, terms } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@school-wits/utils";
import { signUpSchema } from "@school-wits/validations";
import { format } from "date-fns";
import { CalendarIcon, Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Path, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
import {
  Button,
  Calendar,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../client-ui";

const schema = signUpSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }
);

const _grades = ["VI", "VII", "VIII", "IX", "X"];

const fields = {
  personal: ["fullName", "email", "password", "confirmPassword", "dateOfBirth"],
  guardian: ["fatherName", "motherName", "guardianEmail", "guardianContact"],
  academic: ["currentSchool", "curriculum", "grade"],
};

export function SignUpForm() {
  const router = useRouter();

  const [step, setStep] = useState(0);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      dateOfBirth: new Date(),
      fatherName: "",
      motherName: "",
      guardianEmail: "",
      guardianContact: "",
      currentSchool: "",
      curriculum: "CAMBRIDGE",
      grade: "VI",
    },
  });

  const onSubmit = async (values: z.infer<typeof schema>) => {
    setLoading(true);
    const result = await signUp(values);
    setLoading(false);

    if (result.success) {
      toast.success(`Successfully signed up`);

      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } else {
      toast.error(`Sign up failed. Please try again.`);
    }
  };

  const nextStep = async () => {
    let fieldsToValidate: (keyof z.infer<typeof schema>)[] = [];

    if (step === 0)
      fieldsToValidate = [
        "fullName",
        "email",
        "password",
        "confirmPassword",
        "dateOfBirth",
      ];
    if (step === 1)
      fieldsToValidate = [
        "fatherName",
        "motherName",
        "guardianEmail",
        "guardianContact",
      ];

    if (step === 2) fieldsToValidate = ["currentSchool", "curriculum", "grade"];

    const isValid = await form.trigger(fieldsToValidate);

    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="max-w-[500px] mx-auto">
      <div className="relative mb-10 w-full md:max-w-[420px] mx-auto">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-[calc(100%-4px)] h-1">
          <div
            className={cn(
              "absolute top-0 left-0 h-full bg-primary",
              step === 1 ? "w-1/2" : step === 2 ? "w-full" : "w-0"
            )}
          />
        </div>
        <div className="flex items-center justify-between gap-2 relative z-10">
          <div
            className={cn(
              "rounded-full w-6 aspect-square relative",
              step >= 0 ? "bg-primary" : "bg-white"
            )}
          >
            <p
              className={cn(
                "absolute  top-0 left-1/2 -translate-x-1/2 -translate-y-full text-sm font-semibold",
                step === 0 ? "text-primary" : "text-white"
              )}
            >
              Personal
            </p>
          </div>
          <div
            className={cn(
              "rounded-full w-6 aspect-square relative",
              step >= 1 ? "bg-primary" : "bg-white"
            )}
          >
            <p
              className={cn(
                "absolute  top-0 left-1/2 -translate-x-1/2 -translate-y-full text-sm font-semibold",
                step === 1 ? "text-primary" : "text-white"
              )}
            >
              Guardian
            </p>
          </div>
          <div
            className={cn(
              "rounded-full w-6 aspect-square relative",
              step >= 2 ? "bg-primary" : "bg-white"
            )}
          >
            <p
              className={cn(
                "absolute  top-0 left-1/2 -translate-x-1/2 -translate-y-full text-sm font-semibold",
                step === 2 ? "text-primary" : "text-white"
              )}
            >
              Academic
            </p>
          </div>
        </div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 transition-all"
        >
          {step === 0 && (
            <>
              {fields.personal.map((field) => (
                <FormField
                  key={field}
                  control={form.control}
                  name={field as Path<z.infer<typeof schema>>}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium data-[error=true]:text-red-700">
                        {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                      </FormLabel>
                      {field.name === "dateOfBirth" ? (
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full bg-white pl-3 text-left font-normal hover:bg-white/90",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value as Date}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1990-01-01")
                              }
                              initialFocus
                              captionLayout="dropdown"
                              fromYear={1990}
                              toYear={new Date().getFullYear()}
                            />
                          </PopoverContent>
                        </Popover>
                      ) : (
                        <FormControl>
                          <Input
                            className="bg-white text-black"
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            {...(field as any)}
                            type={
                              FIELD_TYPES[
                                field.name as keyof typeof FIELD_TYPES
                              ]
                            }
                          />
                        </FormControl>
                      )}
                      <FormMessage className="text-red-700" />
                    </FormItem>
                  )}
                />
              ))}
            </>
          )}

          {step === 1 && (
            <>
              {fields.guardian.map((field) => (
                <FormField
                  key={field}
                  control={form.control}
                  name={field as Path<z.infer<typeof schema>>}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium data-[error=true]:text-red-700">
                        {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                      </FormLabel>

                      <FormControl>
                        <Input
                          className="bg-white text-black"
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          {...(field as any)}
                          type={
                            FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                          }
                        />
                      </FormControl>
                      <FormMessage className="text-red-700" />
                    </FormItem>
                  )}
                />
              ))}
            </>
          )}

          {step === 2 && (
            <>
              {fields.academic.map((field) => (
                <FormField
                  key={field}
                  control={form.control}
                  name={field as Path<z.infer<typeof schema>>}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white font-medium data-[error=true]:text-red-700">
                        {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                      </FormLabel>
                      {field.name === "curriculum" ? (
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value as string}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full bg-white hover:bg-white/90 duration-100">
                              <SelectValue placeholder="Select a curriculum" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {curriculums.map((c, i) => (
                              <SelectItem key={i} value={c.value}>
                                {c.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : field.name === "grade" ? (
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value as string}
                        >
                          <FormControl>
                            <SelectTrigger className="w-full bg-white hover:bg-white/90 duration-100">
                              <SelectValue placeholder="Select your grade" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {_grades.map((g, i) => (
                              <SelectItem key={i} value={g}>
                                Grade {g}{" "}
                                {g === "IX" || g === "X" ? "(O Levels)" : ""}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <FormControl>
                          <Input
                            className="bg-white text-black"
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            {...(field as any)}
                            type={
                              FIELD_TYPES[
                                field.name as keyof typeof FIELD_TYPES
                              ]
                            }
                          />
                        </FormControl>
                      )}

                      <FormMessage className="text-red-700" />
                      {field.name === "currentSchool" && (
                        <p>
                          Write &quot;private&quot; if homeschooled or not
                          enrolled
                        </p>
                      )}
                    </FormItem>
                  )}
                />
              ))}
              <div className="flex items-center space-x-2 mt-6">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 rounded-full"
                  checked={agree}
                  onChange={(e) => setAgree(e.target.checked)}
                />
                <label className="text-sm font-semibold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 select-none text-neutral-100">
                  I agree to the terms and conditions outlined{" "}
                  <Popover>
                    <PopoverTrigger asChild>
                      <span className="cursor-pointer underline font-semibold text-primary text-sm">
                        here
                      </span>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto max-w-screen p-4 bg-white/60 backdrop-blur-2xl"
                      align="start"
                    >
                      <p className="text-xl font-bold">Terms</p>
                      <p className="text-lg font-bold mb-4">
                        By enrolling, you agree to the following terms:{" "}
                      </p>
                      <ul className="space-y-2 list-disc list-inside">
                        {terms.map((t, i) => (
                          <li key={i}>{t}</li>
                        ))}
                      </ul>
                    </PopoverContent>
                  </Popover>
                </label>
              </div>
            </>
          )}

          <div className="flex justify-between pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={step === 0}
            >
              Back
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={nextStep}
              disabled={step >= 2}
            >
              Next
            </Button>
          </div>
          <p className="text-center text-white mt-8">
            Already have an account ?{" "}
            <Link className="font-medium text-primary" href="/sign-in">
              Sign In
            </Link>
          </p>
          {step === 2 && (
            <Button
              type="submit"
              className="w-full text-black"
              disabled={!agree || loading}
            >
              {loading ? (
                <Loader2Icon className="animate-spin scale-150" />
              ) : (
                "Sign Up"
              )}
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
}
