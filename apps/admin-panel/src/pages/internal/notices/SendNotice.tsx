import { noticeSchema } from "@school-wits/validations";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { usePost } from "../../../api/api-calls";
import { NoticeForm } from "../../../components/Forms/NoticeForm";

export function SendNotice({
  to = "all",
}: {
  to?: "all" | "grade" | "course";
}) {
  const navigate = useNavigate();
  const { userId } = useParams();
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

  const defaultValues = userId
    ? { title: "", details: "" }
    : to === "all"
    ? { title: "", details: "" }
    : { title: "", details: "", grade: "VI" };

  const schema =
    to === "all"
      ? noticeSchema.omit({
          userId: true,
          grade: true,
        })
      : noticeSchema.omit({
          userId: true,
        });

  return (
    <div>
      <h2 className="text-2xl font-medium mb-4">
        Send Notice to{" "}
        {userId
          ? "an Individual"
          : to === "all"
          ? "Everyone"
          : to === "course"
          ? "a Course"
          : "a Grade"}
      </h2>
      <NoticeForm
        schema={schema}
        defaultValues={defaultValues}
        onSubmit={(data) => {
          if (userId) {
            mutate({ ...data, notifyAll: false, userId });
          } else {
            mutate({ ...data, notifyAll: to === "all" ? true : false });
          }
        }}
        isLoading={isPending}
        onCancel={() => navigate("/notices")}
        submitText="Create"
      />
    </div>
  );
}
