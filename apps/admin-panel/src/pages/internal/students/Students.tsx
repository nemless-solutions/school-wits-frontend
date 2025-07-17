import { useDebouncedState } from "@school-wits/hooks";
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Input,
} from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { BsSendExclamation } from "react-icons/bs";
import { FaEdit, FaPlus, FaRegTrashAlt } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
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
  curriculum: z.string(),
});

export function Students() {
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
      accessorKey: "curriculum",
      header: "Curriculum",
    },
    {
      accessorKey: "email",
      header: "Email",
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
            <DropdownMenuItem asChild className="flex items-center gap-2">
              <Link to={`/notices/send/individual/${row.original.id}`}>
                <BsSendExclamation />
                Send Notice
              </Link>
            </DropdownMenuItem>
            {/* <DropdownMenuSeparator />
            <DropdownMenuItem
              variant="destructive"
              className="flex items-center gap-2"
            >
              <FaTrashAlt />
              Delete
            </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const [searchNameDebounced, setSearchNameDebounced] = useDebouncedState(
    "",
    500
  );
  const [searchName, setSearchName] = useState("");

  const [searchIdDebounced, setSearchIdDebounced] = useDebouncedState<
    number | string
  >("", 500);
  const [searchId, setSearchId] = useState<string | number>("");

  const { data, isSuccess, isFetching } = useGet(
    `user/search?userId=${searchIdDebounced || ""}&name=${searchNameDebounced}`
  );

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
      <div className="flex mb-4 gap-20">
        <div className="flex items-center gap-3 max-w-[120px]">
          <Input
            className="flex-1"
            value={searchId || ""}
            onChange={(e) => {
              setSearchId(Number(e.target.value));
              setSearchIdDebounced(Number(e.target.value));
            }}
            type="number"
            placeholder="ID"
          />
          <Button
            size="icon"
            variant="secondary"
            className="size-8"
            onClick={() => {
              setSearchId("");
              setSearchIdDebounced("");
            }}
          >
            <FaRegTrashAlt />
          </Button>
        </div>
        <div className="flex max-w-[250px] gap-3 items-center">
          <Input
            value={searchName}
            placeholder="Name"
            className="flex-1"
            onChange={(e) => {
              setSearchName(e.target.value);
              setSearchNameDebounced(e.target.value);
            }}
          />
          <Button
            size="icon"
            variant="secondary"
            className="size-8"
            onClick={() => {
              setSearchName("");
              setSearchNameDebounced("");
            }}
          >
            <FaRegTrashAlt />
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
    </div>
  );
}
