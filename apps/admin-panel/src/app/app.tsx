import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";
import { useTheme } from "../contexts/ThemeContext";
import AppExternal from "./AppExternal";
import AppInternal from "./AppInternal";

export default function App() {
  const { user } = useAuth();
  const { theme } = useTheme();

  useEffect(() => {
    localStorage.setItem("colorTheme", JSON.stringify(theme));
    document.documentElement.dataset.theme = theme;
  }, [theme]);

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
