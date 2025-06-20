import { SidebarInset, SidebarProvider } from "@school-wits/ui";
import { Route, Routes } from "react-router-dom";
import { AppSidebar } from "../components/Sidebar/AppSidebar";
import { SiteHeader } from "../components/SiteHeader/SiteHeader";
import { NotFound } from "../pages/error/NotFound";
import { Enrolment } from "../pages/internal/enrolment/Enrolment";
import { ManageEnrolment } from "../pages/internal/enrolment/ManageEnrolment";
import { Home } from "../pages/internal/Home";
import { CreateStudent } from "../pages/internal/students/CreateStudent";
import { EditStudent } from "../pages/internal/students/EditStudent";
import { Students } from "../pages/internal/students/Students";
import { Teachers } from "../pages/internal/teachers/Teachers";

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset className="h-[calc(100vh-20px)] overflow-hidden">
        <SiteHeader />
        <div className="flex flex-1 flex-col overflow-y-scroll">
          <div className="@container/main flex flex-1 flex-col gap-2 h-full">
            <div className="p-2 md:p-4 h-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/students" element={<Students />} />
                <Route path="/students/add" element={<CreateStudent />} />
                <Route path="/students/:id" element={<EditStudent />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/enrolments" element={<Enrolment />} />
                <Route
                  path="/enrolments/:userId"
                  element={<ManageEnrolment />}
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
