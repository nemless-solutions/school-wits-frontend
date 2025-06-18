import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";

export default function AppExternal() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
    </Routes>
  );
}
