"use client";

import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { toast } from "react-toastify";
import { ZodType } from "zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "../client-ui";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
  type: "SIGN_IN" | "SIGN_UP";
}

export function AuthForm<T extends FieldValues>({
  type,
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) {
  const router = useRouter();

  const isSignUp = type === "SIGN_UP";

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    const result = await onSubmit(data);

    if (result.success) {
      toast.success(`Successfully ${isSignUp ? "signed up" : "signed in"}`);

      setTimeout(() => {
        router.push("/");
      }, 1000);
    } else {
      toast.error(
        `${isSignUp ? "Sign up" : "Sign in"} failed. Please try again.`
      );
    }
  };

  return (
    <div className="flex flex-col gap-4">
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
                    <FormLabel className="capitalize font-semibold">
                      {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="bg-white/40 focus:bg-white/80"
                        required
                        type={
                          FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                        }
                        autoComplete={
                          field.name === "password" ? "current-password" : ""
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button
              type="submit"
              size="lg"
              variant="success"
              className={isSignUp ? "mt-6" : "w-full my-4"}
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </Button>
            <Button
              type="button"
              size="lg"
              className={isSignUp ? "mt-6" : "w-full"}
              asChild
            >
              <Link href="/">Home</Link>
            </Button>
          </div>
        </form>
      </Form>

      {/* <p className="text-center text-base font-medium">
        {isSignUp ? "Already have an account?" : "New to School Wits?"}{" "}
        <Link
          href={isSignUp ? "/sign-in" : "/sign-up"}
          className="font-bold text-primary"
        >
          {isSignUp ? "Sign in" : "Create an account"}
        </Link>
      </p> */}
    </div>
  );
}
