import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Skeleton,
  Switch,
} from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { useParams } from "react-router-dom";
import z from "zod";
import { useGet, usePut } from "../../../api/api-calls";
import { DataTable } from "../../../components/DataTable/DataTable";
import { TableSkeleton } from "../../../components/TableSkeleton/TableSkeleton";

export const schema = z.object({
  id: z.number(),
  enrolledCourse: z.object({
    id: z.number(),
    uid: z.string(),
    title: z.string(),
  }),
  paid: z.boolean(),
});

const UserAccess = ({
  enrolledCourse,
}: {
  enrolledCourse: z.infer<typeof schema>;
}) => {
  const [isChecked, setIsChecked] = useState(enrolledCourse.paid);
  const { mutate: grantAccess, isPending: grantPending } = usePut(
    `enrolled_course/${enrolledCourse.id}?isApproved=true`
  );
  const { mutate: revokeAccess, isPending: revokePending } = usePut(
    `enrolled_course/${enrolledCourse.id}?isApproved=false`
  );

  return (
    <div className="py-2">
      <Switch
        disabled={grantPending || revokePending}
        checked={isChecked}
        onCheckedChange={(checked) => {
          setIsChecked(checked);
          if (checked) grantAccess({});
          else revokeAccess({});
        }}
      />
    </div>
  );
};

export function ManageEnrolment() {
  const columns: ColumnDef<z.infer<typeof schema>>[] = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "course.uid",
      header: "UID",
    },
    {
      accessorKey: "course.title",
      header: "Title",
    },
    {
      id: "access",
      header: "Access",
      cell: ({ row }) => <UserAccess enrolledCourse={row.original} />,
    },
  ];

  const { userId } = useParams();
  const { data, isPending } = useGet(`user/${userId}`);
  const { data: enrolledCoursesData, isFetching } = useGet(
    `enrolled_course/${userId}`
  );

  return (
    <div>
      {isPending ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(3)].map((_, i) => (
            <Card className="@container/card" key={i}>
              <CardHeader>
                <CardDescription>
                  <Skeleton className="w-[200px] h-5" />
                </CardDescription>
                <CardTitle>
                  <Skeleton className="w-[70px] h-10" />
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card className="@container/card">
            <CardHeader>
              <CardDescription className="text-base">ID</CardDescription>
              <CardTitle className="text-3xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {data.id}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription className="text-base">Name</CardDescription>
              <CardTitle className="text-3xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {data.fullName}
              </CardTitle>
            </CardHeader>
          </Card>
          <Card className="@container/card">
            <CardHeader>
              <CardDescription className="text-base">Grade</CardDescription>
              <CardTitle className="text-3xl font-semibold tabular-nums @[250px]/card:text-3xl">
                {data.grade}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      )}
      {isFetching ? (
        <div className="mt-4 space-y-4">
          <Skeleton className="w-[200px] h-6" />
          <TableSkeleton rows={5} columns={4} />
        </div>
      ) : (
        <div className="mt-4 space-y-4">
          <h2 className="text-lg">Enrolled Courses : </h2>
          <DataTable data={enrolledCoursesData} columns={columns} />
        </div>
      )}
    </div>
  );
}
