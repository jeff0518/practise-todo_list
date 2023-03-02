import React from "react";

const Button = (props) => {
  return (
    <button
      className="rounded-full bg-blue-500"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

