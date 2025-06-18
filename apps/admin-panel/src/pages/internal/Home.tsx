import { useGet } from "../../api/api-calls";
import { HomeCards } from "../../components/HomeCards/HomeCards";
import { useAuth } from "../../contexts/AuthContext";

export default function Home() {
  const { token } = useAuth();
  const { data, isPending } = useGet("user/admin/summary", {
    headers: { Authorization: `Bearer ${token}` },
  });

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
