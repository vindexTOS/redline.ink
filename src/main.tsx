import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RobotContextProvider } from "./context/RobotContext.tsx";
import { NavigationContextProvider } from "./context/NavigationContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <NavigationContextProvider>
    <RobotContextProvider>
      <App />
    </RobotContextProvider>
  </NavigationContextProvider>
);
