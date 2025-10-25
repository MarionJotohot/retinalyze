import { useAuthStore } from "../stores/authStore";

export const redirectByRole = (navigate) => {
  const { isSuperAdmin, isDoctor, isPatient } = useAuthStore.getState();

  if (isSuperAdmin()) {
    navigate("/admin/dashboard");
  } else if (isDoctor()) {
    navigate("/dashboard");
  } else if (isPatient()) {
    navigate("/user");
  } else {
    navigate("/");
  }
};
