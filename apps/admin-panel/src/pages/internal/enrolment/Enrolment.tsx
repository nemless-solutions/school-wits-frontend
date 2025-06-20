import { useQueryParams } from "@school-wits/hooks";
import { Button } from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useGet } from "../../../api/api-calls";
import { DataTable } from "../../../components/DataTable/DataTable";
import { TableSkeleton } from "../../../components/TableSkeleton/TableSkeleton";

export const schema = z.object({
  id: z.number(),
  uid: z.string(),
  fullName: z.string(),
  email: z.string(),
  grade: z.string(),
});

export function Enrolment() {
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

  const query = useQueryParams();
  const { data, refetch, isSuccess, isPending } = useGet(
    "user?roleName=ROLE_STUDENT"
  );

  useEffect(() => {
    const reload_list = query.get("reload_list");
    if (reload_list) refetch();
  }, [refetch, query]);

  return (
    <div>
      <div className="flex justify-end mb-2 md:mb-4">
        <Button asChild className="hidden md:flex items-center">
          <Link to="add">
            <FaPlus /> Add Student
          </Link>
        </Button>
        <Button asChild size="icon" className="md:hidden">
          <Link to="add">
            <FaPlus />
          </Link>
        </Button>
      </div>
      {isPending ? (
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
