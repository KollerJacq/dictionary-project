import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="index">
      <App />
    </div>{" "}
    <footer className="text-center">
      This application was coded by{" "}
      <a href="https://github.com/KollerJacq" target="_blank" rel="noreferrer">
        Jacqueline Koller
      </a>{" "}
      and is open-sourced on{" "}
      <a
        href="https://github.com/KollerJacq/dictionary-project"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </footer>
  </React.StrictMode>
);
