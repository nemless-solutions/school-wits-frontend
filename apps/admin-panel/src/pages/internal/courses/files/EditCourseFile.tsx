import { Skeleton } from "@school-wits/ui";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { z } from "zod";
import { useGet, usePut } from "../../../../api/api-calls";
import { FileEditForm } from "../../../../components/Forms/FileEditForm";

const fileEditSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
});

export function EditCourseFile() {
  const { topicId, fileId } = useParams();
  const navigate = useNavigate();

  const { data, isFetching } = useGet(`course_file/${topicId}`);
  const { mutate, isPending, isError, isSuccess } = usePut(
    `course_file/${fileId}`
  );

  const file = data?.find((f: { id: number }) => f.id === Number(fileId));

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again later.");
    }
    if (isSuccess) {
      toast.success("File successfully updated.");
      navigate(-1);
    }
  }, [isError, isSuccess, navigate]);

  return (
    <div>
      {isFetching ? (
        <div>
          <div className="grid grid-cols-1 gap-6 mt-6">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="space-y-2">
                <Skeleton className="w-[100px] h-6" />
                <Skeleton className="w-full h-8" />
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-8">
            <Skeleton className="w-[100px] h-10" />
            <Skeleton className="w-[100px] h-10" />
          </div>
        </div>
      ) : (
        <FileEditForm
          schema={fileEditSchema}
          defaultValues={{
            title: file?.title || "",
            description: file?.description || "",
          }}
          onSubmit={(data) => {
            mutate(data);
          }}
          isLoading={isPending}
          onCancel={() => navigate(-1)}
          submitText="Update"
        />
      )}
    </div>
  );
}
