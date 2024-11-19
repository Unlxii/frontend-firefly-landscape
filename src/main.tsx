import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Landscape from "./Landscape.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Landscape />
  </StrictMode>
);