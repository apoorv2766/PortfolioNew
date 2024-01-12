import React, { useState } from "react";
import DisplayForm from "./DisplayForm";

const Form = () => {
  let [input, setInput] = useState({ title: "", price: "", date: "" });
  let [inputData, setInputData] = useState([]);
  function submitForm(e) {
    e.preventDefault();
    let value = e.target.value;
    let name = e.target.name;
    setInput({ ...input, [name]: value });
  }
  function submit(e) {
    e.preventDefault();
    setInputData([...inputData, input]);
  }
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <form
        action=""
        style={{
          border: "3px solid",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "10px",
          width: "50vh",
          backgroundColor: "blue",
        }}
      >
        <label htmlFor="">Title</label>
        <input
          type="text"
          name="title"
          id=""
          onChange={(e) => {
            submitForm(e);
          }}
        />
        <label htmlFor="">Price</label>
        <input
          type="number"
          name="price"
          id=""
          onChange={(e) => {
            submitForm(e);
          }}
        />
        <label htmlFor="">Date</label>
        <input
          type="date"
          name="name"
          id=""
          onChange={(e) => {
            submitForm(e);
          }}
        />
        <button
          style={{
            border: "2px solid",
            backgroundColor: "green",
            width: "30%",
          }}
          onClick={(e) => submit(e)}
        >
          Submit
        </button>
      </form>
      <DisplayForm inputData= {inputData} />
    </div>
  );
};

export default Form;
