import { Routes, Route, Outlet, Navigate } from "react-router";
import Login from "../views/auth/Login";
import ForgotPassword from "../views/auth/ForgotPassword";
import ResetPassword from "../views/auth/ResetPassword";
import Dashboard from "../views/dashboard/Dashboard";
import PatientList from "../views/patient/PatientList";
import AddPatient from "../views/patient/AddPatient";
import Profile from "../views/profile/Profile";

// Simple layout components
const AuthLayout = () => (
  <div className="auth-layout">
    <Outlet /> {/* Auth pages render here */}
  </div>
);

const DashboardLayout = () => (
  <div className="dashboard-layout">
    {/* Example: sidebar, navbar, etc */}
    <Outlet /> {/* Dashboard pages render here */}
  </div>
);

const AppRoutes = () => {
  return (
    <Routes>
      {/* Redirect root to login */}
      <Route path="/" element={<Navigate to="/auth/login" replace />} />

      {/* Auth routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      {/* Dashboard routes */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} /> {/* /dashboard */}
        <Route path="patients" element={<PatientList />} />
        <Route path="add" element={<AddPatient />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
