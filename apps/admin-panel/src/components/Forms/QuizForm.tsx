import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from "@school-wits/ui";
import { Loader2Icon } from "lucide-react";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";
import { FIELD_NAMES, FIELD_TYPES } from "../../constants";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => void;
  isLoading?: boolean;
  onCancel?: () => void;
  submitText?: string;
}

export function QuizForm<T extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  isLoading,
  onCancel,
  submitText = "Submit",
}: Props<T>) {
  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = (data) => {
    onSubmit(data);
  };

  return (
    <div className="flex flex-col gap-4">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="w-full space-y-6 mt-6 "
        >
          <div className="space-y-6">
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
                        type={
                          FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]
                        }
                        {...field}
                        min={1}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
          </div>
          <div className="flex items-center gap-3 mt-8 pb-8">
            <Button
              type="submit"
              disabled={isLoading}
              size="lg"
              className="w-[100px]"
            >
              {isLoading ? (
                <Loader2Icon className="animate-spin scale-150" />
              ) : (
                submitText
              )}
            </Button>
            <Button
              onClick={onCancel}
              type="button"
              variant="destructive"
              size="lg"
              className="w-[100px]"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
