import MyApp from "./myApp";
import React from "react";
import { createRoot } from "react-dom/client";

window.loadApp = (json) => {
  const props = JSON.parse(json);
  if (props) {
    const container = document.getElementById("root");
    const root = createRoot(container);
    root.render(<MyApp props={props} />);
  }
};