import React from "react";
import ReactDOM from "react-dom/client";
import MainNavigation from "./shared/MainNavigation";
import App from "./shared/App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
