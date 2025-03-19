import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TodosProvider } from "./store/Todos.tsx";
import { BrowserRouter } from "react-router-dom";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodosProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TodosProvider>
  </StrictMode>
);
