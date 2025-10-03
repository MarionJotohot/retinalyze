import { Navigate } from "react-router";
import { useAuthStore } from "../stores/authStore";

const HomeRedirect = () => {
  const { user, isLoading } = useAuthStore();

  if (isLoading) return <div>Loading...</div>;

  return user ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <Navigate to="/auth/login" replace />
  );
};

export default HomeRedirect;
