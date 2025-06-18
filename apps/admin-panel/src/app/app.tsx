import { isJwtExpired } from "@school-wits/utils";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import Unauthorized from "../pages/error/Unauthorized";
import AppExternal from "./AppExternal";
import AppInternal from "./AppInternal";

export default function App() {
  const { user, token } = useAuth();

  return (
    <div className="bg-base-300 text-base-content">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      {/* checks for user ad token existence, token expiry and user permission */}
      {user && token && !isJwtExpired(token) ? (
        user?.roles
          .map((r: { name: string }) => r.name)
          .includes("ROLE_ADMIN") ? (
          <AppInternal />
        ) : (
          <Unauthorized />
        )
      ) : (
        <AppExternal />
      )}
    </div>
  );
}
