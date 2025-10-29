import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import App from "./App";
import "./assets/index.css";

const newQueryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={newQueryClient}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </QueryClientProvider>
);
