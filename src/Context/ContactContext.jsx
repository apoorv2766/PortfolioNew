import React, { createContext, useState } from "react";
export const dataContext = createContext();
export const ContactContext = ({ children }) => {
  let [value, setValue] = useState({ name: "", email: "", message: "" });
  let [data, setData] = useState([]);
  function ChangeHandler(e) {
    let { name, value } = e.target;
    setValue((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    setData((prev) => {
      return [...prev, value];
    });
  }
  return (
    <dataContext.Provider value={{ ChangeHandler, submitHandler, value, data }}>
      {children}
    </dataContext.Provider>
  );
};
