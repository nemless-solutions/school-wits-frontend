"use client";

import { fetcher } from "@/libs/fetcher";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { CourseBundle, EnrolledCourse, Grade, User } from "../../../types";
import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../client-ui";

interface EnrollButtonProps {
  baseUrl: string;
  courseGrade: Grade;
  bundleId: number;
  token: string | undefined;
  courseBundle: CourseBundle;
}

export function EnrollBundleButton({
  baseUrl,
  courseGrade,
  bundleId,
  token,
  courseBundle,
}: EnrollButtonProps) {
  const router = useRouter();

  const [dialogOpen, setDialogOpen] = useState(false);
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

  const getIds = (arr: { id: number }[] | null) =>
    arr?.map((item) => item.id).sort();

  const isEnrolled =
    JSON.stringify(
      getIds(enrolledCourses?.map((course) => course.course) || null)
    ) === JSON.stringify(getIds(courseBundle.courses));

  const handleCourseEnroll = async function () {
    const fetches = courseBundle.courses.map((course) =>
      fetch(`${baseUrl}/enrolled_course?courseId=${course.id}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    );

    try {
      setLoading(true);
      const res = await Promise.all(fetches);
      if (res.map((res) => !res.ok).includes(true))
        throw new Error("Something went wrong");

      toast.success("Course Enrolled Successfully");
      setDialogOpen(false);
      router.push("/dashboard");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {isEnrolled ? (
        <Button
          variant="secondary"
          size="lg"
          className="md:mt-4 md:h-12 md:text-lg font-semibold"
          asChild
        >
          <p>Already Enrolled</p>
        </Button>
      ) : (
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
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
              <DialogDescription className="sr-only">
                Bundle Course Enrollment
              </DialogDescription>
            </DialogHeader>
            <div className="py-8">
              {token ? (
                <p>
                  {isCompatible ? (
                    <>
                      <span>
                        Are you sure you want to enroll in this bundle course ?
                      </span>
                      <br />
                      <span className="mt-2 inline-block">
                        You will be enrolled in the following courses:{" "}
                      </span>
                      <br />
                      <span className="font-medium">
                        {courseBundle.courses
                          .map((course) => course.title)
                          .join(", ")}
                      </span>
                    </>
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
                  disabled={loading}
                  className="w-[120px]"
                  onClick={handleCourseEnroll}
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
