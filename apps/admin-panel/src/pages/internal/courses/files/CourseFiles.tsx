import { Button } from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { z } from "zod";
import { useGet } from "../../../../api/api-calls";
import { DataTable } from "../../../../components/DataTable/DataTable";
import { CourseSelect } from "../../../../components/Selects/CourseSelect";
import { TopicSelect } from "../../../../components/Selects/TopicSelect";
import { TableSkeleton } from "../../../../components/TableSkeleton/TableSkeleton";

export const schema = z.object({
  id: z.number(),
  title: z.string(),
  type: z.string(),
  description: z.string(),
});

export function CourseFiles() {
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);
  const [selectedTopicId, setSelectedTopicId] = useState<number | null>(null);

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
      <CourseSelect
        setSelectedCourseId={setSelectedCourseId}
        setSelectedTopicId={setSelectedTopicId}
      />
      {selectedCourseId ? (
        <TopicSelect
          courseId={selectedCourseId}
          setSelectedTopicId={setSelectedTopicId}
        />
      ) : (
        <div className="flex items-center justify-center mt-20">
          <p className="text-2xl font-bold text-neutral-400">
            Please Select A Course First
          </p>
        </div>
      )}
      {selectedTopicId ? (
        <div className="mb-4">
          <FilesTable topicId={selectedTopicId} />
        </div>
      ) : selectedCourseId ? (
        <div className="flex items-center justify-center mt-20">
          <p className="text-2xl font-bold text-neutral-400">
            Please Select A Topic
          </p>
        </div>
      ) : null}
    </div>
  );
}

const FilesTable = function ({ topicId }: { topicId: number }) {
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

  const { data, isSuccess, isFetching } = useGet(`course_file/${topicId}`);

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
