import { Button } from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useGet } from "../../../api/api-calls";
import { DataTable } from "../../../components/DataTable/DataTable";
import { TableSkeleton } from "../../../components/TableSkeleton/TableSkeleton";

export const schema = z.object({
  id: z.number(),
  title: z.string(),
  details: z.string(),
});

export function Notices() {
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
      accessorKey: "details",
      header: "Details",
    },
  ];

  const { data, isSuccess, isFetching } = useGet("notice/admin");

  return (
    <div>
      <div className="flex justify-end mb-2 md:mb-4">
        <Button asChild className="hidden md:flex items-center">
          <Link to="add">
            <FaPlus /> Add Notice
          </Link>
        </Button>
        <Button asChild size="icon" className="md:hidden">
          <Link to="add">
            <FaPlus />
          </Link>
        </Button>
      </div>
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
