import { useGet } from "../../api/api-calls";
import { HomeCards } from "../../components/HomeCards/HomeCards";

export function Home() {
  const { data, isPending } = useGet("user/admin/summary");

  const summary = [
    { title: "Total Students", amount: data?.numberOfStudents },
    { title: "Total Teachers", amount: data?.numberOfTeachers },
    { title: "Total Uploaded Content", amount: data?.numberOfUploadedContent },
  ];

  return (
    <div className="h-full">
      <HomeCards data={summary} isLoading={isPending} />
    </div>
  );
}
