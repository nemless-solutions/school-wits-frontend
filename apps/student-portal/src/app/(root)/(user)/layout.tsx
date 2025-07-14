import { auth } from "@/auth";
import { notFound } from "next/navigation";

export default async function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.token) {
    return notFound();
  }

  return <>{children}</>;
}
