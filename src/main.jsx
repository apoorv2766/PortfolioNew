import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Form from "./component/Form.jsx";
import DisplayForm from "./component/DisplayForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <Form /> */}
  </React.StrictMode>
);
