import { Button } from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useGet } from "../../../../api/api-calls";
import { DataTable } from "../../../../components/DataTable/DataTable";
import { TableSkeleton } from "../../../../components/TableSkeleton/TableSkeleton";

export const schema = z.object({
  id: z.number(),
  uid: z.string(),
  fullName: z.string(),
  email: z.string(),
  grade: z.string(),
});

export function EnrollRequests() {
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
      accessorKey: "fullName",
      header: "Name",
    },
    {
      accessorKey: "grade",
      header: "Grade",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <Button asChild variant="secondary">
          <Link to={`${row.original.id}`}>Manage</Link>
        </Button>
      ),
    },
  ];

  const { data, isSuccess, isFetching } = useGet(`enrolled_course`);

  return (
    <div>
      {isFetching ? (
        <TableSkeleton />
      ) : isSuccess ? (
        <DataTable data={data} columns={columns} />
      ) : (
        <div className="text-center text-2xl text-destructive font-bold mt-10">
          Something Went Wrong
        </div>
      )}
    </div>
  );
}
