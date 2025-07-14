"use client";

import { fetcher } from "@/libs/fetcher";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { EnrolledCourse, Grade, User } from "../../../types";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../client-ui";

interface EnrollButtonProps {
  baseUrl: string;
  courseGrade: Grade;
  courseId: number;
  token: string | undefined;
}

export function EnrollButton({
  baseUrl,
  courseGrade,
  courseId,
  token,
}: EnrollButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [enrolledCourses, setEnrolledCourses] = useState<
    EnrolledCourse[] | null
  >(null);

  useEffect(() => {
    (async function () {
      if (!token) return;
      const user = await fetcher<User>(`${baseUrl}/auth`, token);
      setUser(user);
    })();
  }, [baseUrl, token]);

  useEffect(() => {
    (async function () {
      if (!token) return;
      const enrolledCourses = await fetcher<EnrolledCourse[]>(
        `${baseUrl}/enrolled_course`,
        token
      );
      setEnrolledCourses(enrolledCourses);
    })();
  }, [baseUrl, token]);

  const isCompatible =
    user?.grade === "IX" || user?.grade === "X"
      ? courseGrade === "X" || courseGrade === "IX"
      : courseGrade === user?.grade;

  const enrolledCourse = enrolledCourses?.filter((enrolledCourse) => {
    return enrolledCourse.course.id === courseId;
  });

  const handleCourseEnroll = async function () {
    try {
      setLoading(true);
      const res = await fetch(
        `${baseUrl}/enrolled_course?courseId=${courseId}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error("Something went wrong");

      toast.success("Course Enrolled Successfully");
      setOpen(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {enrolledCourse?.length && enrolledCourse.length > 0 ? (
        <Button
          variant="secondary"
          size="lg"
          className="md:mt-4 md:h-12 md:text-lg font-semibold"
          asChild
        >
          {enrolledCourse[0].paid ? (
            <Link href={`/courses/content/${courseId}`}>Browse Content</Link>
          ) : (
            <p>Pending Payment</p>
          )}
        </Button>
      ) : (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button
              variant="secondary"
              size="lg"
              className="md:mt-4 md:h-12 md:text-lg font-semibold"
            >
              Enroll Now
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {token
                  ? isCompatible
                    ? "Confirm Enrollment"
                    : "Incompatible Course"
                  : "Unauthorized"}
              </DialogTitle>
            </DialogHeader>
            <div className="py-8">
              {token ? (
                <p>
                  {isCompatible ? (
                    "Are you sure you want to enroll in this course ?"
                  ) : (
                    <>
                      You are not eligible to enroll in this course. Please
                      check your grade{" "}
                      <Link
                        href={`/grades/${
                          user?.grade === "IX" || user?.grade === "X"
                            ? "ix_x"
                            : user?.grade
                        }`}
                        className="text-secondary font-medium hover:text-secondary/80 hover:underline duration-300"
                      >
                        here
                      </Link>
                    </>
                  )}
                </p>
              ) : (
                <p>
                  You are not signed in. Please sign in to enroll in a course.{" "}
                  <Link
                    href="/sign-in"
                    className="text-secondary font-medium hover:text-secondary/80 hover:underline duration-300"
                  >
                    Sign In
                  </Link>{" "}
                  or{" "}
                  <Link
                    href="/sign-up"
                    className="text-secondary font-medium hover:text-secondary/80 hover:underline duration-300"
                  >
                    Sign Up
                  </Link>
                </p>
              )}
            </div>
            <DialogFooter className="sm:justify-start">
              {token && isCompatible && (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleCourseEnroll}
                  disabled={loading}
                  className="w-[120px]"
                >
                  {loading ? (
                    <Loader2Icon className="animate-spin scale-150" />
                  ) : (
                    "Enroll Now"
                  )}
                </Button>
              )}
              <DialogClose asChild>
                <Button variant="destructive" size="lg">
                  Cancel
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}
