import React from "react";
import * as ReactDOMClient from 'react-dom/client';
import HolaMundo from "./components/HolaMundo";

const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <HolaMundo />
  </React.StrictMode>
);