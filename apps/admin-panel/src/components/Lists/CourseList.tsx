import { Button } from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useGet } from "../../api/api-calls";
import { DataTable } from "../DataTable/DataTable";
import { TableSkeleton } from "../TableSkeleton/TableSkeleton";

export const schema = z.object({
  id: z.number(),
  uid: z.string(),
  title: z.string(),
  grade: z.string(),
});

export function CourseList() {
  const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "uid",
      header: "UID",
    },
    {
      accessorKey: "title",
      header: "Name",
    },
    {
      id: "grade",
      header: "Grade",
      cell: ({ row }) => (
        <span>
          {row.original.grade === "IX" || row.original.grade === "X"
            ? "O Levels"
            : `Grade ${row.original.grade}`}
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

  const { data, isSuccess, isFetching } = useGet("course");

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold text-neutral-600 mb-4">
        Select A Course to See Topics
      </h2>
      {isFetching ? (
        <TableSkeleton />
      ) : isSuccess ? (
        <DataTable
          data={data.filter((item: { grade: string }) => item.grade !== "X")}
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
