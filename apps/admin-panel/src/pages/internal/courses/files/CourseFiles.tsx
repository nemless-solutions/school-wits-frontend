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
  ];

  const { topicId } = useParams();
  const { data, isSuccess, isFetching } = useGet(`course_file/${topicId}`);

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
    </div>
  );
}
