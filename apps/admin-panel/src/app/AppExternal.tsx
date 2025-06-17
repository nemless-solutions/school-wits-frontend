import { Route, Routes } from "react-router-dom";
import SignIn from "../pages/auth/SignIn";

export default function AppExternal() {
  return (
    <Routes>
      <Route path="/*" element={<SignIn />} />
    </Routes>
  );
}
