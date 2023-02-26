import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./assets/global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Folder structure idea from https://www.youtube.com/watch?v=UUga4-z7b6s
// React router https://blog.webdevsimplified.com/2022-07/react-router/
// Using indexes to export named files https://stackoverflow.com/questions/44092341/how-do-index-js-files-work-in-react-component-directories
// Installing SASS in react https://www.w3schools.com/react/react_sass_styling.asp

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
