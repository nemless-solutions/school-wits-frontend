import { auth } from "@/auth";
import { AppSidebar } from "@/components/AppSidebar/AppSidebar";
import { SidebarProvider } from "@/components/client-ui";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) redirect("/sign-in");

  return (
    <SidebarProvider>
      <AppSidebar session={session} />
      {children}
    </SidebarProvider>
  );
}
