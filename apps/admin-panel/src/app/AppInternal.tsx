import { Route, Routes } from "react-router-dom";
import { AppInternalLayout } from "../components/InternalLayout/AppInternalLayout";
import { useAuth } from "../contexts/AuthContext";
import NotFound from "../pages/error/NotFound";
import Unauthorized from "../pages/error/Unauthorized";
import Home from "../pages/internal/Home";
import Teachers from "../pages/internal/teachers/Teachers";

export default function AppInternal() {
  const { user } = useAuth();

  if (
    !user?.roles
      ?.map((role: { id: number; name: string }) => role.name.toUpperCase())
      .includes("ROLE_ADMIN")
  ) {
    return <Unauthorized />;
  }

  return (
    <div>
      <AppInternalLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppInternalLayout>
    </div>
  );
}
