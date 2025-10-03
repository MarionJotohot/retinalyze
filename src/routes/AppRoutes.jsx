import { Routes, Route, Navigate } from "react-router";
import AuthLayout from "../components/layouts/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import HomeRedirect from "./HomeRedirect";
import Login from "../views/auth/Login";
import ForgotPassword from "../views/auth/ForgotPassword";
import ResetPassword from "../views/auth/ResetPassword";
import Dashboard from "../views/dashboard/Dashboard";
import PatientList from "../views/patient/PatientList";
import AddPatient from "../views/patient/AddPatient";
import Profile from "../views/profile/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect root to appropriate home */}
      <Route path="/" element={<HomeRedirect />} />

      {/* Auth routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      {/* Protected routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/patients" element={<PatientList />} />
        <Route path="/add" element={<AddPatient />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
