import { Button } from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";
import { useGet } from "../../api/api-calls";
import { DataTable } from "../DataTable/DataTable";
import { TableSkeleton } from "../TableSkeleton/TableSkeleton";

export const schema = z.object({
  id: z.number(),
  title: z.string(),
  type: z.string(),
});

export function VideoList() {
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
      accessorKey: "type",
      header: "File Type",
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <div className="flex justify-center">
          <Button asChild variant="secondary">
            <Link to={`${row.original.id}`}>Select</Link>
          </Button>
        </div>
      ),
    },
  ];

  const { topicId } = useParams();
  const { data, isSuccess, isFetching } = useGet(`course_file/${topicId}`);

  const filterForVideo = function (
    data: { type: string; id: number; title: string; description: string }[]
  ) {
    return data.filter(
      (video: { type: string }) => video.type.toLowerCase() === "video"
    );
  };

  return (
    <div>
      <h2 className="text-center text-2xl font-semibold text-neutral-600 mb-4">
        Select A Video File to See Quiz
      </h2>
      {isFetching ? (
        <TableSkeleton />
      ) : isSuccess ? (
        <DataTable data={filterForVideo(data)} columns={columns} />
      ) : (
        <div className="text-center text-2xl text-destructive font-bold mt-10">
          Something Went Wrong
        </div>
      )}
    </div>
  );
}
