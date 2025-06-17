import { ToastContainer } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import AppExternal from "./AppExternal";
import AppInternal from "./AppInternal";

export default function App() {
  const { user } = useAuth();

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
      {user ? <AppInternal /> : <AppExternal />}
    </div>
  );
}
