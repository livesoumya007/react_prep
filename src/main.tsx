import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import CustomHookUse from "./examples/CustomHookUse.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomHookUse />
  </StrictMode>
);
