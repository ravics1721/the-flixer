import React from "react";
import { useParams } from "react-router";

const Person = () => {
  const { pid } = useParams();
  return (
    <div>
      <h1>Person id : {pid}</h1>
    </div>
  );
};

export default Person;
