import React from "react";

const Button = ({ title }) => {
  return (
    <button
      className={`btn`}
      style={{ backgroundColor: "#efc81a", color: "white" }}
    >
      {title}
    </button>
  );
};

export default Button;
