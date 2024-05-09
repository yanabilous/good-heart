
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/style.scss";


import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
      <App />
  </Router>
);

