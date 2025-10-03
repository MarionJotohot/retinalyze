import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "../stores/authStore";

const ProtectedRoute = () => {
  const { user, isLoading } = useAuthStore();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return user ? <Outlet /> : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;
