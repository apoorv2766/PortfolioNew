import React, { useContext } from "react";
import { dataContext } from "../Context/ContactContext";

const AllDetails = () => {
  const { data } = useContext(dataContext);
  console.log(data);

  return <div>AllDetails</div>;
};

export default AllDetails;
