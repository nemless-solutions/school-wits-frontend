"use client";

import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import { zodResolver } from "@hookform/resolvers/zod";
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Textarea,
} from "../client-ui";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<void>;
}

export function AppointmentForm<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
}: Props<T>) {
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async (data) => {
    await onSubmit(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full space-y-6 mt-6 "
      >
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
                  {field.name === "message" ? (
                    <Textarea
                      className="resize-none overflow-y-auto h-[120px] md:h-[150px]"
                      {...field}
                    />
                  ) : (
                    <Input
                      className="bg-white/40 focus:bg-white/80"
                      required
                      type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]}
                      {...field}
                    />
                  )}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button variant="secondary">Submit</Button>
      </form>
    </Form>
  );
}
