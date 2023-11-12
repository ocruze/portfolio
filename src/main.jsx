import "bootstrap";
import "./assets/styles/index.scss";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./i18n";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
