import { Button } from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";
import { useGet } from "../../api/api-calls";
import { DataTable } from "../DataTable/DataTable";
import { TableSkeleton } from "../TableSkeleton/TableSkeleton";

export const schema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  grade: z.string(),
});

export function TopicList() {
  const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "title",
      header: "Title",
    },
    {
      id: "grade",
      header: "Grade",
      cell: ({ row }) => (
        <span>
          {row.original.grade === "IX" || row.original.grade === "X"
            ? "O Levels"
            : row.original.grade === "VI"
            ? "Grade VI"
            : row.original.grade === "VII"
            ? "Grade VII"
            : "Grade VIII"}
        </span>
      ),
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <Button asChild variant="secondary">
          <Link to={`${row.original.id}`}>Select</Link>
        </Button>
      ),
    },
  ];

  const { courseId } = useParams();
  const { data, isSuccess, isFetching } = useGet(
    `course_topic/course/${courseId}`
  );
  const { data: courseData } = useGet(`course/${courseId}`);
  const grade = courseData?.grade;

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold text-neutral-600 mb-4">
        Select A Topic to See Files
      </h2>
      {isFetching ? (
        <TableSkeleton />
      ) : isSuccess ? (
        <DataTable
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          data={data.map((topic: any) => ({ ...topic, grade }))}
          columns={columns}
        />
      ) : (
        <div className="text-center text-2xl text-destructive font-bold mt-10">
          Something Went Wrong
        </div>
      )}
    </div>
  );
}
