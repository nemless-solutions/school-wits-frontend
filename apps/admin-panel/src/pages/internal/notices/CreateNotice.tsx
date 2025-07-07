import { noticeSchema } from "@school-wits/validations";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePost } from "../../../api/api-calls";
import { NoticeForm } from "../../../components/Forms/NoticeForm";

export function CreateNotice() {
  const navigate = useNavigate();
  const { mutate, isPending, isError, isSuccess } = usePost("course");

  useEffect(() => {
    if (isError) {
      toast.error("Something went wrong. Please try again.");
    } else if (isSuccess) {
      toast.success("Student Created.");
      navigate("/notices");
    }
  });

  return (
    <div>
      <NoticeForm
        schema={noticeSchema}
        defaultValues={{
          title: "",
          details: "",
          grade: "VI",
          notifyAll: true,
        }}
        onSubmit={(data) => {
          const cleanedData = Object.fromEntries(
            Object.entries(data).filter(([_, value]) => value !== undefined)
          );
          return null;
          mutate(cleanedData);
        }}
        isLoading={isPending}
        onCancel={() => navigate("/notices")}
        submitText="Create"
      />
    </div>
  );
}
