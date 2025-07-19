import { useDebouncedState } from "@school-wits/hooks";
import { Button, Input } from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
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

  const [searchNameDebounced, setSearchNameDebounced] = useDebouncedState(
    "",
    500
  );
  const [searchName, setSearchName] = useState("");
  /* 
  const [searchIdDebounced, setSearchIdDebounced] = useDebouncedState<
    number | string
  >("", 500);
  const [searchId, setSearchId] = useState<string | number>(""); */

  const { data, isSuccess, isFetching } = useGet(
    `user/search?roleName=ROLE_STUDENT&name=${searchNameDebounced}`
  );

  return (
    <div>
      <div className="flex mb-4 gap-20">
        {/* <div className="flex items-center gap-3 max-w-[120px]">
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
        </div> */}
        <div className="flex w-full max-w-[300px] gap-3 items-center">
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
            className="size-7 opacity-70"
            onClick={() => {
              setSearchName("");
              setSearchNameDebounced("");
            }}
          >
            <FaRegTrashAlt className="text-sm" />
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
