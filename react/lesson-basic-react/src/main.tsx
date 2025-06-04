import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App1 from "./App1.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      {/*  <App /> */}
      <App1 />
    </BrowserRouter>
  </StrictMode>
);
