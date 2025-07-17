import { DropdownMenuSeparator } from "@radix-ui/react-dropdown-menu";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";
import { useGet } from "../../../../api/api-calls";
import { DataTable } from "../../../../components/DataTable/DataTable";
import { DeleteAlert } from "../../../../components/DeleteAlert/DeleteAlert";
import { TableSkeleton } from "../../../../components/TableSkeleton/TableSkeleton";

export const schema = z.object({
  id: z.number(),
  title: z.string(),
  type: z.string(),
  description: z.string(),
});

export function CourseFiles() {
  const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "title",
      header: "Name",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      accessorKey: "type",
      header: "Type",
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="data-[state=open]:bg-muted text-muted-foreground flex size-8"
              size="icon"
            >
              <HiOutlineDotsVertical />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-32">
            <DropdownMenuItem asChild className="flex items-center gap-2">
              <Link to={`${row.original.id}`}>
                <FaEdit />
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild variant="destructive">
              <button
                className="flex items-center gap-2 w-full"
                onClick={() => {
                  setId(row.original.id);
                  setAlertOpen(true);
                }}
              >
                <FaTrashAlt />
                Delete
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const [alertOpen, setAlertOpen] = useState(false);
  const [id, setId] = useState<number | null>(null);

  const { topicId } = useParams();
  const { data, isSuccess, isFetching, refetch } = useGet(
    `course_file/${topicId}`
  );

  return (
    <div>
      <div className="flex justify-end mb-2 md:mb-4">
        <Button asChild className="hidden md:flex items-center">
          <Link to="add">
            <FaPlus /> Add File
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
      <DeleteAlert
        open={alertOpen}
        onOpenChange={setAlertOpen}
        url={`course/${id}`}
        onSuccess={() => refetch()}
      />
    </div>
  );
}
