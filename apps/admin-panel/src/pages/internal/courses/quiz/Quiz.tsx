import { Button } from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";
import { useGet } from "../../../../api/api-calls";
import { DataTable } from "../../../../components/DataTable/DataTable";
import { TableSkeleton } from "../../../../components/TableSkeleton/TableSkeleton";

export const schema = z.object({
  id: z.number(),
  title: z.string(),
  questionMark: z.number(),
  duration: z.number(),
});

export function Quiz() {
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
      accessorKey: "questionMark",
      header: "Marks",
    },
    {
      accessorKey: "duration",
      header: "Duration",
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <div className="flex justify-center">
          <Button asChild variant="secondary">
            <Link to={`${row.original.id}`}>Manage</Link>
          </Button>
        </div>
      ),
    },
  ];

  const { videoId } = useParams();
  const { data, isSuccess, isFetching } = useGet(`quiz/${videoId}`);

  return (
    <div>
      <div className="flex justify-end mb-2 md:mb-4">
        <Button asChild className="hidden md:flex items-center">
          <Link to="add">
            <FaPlus /> Add Quiz
          </Link>
        </Button>
        <Button asChild size="icon" className="md:hidden">
          <Link to="add">
            <FaPlus />
          </Link>
        </Button>
      </div>
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
    </div>
  );
}
