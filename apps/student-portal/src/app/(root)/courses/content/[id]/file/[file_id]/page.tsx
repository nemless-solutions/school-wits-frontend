import { auth } from "@/auth";
import FileViewer from "@/components/FileViewer/FileViewer";
import { baseUrl } from "@/constants";

export default async function Content({
  params,
}: {
  params: Promise<{ file_id: string }>;
}) {
  const file_id = (await params).file_id;
  const session = await auth();

  return (
    <div className="h-full">
      <FileViewer
        fileUrl={`${baseUrl}/course_file/download/${file_id}`}
        token={session?.token}
      />
    </div>
  );
}
