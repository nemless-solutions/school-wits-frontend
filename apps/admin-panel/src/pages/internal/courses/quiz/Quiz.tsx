import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@school-wits/ui";
import { FaPlus } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdOutlineFindInPage, MdOutlineQuiz } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { z } from "zod";
import { useGet } from "../../../../api/api-calls";
import { TableSkeleton } from "../../../../components/TableSkeleton/TableSkeleton";

export const schema = z.object({
  id: z.number(),
  title: z.string(),
  details: z.string(),
});

export function Quiz() {
  const { videoId } = useParams();

  return (
    <div>
      <div className="flex justify-end mb-2 md:mb-4">
        <Button asChild className="hidden md:flex items-center">
          <Link to="add">
            <FaPlus /> Add Quiz
          </Link>
        </Button>
        <Button asChild size="icon" className="md:hidden">
          <Link to="add">
            <FaPlus />
          </Link>
        </Button>
      </div>
      <QuizTable videoId={videoId || ""} />
    </div>
  );
}

const QuizTable = function ({ videoId }: { videoId: number | string }) {
  const { data, isSuccess, isFetching } = useGet(`quiz/${videoId}`);

  return (
    <div>
      {isFetching ? (
        <TableSkeleton />
      ) : isSuccess ? (
        <div className="overflow-hidden rounded-lg border">
          <Table>
            <TableHeader className="bg-muted sticky top-0 z-10">
              <TableRow>
                <TableHead className="w-[25%]">ID</TableHead>
                <TableHead className="w-[25%]">Mark</TableHead>
                <TableHead className="w-[25%]">Duration (in Minutes)</TableHead>
                <TableHead className="w-[25%]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>{data.id}</TableCell>
                <TableCell>{data.questionMark}</TableCell>
                <TableCell>{data.duration}</TableCell>
                <TableCell className="flex justify-center">
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
                    <DropdownMenuContent align="end" className="w-40">
                      <DropdownMenuItem
                        asChild
                        className="flex items-center gap-2"
                      >
                        <Link to={`question/${data.id}`}>
                          <MdOutlineQuiz /> Add Questions
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem
                        asChild
                        className="flex items-center gap-2"
                      >
                        <Link to={`answer/${data.id}`}>
                          <MdOutlineFindInPage /> Add Answers
                        </Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center text-2xl text-neutral-700 font-bold mt-10">
          No Data Found
        </div>
      )}
    </div>
  );
};
