import { Skeleton, Switch } from "@school-wits/ui";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import { useParams } from "react-router-dom";
import z from "zod";
import { useGet } from "../../../api/api-calls";
import { DataTable } from "../../../components/DataTable/DataTable";
import { TableSkeleton } from "../../../components/TableSkeleton/TableSkeleton";

const dummyData = [
  {
    id: 1,
    course: {
      id: 1,
      uid: "Mathematics-VI",
      grade: "VI",
      title: "Mathematics",
      description: "Dummy description",
      mode: "ONLINE",
      type: "LONG",
      fee: 100.0,
      createdAt: "2025-06-05T15:40:59.805+00:00",
    },
    createdAt: "2025-06-20T18:43:50.746+00:00",
    paid: false,
  },
  {
    id: 2,
    course: {
      id: 2,
      uid: "Physics-VI",
      grade: "VI",
      title: "Physics",
      description: "Dummy description",
      mode: "ONLINE",
      type: "LONG",
      fee: 100.0,
      createdAt: "2025-06-05T15:40:59.805+00:00",
    },
    createdAt: "2025-06-20T18:43:50.746+00:00",
    paid: false,
  },
  {
    id: 3,
    course: {
      id: 3,
      uid: "English-VI",
      grade: "VI",
      title: "English",
      description: "Dummy description",
      mode: "ONLINE",
      type: "LONG",
      fee: 100.0,
      createdAt: "2025-06-05T15:40:59.805+00:00",
    },
    createdAt: "2025-06-20T18:43:50.746+00:00",
    paid: true,
  },
  {
    id: 4,
    course: {
      id: 4,
      uid: "Bangla-VI",
      grade: "VI",
      title: "Bangla",
      description: "Dummy description",
      mode: "ONLINE",
      type: "LONG",
      fee: 100.0,
      createdAt: "2025-06-05T15:40:59.805+00:00",
    },
    createdAt: "2025-06-20T18:43:50.746+00:00",
    paid: false,
  },
];

export const schema = z.object({
  id: z.number(),
  course: z.object({ id: z.number(), uid: z.string(), title: z.string() }),
  paid: z.boolean(),
});

const UserAccess = ({
  user,
  handleCheck,
}: {
  user: z.infer<typeof schema>;
  handleCheck: (checked: boolean) => void;
}) => {
  const [isChecked, setIsChecked] = useState(user.paid);
  return (
    <div className="py-2">
      <Switch
        checked={isChecked}
        onCheckedChange={(checked) => {
          setIsChecked(checked);
          handleCheck(checked);
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
      cell: ({ row }) => (
        <UserAccess
          user={row.original}
          handleCheck={(checked) => console.log(checked)} // todo: handle granting or revoking access
        />
      ),
    },
  ];

  const { userId } = useParams();
  const { data, isPending } = useGet(`user/${userId}`);

  return (
    <div>
      {isPending ? (
        <div>
          <div className="space-y-3">
            <Skeleton className="w-[120px] h-6" />
            <Skeleton className="w-[250px] h-6" />
            <Skeleton className="w-[200px] h-6" />
          </div>
          <div className="mt-4 space-y-4">
            <Skeleton className="w-[200px] h-6" />
            <TableSkeleton rows={5} columns={4} />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <p className="text-lg">
              Student ID : <span className="font-bold">{data.id}</span>
            </p>
            <p className="text-lg">
              Student Name : <span className="font-bold">{data.fullName}</span>
            </p>
            <p className="text-lg">
              Student Grade : <span className="font-bold">{data.grade}</span>
            </p>
          </div>
          <div className="mt-4 space-y-4">
            <h2 className="text-lg">Enrolled Courses : </h2>
            <DataTable data={dummyData} columns={columns} />
          </div>
        </div>
      )}
    </div>
  );
}
