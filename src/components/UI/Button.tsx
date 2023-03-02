import React from "react";

const Button = (props) => {
  return (
    <button
      className="rounded-full bg-blue-500 cursor-pointer italic px-4 py-1"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

