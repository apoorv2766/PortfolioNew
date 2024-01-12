import React from "react";
import "./index.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Work from "./component/Work";
import Contact from "./component/Contact";
import { Route, Routes } from "react-router-dom";
import AllDetails from "./component/AllDetails";
import WholeDetails from "./component/WholeDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/details" element={<AllDetails />}></Route>
        <Route path="/" element={<WholeDetails />}></Route>
      </Routes>
    </>
  );
}

export default App;
