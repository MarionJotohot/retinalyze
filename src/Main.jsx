import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "@mdi/font/css/materialdesignicons.css";
import App from "./App";
import "./assets/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
