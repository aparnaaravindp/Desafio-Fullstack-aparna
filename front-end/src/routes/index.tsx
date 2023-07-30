import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { ProtectedRoutes } from "./ProtectedRoutes";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<ProtectedRoutes />}></Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};
