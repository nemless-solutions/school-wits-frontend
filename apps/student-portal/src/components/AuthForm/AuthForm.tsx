"use client";

import { curriculums, FIELD_NAMES, FIELD_TYPES, grades } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@school-wits/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";
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

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

const _grades = grades.map((grade) => grade.grade.toUpperCase());

const years = Array.from(
  { length: 100 },
  (_, i) => new Date().getFullYear() - i
);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function AuthForm<T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) {
  // const router = useRouter();

  const isSignUp = type === "SIGN_UP";

  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const currentMonth = new Date(selectedYear, selectedMonth);

  const handleMonthChange = (monthIndex: number) => {
    setSelectedMonth(monthIndex);
  };

  const handleYearChange = (year: number) => {
    setSelectedYear(year);
  };

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);

    console.log(data.dateOfBirth.toISOString());

    /* if (result.success) {
      toast({
        title: "Success",
        description: isSignIn
          ? "You have successfully signed in."
          : "You have successfully signed up.",
      });

      router.push("/");
    } else {
      toast({
        title: `Error ${isSignIn ? "signing in" : "signing up"}`,
        description: result.error ?? "An error occurred.",
        variant: "destructive",
      });
    } */
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-primary text-center">
        {isSignUp ? "Create your free account" : "Welcome back to School Wits"}
      </h1>
      {isSignUp && (
        <div className="text-netral-600 space-y-3 max-w-[720px]">
          <p>
            School Wits is an English-medium educational technology platform
            that goes beyond standard curricula, offering extensive knowledge
            and a holistic learning experience.
          </p>
          <p>
            The curriculum features the Cambridge Assessment International
            Education (CAIE) across all courses. Please proceed to complete the
            following enrollment form to get started:
          </p>
        </div>
      )}

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full space-y-6 mt-6 "
        >
          <div className={isSignUp ? "grid md:grid-cols-2 gap-6" : "space-y-6"}>
            {Object.keys(defaultValues).map((field) => (
              <FormField
                key={field}
                control={form.control}
                name={field as Path<T>}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="capitalize">
                      {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                    </FormLabel>
                    {field.name === "curriculum" ? (
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full bg-white/40">
                            <SelectValue placeholder="Select a verified email to display" />
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
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full font-roboto-slab font-bold bg-white/40">
                            <SelectValue
                              className="font-roboto-slab"
                              placeholder="Select a verified email to display"
                            />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {_grades.map((g, i) => (
                            <SelectItem
                              key={i}
                              value={g}
                              className="font-roboto-slab font-bold"
                            >
                              {g}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : field.name === "dateOfBirth" ? (
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full bg-white/40 pl-3 text-left font-normal hover:bg-white/80",
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
                          <div className="flex justify-between mb-2 gap-2">
                            <select
                              className="border p-1 rounded text-sm m-2"
                              value={selectedMonth}
                              onChange={(e) =>
                                handleMonthChange(parseInt(e.target.value))
                              }
                            >
                              {months.map((month, idx) => (
                                <option value={idx} key={month}>
                                  {month}
                                </option>
                              ))}
                            </select>
                            <select
                              className="border p-1 rounded text-sm m-2"
                              value={selectedYear}
                              onChange={(e) =>
                                handleYearChange(parseInt(e.target.value))
                              }
                            >
                              {years.map((year) => (
                                <option value={year} key={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </div>
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            month={currentMonth}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    ) : (
                      <>
                        <FormControl>
                          <Input
                            className="bg-white/40 focus:bg-white/80"
                            required
                            type={
                              FIELD_TYPES[
                                field.name as keyof typeof FIELD_TYPES
                              ]
                            }
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </>
                    )}
                  </FormItem>
                )}
              />
            ))}
          </div>
          <Button
            type="submit"
            size="lg"
            className={isSignUp ? "w-[250px] mt-6" : "w-full mt-6"}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>
      </Form>

      <p className="text-center text-base font-medium">
        {isSignUp ? "Already have an account?" : "New to School Wits?"}{" "}
        <Link
          href={isSignUp ? "/sign-in" : "/sign-up"}
          className="font-bold text-primary"
        >
          {isSignUp ? "Sign in" : "Create an account"}
        </Link>
      </p>
    </div>
  );
}
