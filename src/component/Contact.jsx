import React, { useContext, useState } from "react";
import { dataContext } from "../Context/ContactContext";
import { Link } from "react-router-dom";

const Contact = () => {
  const { ChangeHandler, submitHandler, value, data } = useContext(dataContext);

  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center pt-10 items-center p-4 "
    >
      <form
        method="POST"
        // action="https://getform.io/f/3b6a1451-c2fb-4534-87b5-466a43778efb"
        className="flex flex-col max-w-[600px] w-full"
        onSubmit={submitHandler}
      >
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 pt-4 ">
            //Submit the form below or shoot me on email- apoorv2766@outlook.com
          </p>
        </div>
        <input
          required
          className="bg-[#ccd6f6] p-1 mt-10"
          type="text"
          name="name"
          id=""
          placeholder="Name"
          onChange={ChangeHandler}
        />
        <input
          required
          className="my-2 p-1 bg-[#ccd6f6]"
          type="email"
          name="email"
          id=""
          placeholder="Email"
          onChange={ChangeHandler}
        />
        <textarea
          required
          className="bg-[#ccd6f6] p-1"
          name="message"
          id=""
          placeholder="Message"
          onChange={ChangeHandler}
          rows="8"
        ></textarea>
        <Link to="/details">
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-2 my-4 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Contact;
