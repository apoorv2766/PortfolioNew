import React from "react";

const DisplayForm = ({ inputData }) => {
  console.log(inputData);
  return (
    <div>
      {inputData.map((e) => {
        return (
          <div>
            <h1>{e.title}</h1>;<h1>{e.price}</h1>;<h1>{e.name}</h1>;
          </div>
        );
      })}
    </div>
  );
};

export default DisplayForm;
