import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
} from "@school-wits/ui";
import { noticeSchema } from "@school-wits/validations";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useGet, usePost } from "../../../api/api-calls";
import { NoticeForm } from "../../../components/Forms/NoticeForm";

const schema = noticeSchema.omit({
  userId: true,
  grade: true,
});

export function SendNoticeToCourse() {
  const navigate = useNavigate();
  const { data, isFetching } = useGet("course");
  const [courseId, setCourseId] = useState<null | number>(null);
  const { mutate, isPending, isError, isSuccess, fetchError } =
    usePost("notice");

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again.");
      console.log(fetchError);
    } else if (isSuccess) {
      toast.success("Notice Successfully Sent.");
      navigate("/notices");
    }
  });

  return (
    <div>
      <h2 className="text-2xl font-medium mb-4">Send Notice to Course</h2>
      {isFetching ? (
        <Skeleton className="w-[600px] h-8" />
      ) : (
        <div className="max-w-[600px]">
          <Select onValueChange={(value) => setCourseId(+value)}>
            <SelectTrigger className="w-full font-roboto-slab font-bold bg-white/40">
              <SelectValue placeholder="Select a Course" />
            </SelectTrigger>
            <SelectContent>
              {data
                .filter(
                  (item: { mode: string; grade: string }) =>
                    item?.mode === "ONLINE" && item?.grade !== "X"
                )
                ?.map((c: { id: number; uid: string }, i: number) => (
                  <SelectItem key={i} value={c?.id?.toString()}>
                    {c?.uid}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>
      )}
      <div>
        {courseId != null ? (
          <div>
            <NoticeForm
              schema={schema}
              defaultValues={{ title: "", details: "" }}
              onSubmit={(data) => {
                if (courseId != null) {
                  mutate({ ...data, notifyAll: false, courseId });
                }
              }}
              isLoading={isPending}
              onCancel={() => navigate("/notices")}
              submitText="Create"
            />
          </div>
        ) : (
          <div className="mt-4 max-w-[600px] h-[200px] flex items-center justify-center">
            <p className="text-2xl font-semibold text-neutral-500">
              Please Select a Course
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
