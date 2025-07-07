import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
} from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { FaEdit, FaPlus, FaTrashAlt } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useGet } from "../../../../api/api-calls";
import { DataTable } from "../../../../components/DataTable/DataTable";
import { TableSkeleton } from "../../../../components/TableSkeleton/TableSkeleton";

export const schema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
});

export function CourseTopics() {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const { data, isFetching } = useGet("course");

  return (
    <div>
      <div className="flex justify-end mb-2 md:mb-4">
        <Button asChild className="hidden md:flex items-center">
          <Link to="add">
            <FaPlus /> Add Topic
          </Link>
        </Button>
        <Button asChild size="icon" className="md:hidden">
          <Link to="add">
            <FaPlus />
          </Link>
        </Button>
      </div>
      <div className="mb-4">
        {isFetching ? (
          <Skeleton className="w-[180px] h-10" />
        ) : (
          <Select onValueChange={(value) => setSelectedCourseId(+value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select A Course" />
            </SelectTrigger>
            <SelectContent>
              {data.map((course: { id: number; uid: string }) => (
                <SelectItem key={course.id} value={`${course.id}`}>
                  {course.uid}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </div>
      {selectedCourseId ? (
        <TopicTable courseId={selectedCourseId} />
      ) : (
        <div className="flex items-center justify-center mt-20">
          <p className="text-2xl font-bold text-neutral-400">
            Please Select A Course First
          </p>
        </div>
      )}
    </div>
  );
}

const TopicTable = function ({ courseId }: { courseId: number }) {
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
            <DropdownMenuItem
              variant="destructive"
              className="flex items-center gap-2"
            >
              <FaTrashAlt />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  const { data, isSuccess, isFetching } = useGet(
    `course_topic/course/${courseId}`
  );

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
};
