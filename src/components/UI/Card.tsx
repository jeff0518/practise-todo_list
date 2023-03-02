import React from "react";

const Card = (props) => {
  return (
    <div
      className={`bg-white shadow-[0 2px 8px rgba(0, 0, 0, 0.26)] rounded-xl text-center ${props.classStyle}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
