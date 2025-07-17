"use client";

import { signInWithCredentials } from "@/actions/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@school-wits/validations";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { z } from "zod";
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

export function SignInForm() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInSchema>) {
    setLoading(true);
    const result = await signInWithCredentials(values);
    setLoading(false);

    if (result.success) {
      toast.success(`Successfully signed in`);
      router.push("/dashboard");
    } else {
      toast.error(`Sign in failed. Please try again.`);
    }
  }

  return (
    <div className="max-w-[400px] mx-auto">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <FormLabel className="text-base md:text-lg font-medium text-white">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-white text-black h-10"
                    {...field}
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base md:text-lg font-medium text-white">
                  Password
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-white text-black h-10"
                    {...field}
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            size="lg"
            className="w-full mt-2 text-black font-semibold"
            disabled={loading}
          >
            {loading ? (
              <Loader2Icon className="animate-spin scale-150" />
            ) : (
              "Sign In"
            )}
          </Button>
        </form>
      </Form>
      <p className="text-center text-white mt-8">
        Don&apos;t have an account?{" "}
        <Link className="font-medium text-primary" href="/sign-up">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
