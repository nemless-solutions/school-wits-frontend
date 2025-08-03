import { ColumnDef } from "@tanstack/react-table";
import { z } from "zod";
import { useGet } from "../../../../api/api-calls";
import { DataTable } from "../../../../components/DataTable/DataTable";
import { TableSkeleton } from "../../../../components/TableSkeleton/TableSkeleton";

export const schema = z.object({
  id: z.number(),
  uid: z.string(),
  fullName: z.string(),
  email: z.string(),
  curriculum: z.string(),
});

export function NonEnrolled() {
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
    /* {
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
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    }, */
  ];

  const { data, isSuccess, isFetching } = useGet("user/no-enrollments");

  console.log(data);

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
