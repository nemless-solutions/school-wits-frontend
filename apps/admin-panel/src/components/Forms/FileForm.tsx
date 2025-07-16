import { Button, Input, Label, Textarea } from "@school-wits/ui";
import { Loader2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePost } from "../../api/api-calls";

interface FileFormProps {
  topicId: number | string;
}

export function FileForm({ topicId }: FileFormProps) {
  const [data, setData] = useState<{
    title: string;
    description: string;
    file: File | null;
  }>({ title: "", description: "", file: null });
  const [errorMsg, setErrorMsg] = useState({
    title: "",
    description: "",
    file: "",
  });
  const navigate = useNavigate();

  const { mutate, isPending, isError, isSuccess, fetchError } = usePost(
    `course_file?courseTopicId=${topicId}&title=${data.title}&description=${data.description}`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!data.title)
      return setErrorMsg({ ...errorMsg, title: "Title is required" });
    if (!data.description)
      return setErrorMsg({
        ...errorMsg,
        description: "Description is required",
      });
    if (!data.file)
      return setErrorMsg({ ...errorMsg, file: "File is required" });

    const formData = new FormData();
    formData.append("file", data.file);

    mutate(formData);
  };

  useEffect(() => {
    if (isError) {
      toast.error(
        (fetchError?.response?.data as string) ||
          "Something went wrong. Please try again later."
      );
      console.log(fetchError);
    } else if (isSuccess) {
      toast.success("File Created.");
      navigate(-1);
    }
  });

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={data.title}
          onChange={(e) => {
            setData({ ...data, title: e.target.value });
            setErrorMsg({ ...errorMsg, title: "" });
          }}
          required
        />
        {errorMsg.title && (
          <p className="text-sm text-destructive">{errorMsg.title}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          rows={4}
          className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={data.description}
          onChange={(e) => {
            setData({ ...data, description: e.target.value });
            setErrorMsg({ ...errorMsg, description: "" });
          }}
          required
        />
        {errorMsg.description && (
          <p className="text-sm text-destructive">{errorMsg.description}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="file">File</Label>
        <Input
          type="file"
          id="file"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setData({ ...data, file });
            setErrorMsg({ ...errorMsg, file: "" });
          }}
          required
        />
        {errorMsg.file && (
          <p className="text-sm text-destructive">{errorMsg.file}</p>
        )}
      </div>
      <div className="flex items-center gap-3 mt-8 pb-8">
        <Button
          type="submit"
          disabled={isPending}
          size="lg"
          className="w-[100px]"
        >
          {isPending ? (
            <Loader2Icon className="animate-spin scale-150" />
          ) : (
            "Submit"
          )}
        </Button>
        <Button
          onClick={() => navigate(-1)}
          type="button"
          variant="destructive"
          size="lg"
          className="w-[100px]"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}
