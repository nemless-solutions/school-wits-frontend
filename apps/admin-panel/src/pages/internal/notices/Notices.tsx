import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { FaPlus, FaTrashAlt } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useGet } from "../../../api/api-calls";
import { DataTable } from "../../../components/DataTable/DataTable";
import { DeleteAlert } from "../../../components/DeleteAlert/DeleteAlert";
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

  const { data, refetch, isSuccess, isFetching } = useGet("notice/admin");

  return (
    <div>
      <div className="flex items-center flex-col sm:flex-row gap-4 justify-between mb-2 md:mb-4">
        <div>
          <p className="font-semibold text-xl">Send Notice To: </p>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <Button asChild className="flex items-center">
            <Link to="send/all">
              <FaPlus /> All
            </Link>
          </Button>
          <Button asChild className="flex items-center">
            <Link to="send/group">
              <FaPlus /> Group
            </Link>
          </Button>
          <Button asChild className="flex items-center">
            <Link to="send/individual">
              <FaPlus /> Individual
            </Link>
          </Button>
        </div>
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
      <DeleteAlert
        open={alertOpen}
        onOpenChange={setAlertOpen}
        url={`notice/${id}`}
        onSuccess={() => refetch()}
      />
    </div>
  );
}
