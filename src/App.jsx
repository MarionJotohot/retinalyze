import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router";
import { useAuthStore } from "./stores/authStore";
import { useEffect } from "react";

const App = () => {
  // Access the initialize function from the auth store
  const initialize = useAuthStore((state) => state.initialize);

  // Initialize authentication state on app load
  useEffect(() => {
    initialize();
  }, [initialize]);
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
