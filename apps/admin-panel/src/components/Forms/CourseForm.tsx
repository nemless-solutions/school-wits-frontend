import { zodResolver } from "@hookform/resolvers/zod";
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
} from "@school-wits/ui";
import { cn } from "@school-wits/utils";
import { format } from "date-fns";
import { CalendarIcon, Loader2Icon } from "lucide-react";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { ZodType } from "zod";
import { FIELD_NAMES, FIELD_TYPES, grades } from "../../constants";

interface Props<T extends FieldValues> {
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => void;
  isLoading?: boolean;
  onCancel?: () => void;
  submitText?: string;
}

export function CourseForm<T extends FieldValues>({
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
          <div className="grid md:grid-cols-2 gap-6">
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
                    {field.name === "mode" ? (
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
                          <SelectItem value="IN_PERSON">In Person</SelectItem>
                          <SelectItem value="ONLINE">Online</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : field.name === "type" ? (
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
                          <SelectItem value="LONG">Long</SelectItem>
                          <SelectItem value="SHORT">Short</SelectItem>
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
                          {grades.map((g, i) => (
                            <SelectItem
                              key={i}
                              value={g}
                              className="font-roboto-slab font-bold"
                            >
                              Grade {g}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    ) : field.name === "discountLastDate" ? (
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
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date("1990-01-01")}
                            initialFocus
                            captionLayout="dropdown"
                            fromYear={1990}
                            toYear={new Date().getFullYear()}
                          />
                        </PopoverContent>
                      </Popover>
                    ) : (
                      <>
                        <FormControl>
                          <Input
                            className="bg-white/40 focus:bg-white/80"
                            type={
                              FIELD_TYPES[
                                field.name as keyof typeof FIELD_TYPES
                              ]
                            }
                            autoComplete={
                              field.name === "password"
                                ? "current-password"
                                : ""
                            }
                            {...field}
                            min={1}
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
          <div className="space-x-3 mt-8 pb-8">
            <Button type="submit" size="lg" className="w-[100px]">
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
