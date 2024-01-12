import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Form from "./component/Form.jsx";
import DisplayForm from "./component/DisplayForm.jsx";
import Contact from "./component/Contact.jsx";
import { ContactContext } from "./Context/ContactContext.jsx";
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactContext>
        <App />
      </ContactContext>
    </BrowserRouter>
  </React.StrictMode>
);
